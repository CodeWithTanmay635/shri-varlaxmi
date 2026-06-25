"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// ─── Cursor State Types ────────────────────────────────────────────────────
type CursorState =
  | "default"
  | "button"
  | "product"
  | "gallery"
  | "link"
  | "video"
  | "drag"
  | "map";

interface CursorData {
  state: CursorState;
  label: string;
}

// ─── Spring config — heavy, precise, no bounce ─────────────────────────────
const SPRING_SLOW = { stiffness: 160, damping: 28, mass: 1.2 };
const SPRING_FAST = { stiffness: 220, damping: 32, mass: 0.9 };

// ─── Easing for Framer Motion transitions ─────────────────────────────────
const EASE_PRECISION = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ─── Detect cursor mode from DOM element ──────────────────────────────────
function detectCursorData(target: HTMLElement): CursorData {
  const el = target.closest<HTMLElement>(
    "[data-cursor], [data-cursor-text], a, button, [role='button'], video, [data-draggable], [data-map], input, textarea, select"
  );

  if (!el) return { state: "default", label: "" };

  // Explicit override via data-cursor
  const explicitState = el.getAttribute("data-cursor") as CursorState | null;
  const explicitLabel = el.getAttribute("data-cursor-label") ?? "";
  if (explicitState) return { state: explicitState, label: explicitLabel };

  // Legacy data-cursor-text support
  const legacyText = el.getAttribute("data-cursor-text");
  if (legacyText) return { state: "button", label: legacyText };

  // Video element
  if (el.tagName === "VIDEO" || el.closest("[data-video]")) {
    return { state: "video", label: "" };
  }

  // Map canvas
  if (el.closest("[data-map], .mapboxgl-canvas, .maplibregl-canvas")) {
    return { state: "map", label: "" };
  }

  // Draggable
  if (el.closest("[data-draggable], [draggable='true']")) {
    return { state: "drag", label: "" };
  }

  // Gallery item
  if (el.closest("[data-gallery], .gallery-item")) {
    return { state: "gallery", label: "" };
  }

  // Product image
  if (el.closest("[data-product-img], .product-card-img")) {
    return { state: "product", label: "View Product" };
  }

  // Anchor / button — infer label from text content
  if (
    el.tagName === "A" ||
    el.tagName === "BUTTON" ||
    el.getAttribute("role") === "button"
  ) {
    const text = (el.textContent ?? "").trim().toLowerCase();
    let label = "Explore";
    if (text.includes("view") || text.includes("show")) label = "View";
    else if (text.includes("open") || text.includes("enter")) label = "Open";
    else if (text.includes("next") || text.includes("→") || text.includes("›")) label = "Next";
    else if (text.includes("collect")) label = "Explore";

    const dataText = el.getAttribute("data-cursor-text");
    if (dataText) label = dataText;

    return { state: "button", label };
  }

  return { state: "default", label: "" };
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function CustomCursor() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";

  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorData, setCursorData] = useState<CursorData>({ state: "default", label: "" });

  // Raw mouse position ref (updated instantly)
  const mouseRef = useRef({ x: -200, y: -200 });
  // Spring-tracked position for outer ring
  const posRef = useRef({ x: -200, y: -200 });
  // Spring velocity ref
  const velRef = useRef({ x: 0, y: 0 });

  // DOM refs for direct manipulation (bypasses React re-renders)
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // rAF loop ref
  const rafRef = useRef<number>(0);

  // ── Theme-aware color tokens ───────────────────────────────────────────
  const gold = isDark ? "#C8A55A" : "#9E7A2E";
  const goldAlpha = isDark ? "rgba(200,165,90,0.55)" : "rgba(158,122,46,0.65)";
  const goldGlow = isDark
    ? "0 0 16px rgba(200,165,90,0.3), 0 0 36px rgba(200,165,90,0.1)"
    : "0 0 12px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)";
  const dotColor = isDark ? "#C8A55A" : "#111111";
  const textColor = isDark ? "#C8A55A" : "#F5F5F5";
  const bgFill = isDark ? "rgba(10,10,10,0.84)" : "rgba(24,24,24,0.92)";

  // ── Spring physics rAF loop ─────────────────────────────────────────────
  const springStep = useCallback(() => {
    const target = mouseRef.current;
    const pos = posRef.current;
    const vel = velRef.current;

    // Semi-implicit Euler integration with spring-damper
    const dt = 1 / 60;
    const dx = target.x - pos.x;
    const dy = target.y - pos.y;
    const ax = (SPRING_SLOW.stiffness * dx - SPRING_SLOW.damping * vel.x) / SPRING_SLOW.mass;
    const ay = (SPRING_SLOW.stiffness * dy - SPRING_SLOW.damping * vel.y) / SPRING_SLOW.mass;

    vel.x += ax * dt;
    vel.y += ay * dt;
    pos.x += vel.x * dt;
    pos.y += vel.y * dt;

    // Write directly to DOM — no React state update
    if (outerRef.current) {
      outerRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
    }
    // Dot follows mouse with zero lag
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${target.x}px, ${target.y}px) translate(-50%, -50%)`;
    }

    rafRef.current = requestAnimationFrame(springStep);
  }, []);

  // ── Mount / Unmount ─────────────────────────────────────────────────────
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
    if (touch) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      if ((e.target as HTMLElement)?.closest("[data-draggable], [draggable='true']")) {
        setIsDragging(true);
      }
    };
    const onUp = () => { setIsClicking(false); setIsDragging(false); };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target) setCursorData(detectCursorData(target));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.classList.add("custom-cursor-active");

    rafRef.current = requestAnimationFrame(springStep);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor-active");
      cancelAnimationFrame(rafRef.current);
    };
  }, [springStep]);

  if (isTouchDevice || prefersReducedMotion) return null;

  const { state, label } = cursorData;

  // ── Outer ring size per state ──────────────────────────────────────────
  const outerSize: Record<CursorState, number> = {
    default: 20,
    button: 72,
    product: 100,
    gallery: 80,
    link: 36,
    video: 68,
    drag: 64,
    map: 72,
  };
  const size = outerSize[state];
  const height = state === "gallery" ? Math.round(size * 0.58) : size;

  // ── Border radius per state ────────────────────────────────────────────
  const radius = state === "gallery" ? "8px" : state === "drag" ? "14px" : "50%";

  // ── Border per state ───────────────────────────────────────────────────
  const border: Record<CursorState, string> = {
    default: `1px solid ${goldAlpha}`,
    button: `1px solid ${gold}`,
    product: `1px solid ${goldAlpha}`,
    gallery: `1.5px solid ${goldAlpha}`,
    link: `1px solid ${goldAlpha}`,
    video: `1.5px solid ${gold}`,
    drag: `1px solid ${goldAlpha}`,
    map: "none",
  };

  // ── Background per state ───────────────────────────────────────────────
  const bg: Record<CursorState, string> = {
    default: "transparent",
    button: bgFill,
    product: bgFill,
    gallery: "rgba(0,0,0,0.6)",
    link: "transparent",
    video: bgFill,
    drag: bgFill,
    map: "transparent",
  };

  // ── Box shadow per state ───────────────────────────────────────────────
  const shadow: Record<CursorState, string> = {
    default: goldGlow,
    button: goldGlow,
    product: `0 0 40px rgba(200,165,90,0.14), 0 12px 60px rgba(0,0,0,0.5)`,
    gallery: goldGlow,
    link: goldGlow,
    video: goldGlow,
    drag: goldGlow,
    map: "none",
  };

  return (
    <>
      {/* ── SPRING-LAGGED OUTER CURSOR RING ─────────────────────────────── */}
      <div
        ref={outerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{
            width: size,
            height: height,
            borderRadius: radius,
            x: -size / 2,
            y: -height / 2,
            background: bg[state],
            border: border[state],
            boxShadow: shadow[state],
            scale: isClicking ? 0.88 : 1,
            backdropFilter: state === "product" ? "blur(8px)" : "blur(0px)",
          }}
          transition={{
            width: { type: "spring", ...SPRING_FAST },
            height: { type: "spring", ...SPRING_FAST },
            borderRadius: { duration: 0.38, ease: EASE_PRECISION },
            x: { type: "spring", ...SPRING_FAST },
            y: { type: "spring", ...SPRING_FAST },
            background: { duration: 0.32, ease: EASE_PRECISION },
            border: { duration: 0.32 },
            boxShadow: { duration: 0.38 },
            scale: { type: "spring", stiffness: 420, damping: 30 },
            backdropFilter: { duration: 0.45 },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            WebkitBackdropFilter: state === "product" ? "blur(8px)" : "blur(0px)",
          }}
        >
          {/* ── STATE CONTENT (AnimatePresence for smooth morph) ────────── */}
          <AnimatePresence mode="wait">

            {/* BUTTON STATE — contextual label text */}
            {state === "button" && (
              <motion.span
                key="btn"
                initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                transition={{ duration: 0.28, ease: EASE_PRECISION }}
                style={{
                  color: textColor,
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {label || "Explore"}
              </motion.span>
            )}

            {/* PRODUCT STATE — "View Product" with gold hairline */}
            {state === "product" && (
              <motion.div
                key="product"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.32, ease: EASE_PRECISION }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span style={{
                  color: textColor,
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}>
                  {label || "View Product"}
                </span>
                <div style={{
                  width: "28px",
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                }} />
              </motion.div>
            )}

            {/* GALLERY STATE — left / right navigation arrows */}
            {state === "gallery" && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.28, ease: EASE_PRECISION }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                  <path d="M15 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" stroke={gold} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ width: "1px", height: "14px", background: goldAlpha }} />
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                  <path d="M1 5.5H15M15 5.5L10.5 1M15 5.5L10.5 10" stroke={gold} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            )}

            {/* VIDEO STATE — minimal play triangle */}
            {state === "video" && (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.55 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.55 }}
                transition={{ duration: 0.3, ease: EASE_PRECISION }}
                style={{ position: "relative", zIndex: 2 }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <polygon
                    points="8,5 19,11 8,17"
                    fill={gold}
                    stroke={gold}
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}

            {/* DRAG STATE — bidirectional arrows + "drag" label + rotation when dragging */}
            {state === "drag" && (
              <motion.div
                key="drag"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: isDragging ? [-3, 3, -3] : 0,
                }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{
                  opacity: { duration: 0.28 },
                  scale: { duration: 0.28, ease: EASE_PRECISION },
                  rotate: isDragging
                    ? { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.3 },
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
                  <path d="M1 6H29M1 6L5.5 2M1 6L5.5 10M29 6L24.5 2M29 6L24.5 10" stroke={gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{
                  color: textColor,
                  fontSize: "7px",
                  fontWeight: 700,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  userSelect: "none",
                }}>
                  Drag
                </span>
              </motion.div>
            )}

            {/* MAP STATE — compass needle + "Navigate" label */}
            {state === "map" && (
              <motion.div
                key="map"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.3, ease: EASE_PRECISION }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Compass needle icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke={goldAlpha} strokeWidth="0.75"/>
                  <polygon points="10,2 12,10 10,12 8,10" fill={gold}/>
                  <polygon points="10,18 12,10 10,12 8,10" fill={goldAlpha}/>
                  <circle cx="10" cy="10" r="1.5" fill={gold}/>
                </svg>
                <span style={{
                  color: textColor,
                  fontSize: "6.5px",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  userSelect: "none",
                }}>
                  Navigate
                </span>
              </motion.div>
            )}

            {/* LINK STATE — no inner content, sheen is handled below */}
            {state === "link" && <span key="link-empty" />}

          </AnimatePresence>

          {/* ── METALLIC SHEEN SWEEP (link state only) ─────────────────── */}
          <AnimatePresence>
            {state === "link" && (
              <motion.div
                key="sheen-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  overflow: "hidden",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <motion.div
                  initial={{ x: "-130%" }}
                  animate={{ x: "230%" }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: [0.4, 0, 0.6, 1],
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "45%",
                    height: "100%",
                    transform: "skewX(-15deg)",
                    background: isDark
                      ? "linear-gradient(90deg, transparent, rgba(200,165,90,0.28), transparent)"
                      : "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── COMPASS SPINNING RING (map state) ───────────────────────── */}
        <AnimatePresence>
          {state === "map" && (
            <motion.div
              key="compass-ring"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { type: "spring", ...SPRING_FAST },
                rotate: { duration: 9, repeat: Infinity, ease: "linear" },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: size + 22,
                height: size + 22,
                x: -(size + 22) / 2,
                y: -(size + 22) / 2,
                pointerEvents: "none",
              }}
            >
              {(() => {
                const total = size + 22;
                const cx = total / 2;
                const cy = total / 2;
                const r = (total - 4) / 2;
                return (
                  <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`} fill="none">
                    <circle cx={cx} cy={cy} r={r} stroke={goldAlpha} strokeWidth="0.8" strokeDasharray="3 6"/>
                    {[0, 90, 180, 270].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line
                          key={angle}
                          x1={cx + (r - 5) * Math.sin(rad)}
                          y1={cy - (r - 5) * Math.cos(rad)}
                          x2={cx + (r + 1) * Math.sin(rad)}
                          y2={cy - (r + 1) * Math.cos(rad)}
                          stroke={gold}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── PRECISE DOT (zero-lag, exact mouse position) ──────────────────── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
          zIndex: 100000,
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{
            width: state !== "default" ? 0 : 5,
            height: state !== "default" ? 0 : 5,
            opacity: state !== "default" ? 0 : isVisible ? 1 : 0,
            scale: isClicking ? 2.2 : 1,
            x: -2.5,
            y: -2.5,
          }}
          transition={{
            width: { type: "spring", stiffness: 500, damping: 28 },
            height: { type: "spring", stiffness: 500, damping: 28 },
            opacity: { duration: 0.18 },
            scale: { type: "spring", stiffness: 480, damping: 26 },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "50%",
            backgroundColor: dotColor,
            boxShadow: isDark
              ? "0 0 10px rgba(200,165,90,0.95), 0 0 22px rgba(200,165,90,0.45)"
              : "0 0 8px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* ── GLOBAL VISIBILITY LAYER — fades whole cursor in/out ───────────── */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.28 }}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
