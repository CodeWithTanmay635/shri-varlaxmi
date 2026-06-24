"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiX } from "react-icons/fi";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  Variants
} from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home", image: "/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png" },
  { href: "/collections", label: "Collections", image: "/images/Gemini_Generated_Image_wdq99vwdq99vwdq9.png" },
  { href: "/craftsmanship", label: "Craftsmanship", image: "/images/Gemini_Generated_Image_125r17125r17125r.png" },
  { href: "/gallery", label: "Gallery", image: "/images/Gemini_Generated_Image_urvwqkurvwqkurvw.png" },
  { href: "/about", label: "About", image: "/images/Gemini_Generated_Image_d5h0led5h0led5h0.png" },
  { href: "/visit-showroom", label: "Visit Showroom", image: "/images/Gemini_Generated_Image_3ychix3ychix3ych.png" },
  { href: "/contact", label: "Contact", image: "/images/Gemini_Generated_Image_j0med9j0med9j0me.png" },
];

// Pure smooth easing (no bounce/elasticity)
const SMOOTH_EASE = [0.25, 0.1, 0.25, 1] as const;
const ANIM_DURATION = 0.8;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hoveredImage, setHoveredImage] = useState(navLinks[0].image);
  
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 80);
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
    // Reset image to current path's image or default
    const currentLink = navLinks.find(l => l.href === pathname);
    if (currentLink) setHoveredImage(currentLink.image);
  }, [pathname]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  // ── Overlay Animations ──
  const overlayVariants: Variants = {
    closed: { 
      opacity: 0, 
      transition: { duration: ANIM_DURATION, ease: SMOOTH_EASE }
    },
    open: { 
      opacity: 1, 
      transition: { duration: ANIM_DURATION, ease: SMOOTH_EASE, staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 30 },
    open: { opacity: 1, y: 0, transition: { duration: ANIM_DURATION, ease: SMOOTH_EASE } }
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: SMOOTH_EASE } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: SMOOTH_EASE } }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX, background: "var(--accent-gold)" }}
      />

      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: SMOOTH_EASE }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled && !isOpen ? "py-4 glass-nav shadow-lg" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex flex-col justify-start relative z-50" onClick={() => setIsOpen(false)}>
            <span
              className="text-lg md:text-xl font-light tracking-[0.3em] transition-all duration-500 group-hover:text-accent-gold"
              style={{ color: isOpen ? "#FFFFFF" : "var(--text-primary)" }}
            >
              SHRI VARALAKSHMI
            </span>
            <span 
              className="text-[8px] md:text-[9px] tracking-[0.45em] uppercase font-medium mt-1 transition-colors duration-500" 
              style={{ color: "var(--accent-gold)" }}
            >
              Jewellery &amp; Metals
            </span>
          </Link>

          {/* Right Utilities */}
          <div className="flex items-center space-x-6 relative z-50">
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 group ${
                isOpen ? "border-white/20 bg-black/40 text-white" : ""
              }`}
              style={!isOpen ? {
                borderColor: "var(--border-mid)",
                background: "var(--glass-bg)",
                color: "var(--text-secondary)",
              } : undefined}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="group-hover:text-accent-gold transition-colors duration-300 flex"
                  >
                    <FiSun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="group-hover:text-black transition-colors duration-300 flex"
                  >
                    <FiMoon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Desktop Menu Text / Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-3 transition-colors duration-300 focus:outline-none group"
            >
              <span 
                className="hidden md:block text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                style={{ color: isOpen ? "#FFFFFF" : "var(--text-primary)" }}
              >
                {isOpen ? "Close" : "Menu"}
              </span>
              <div 
                className="p-2 rounded-full transition-colors"
                style={{ 
                  color: isOpen ? "#FFFFFF" : "var(--text-primary)",
                  background: isOpen ? "rgba(255,255,255,0.1)" : "transparent"
                }}
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </div>
            </button>
            
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Luxury Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-3xl flex"
          >
            {/* Close Button top-left (mobile only, desktop uses header) */}
            <button 
              onClick={() => setIsOpen(false)}
              className="md:hidden absolute top-8 left-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Left Column: Navigation Links */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-24 pt-20 relative z-20">
              <div className="flex flex-col space-y-6 md:space-y-8 w-full max-w-lg">
                {navLinks.map((link) => {
                  const isRouteActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  const isHashActive = activeHash === link.href;
                  const isActive = isRouteActive || isHashActive;

                  return (
                    <motion.div 
                      variants={linkVariants} 
                      key={link.href}
                      className="border-b border-white/10 pb-6 md:pb-8"
                      onMouseEnter={() => setHoveredImage(link.image)}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`group relative text-3xl md:text-5xl lg:text-6xl font-light font-serif tracking-tight block transition-colors duration-[800ms] ${
                          isActive ? "text-accent-gold" : "text-white/60 hover:text-white"
                        }`}
                      >
                        <span className="relative z-10 block transition-all duration-[800ms] ease-[0.25,0.1,0.25,1] group-hover:tracking-[0.04em]">
                          {link.label}
                        </span>
                        
                        {/* Metallic Underline Hover Effect */}
                        <span className="absolute -bottom-6 md:-bottom-8 left-0 w-full h-[1px] overflow-hidden">
                          <span 
                            className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#C8A55A] to-transparent transition-transform duration-[800ms] ease-[0.25,0.1,0.25,1] ${
                              isActive ? "translate-x-0" : "-translate-x-[101%] group-hover:translate-x-0"
                            }`}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div variants={linkVariants} className="mt-16 space-y-2">
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Email</p>
                <a href="mailto:contact@shrivaralakshmi.com" className="text-sm text-white hover:text-accent-gold transition-colors font-light">contact@shrivaralakshmi.com</a>
              </motion.div>
            </div>

            {/* Right Column: Cinematic Image Crossfade */}
            <div className="hidden lg:block w-1/2 h-full relative z-10 border-l border-white/5 bg-[#0a0a0a]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={hoveredImage}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={hoveredImage}
                    alt="Navigation Preview"
                    fill
                    className="object-cover grayscale brightness-75 contrast-125"
                    priority
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808] to-transparent w-1/4" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
