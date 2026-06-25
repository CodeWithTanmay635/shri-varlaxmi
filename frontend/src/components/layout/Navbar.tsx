"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
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

const ROLLS_EASE = [0.16, 1, 0.3, 1] as const;
const ANIM_DURATION = 1.4;

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
    const currentLink = navLinks.find(l => l.href === pathname);
    if (currentLink) setHoveredImage(currentLink.image);
  }, [pathname]);

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

  const overlayVariants: Variants = {
    closed: { 
      opacity: 0, 
      transition: { duration: 0.8, ease: ROLLS_EASE, staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: { 
      opacity: 1, 
      transition: { duration: 1.2, ease: ROLLS_EASE, staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: "80%" },
    open: { opacity: 1, y: "0%", transition: { duration: ANIM_DURATION, ease: ROLLS_EASE } }
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.6, ease: ROLLS_EASE } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 1.0, ease: ROLLS_EASE } }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left"
        style={{ scaleX, background: "var(--accent-gold)" }}
      />

      {/* Main Standard Navbar */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.8, ease: ROLLS_EASE }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-[1000ms] ease-in-out ${
          scrolled ? "py-4 glass-nav shadow-lg" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group flex flex-col justify-start">
            <span
              className="text-lg md:text-xl font-light tracking-[0.3em] transition-all duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:text-accent-gold"
              style={{ color: "var(--text-primary)" }}
            >
              SHRI VARALAKSHMI
            </span>
            <span 
              className="text-[8px] md:text-[9px] tracking-[0.45em] uppercase font-medium mt-1 transition-colors duration-[1200ms]" 
              style={{ color: "var(--accent-gold)" }}
            >
              Jewellery &amp; Metals
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-[1200ms] group"
              style={{
                borderColor: "var(--border-mid)",
                background: "var(--glass-bg)",
                color: "var(--text-secondary)",
              }}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: ROLLS_EASE }}
                    className="group-hover:text-accent-gold transition-colors duration-500 flex"
                  >
                    <FiSun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: ROLLS_EASE }}
                    className="group-hover:text-black transition-colors duration-500 flex"
                  >
                    <FiMoon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center space-x-3 transition-colors duration-[1200ms] focus:outline-none group"
            >
              <span 
                className="hidden md:block text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                Menu
              </span>
              <div 
                className="p-2 rounded-full transition-colors duration-[1200ms]"
                style={{ color: "var(--text-primary)", background: "transparent" }}
              >
                <FiMenu className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Cinematic Overlay (Rolls-Royce Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-[#080808]/95 flex backdrop-blur-2xl"
          >
            {/* Overlay Header */}
            <div className="absolute top-0 left-0 w-full px-6 md:px-12 py-8 flex items-center justify-between z-50">
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors duration-500 group"
              >
                <FiX className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium hidden md:block">Close</span>
              </button>

              <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" onClick={() => setIsOpen(false)}>
                <span className="text-sm md:text-base font-light tracking-[0.3em] text-white">
                  SHRI VARALAKSHMI
                </span>
              </Link>
              
              <div className="w-[80px]"></div>
            </div>

            {/* Left Column: Navigation Links */}
            <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-end pr-8 md:pr-16 relative z-20 pt-16">
              <div className="flex flex-col space-y-5 md:space-y-6 w-full max-w-[280px] text-right">
                {navLinks.map((link) => {
                  const isRouteActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  const isHashActive = activeHash === link.href;
                  const isActive = isRouteActive || isHashActive;

                  return (
                    <div key={link.href} className="overflow-hidden">
                      <motion.div 
                        variants={linkVariants}
                        onMouseEnter={() => setHoveredImage(link.image)}
                        className="py-1"
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`group block transition-colors duration-[1200ms] ease-[0.16,1,0.3,1] ${
                            isActive ? "text-white" : "text-white/40 hover:text-white/80"
                          }`}
                        >
                          <span className="relative z-10 block text-xs md:text-sm font-medium font-sans uppercase tracking-[0.2em] transition-all duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:-translate-x-2 group-hover:tracking-[0.25em] origin-right">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Cinematic Image */}
            <div className="hidden lg:block lg:w-[55%] h-full relative z-10 border-l border-white/10 bg-[#0a0a0a]">
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
                    className="object-cover grayscale brightness-50 contrast-125"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent opacity-90 w-1/2" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
