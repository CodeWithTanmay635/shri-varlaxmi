"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { products, Product } from "@/lib/products";
import { FiInfo, FiSmartphone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // List of products specifically suited for floating showcase
  const floatProducts = products.filter(p => 
    ["festival-varalakshmi-set", "kalash-pair-elephant", "decor-bowl-pink", "gift-paneer-sombu"].includes(p.id)
  );

  const [activeProduct, setActiveProduct] = useState<Product>(floatProducts[0] || products[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [gyroActive, setGyroActive] = useState(false);

  // Motion Values for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics mapping for ultra-smooth fluid transitions
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  // Background shifts slower, product shifts faster, overlays intermediate
  const bgTranslateX = useTransform(floatX, [-300, 300], [-10, 10]);
  const bgTranslateY = useTransform(floatY, [-300, 300], [-10, 10]);

  const productTranslateX = useTransform(floatX, [-300, 300], [-35, 35]);
  const productTranslateY = useTransform(floatY, [-300, 300], [-35, 35]);
  const productRotateX = useTransform(floatY, [-300, 300], [15, -15]); // tilt on mouse Y
  const productRotateY = useTransform(floatX, [-300, 300], [-15, 15]); // tilt on mouse X

  const shineX = useTransform(floatX, [-300, 300], ["-100%", "100%"]); // metallic sheen sweep

  // Device orientation / Gyroscope support for mobile
  useEffect(() => {
    const handleDeviceMotion = (e: DeviceOrientationEvent) => {
      if (!e.beta || !e.gamma) return;
      setGyroActive(true);
      // Map tilt angles (beta: -180 to 180, gamma: -90 to 90) to parallax pixel shifts
      // We clamp and scale them for standard handling
      const scaleX = Math.min(Math.max(e.gamma, -30), 30) * 10; // scale up
      const scaleY = Math.min(Math.max(e.beta - 45, -30), 30) * 10; // assume 45deg standard reading angle
      mouseX.set(scaleX);
      mouseY.set(scaleY);
    };

    const checkDeviceType = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkDeviceType();

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleDeviceMotion);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceMotion);
    };
  }, [mouseX, mouseY]);

  // Cursor move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile && gyroActive) return; // let gyro handle on mobile
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  // Cursor reset handler
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 section-border-t overflow-hidden select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Descriptions & Carousel Selector */}
        <div className="lg:col-span-5 space-y-8 text-left z-20">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-accent font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              <span>Interactive Digital Showroom</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-luxury-gradient leading-tight">
              Product Showcase
            </h2>
            <p className="text-sm text-page-secondary font-light leading-relaxed">
              Explore our mastercraft German Silver articles suspended in a zero-gravity obsidian void.
              {isMobile ? " Tilt your device to glide the elements." : " Move your cursor to rotate the objects and catch direct metallic light reflections."}
            </p>
          </div>

          {/* Product Carousel Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {floatProducts.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeProduct.id === p.id
                    ? "bg-accent text-black shadow-[0_0_15px_rgba(200,165,90,0.25)]"
                    : "card-block text-page-secondary hover:text-page-primary"
                }`}
              >
                {p.name.split(" ")[0]} {p.name.split(" ")[1] || ""}
              </button>
            ))}
          </div>

          {/* Specifications Box */}
          <div className="p-6 rounded-2xl glass-card card-block space-y-4">
            <div>
              <h3 className="text-base font-bold text-page-primary tracking-wide">{activeProduct.name}</h3>
              <p className="text-xs text-page-secondary mt-1 leading-relaxed font-light">{activeProduct.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-y-2 text-xs section-border-t pt-3">
              <span className="text-page-muted">Weight</span>
              <span className="text-page-primary text-right font-medium">{activeProduct.specs.weight}</span>
              <span className="text-page-muted">Dimensions</span>
              <span className="text-page-primary text-right font-medium">{activeProduct.specs.dimensions}</span>
              <span className="text-page-muted">Alloy Core</span>
              <span className="text-page-primary text-right font-medium">{activeProduct.specs.material}</span>
            </div>

            <div className="pt-2 flex gap-3">
              <div className="flex flex-col flex-grow gap-2">
                <a
                  href={`https://wa.me/919341874222?text=I%20am%20interested%20in%20the%20${encodeURIComponent(activeProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-accent text-black hover:opacity-90 font-bold text-xs tracking-wider transition-all flex items-center justify-center space-x-2 font-sans"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Inquire (WA 1)</span>
                </a>
                <a
                  href={`https://wa.me/919740423851?text=I%20am%20interested%20in%20the%20${encodeURIComponent(activeProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-accent text-black hover:opacity-90 font-bold text-xs tracking-wider transition-all flex items-center justify-center space-x-2 font-sans"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Inquire (WA 2)</span>
                </a>
              </div>
              <Link
                href={`/collections/${activeProduct.category}`}
                className="py-3 px-4 rounded-xl card-block text-xs text-page-primary transition-all font-semibold font-sans hover:text-accent"
              >
                Full Specs
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Zero Gravity Rendering Container */}
        <div className="lg:col-span-7 h-[420px] sm:h-[500px] w-full relative rounded-3xl overflow-hidden glass-card border border-card flex items-center justify-center bg-overlay-dark">
          
          {/* BACKGROUND PARALLAX LAYER */}
          <motion.div 
            style={{ x: bgTranslateX, y: bgTranslateY }}
            className="absolute inset-0 z-0 scale-105"
          >
            <Image
              src="/images/antigravity_bg.png"
              alt="Floating obsidian stage"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle dark vignetting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </motion.div>

          {/* DYNAMIC SHADOW (moves opposite to float) */}
          <motion.div
            style={{
              x: useTransform(productTranslateX, (val) => -val * 0.4),
              y: useTransform(productTranslateY, (val) => -val * 0.2),
              scale: useTransform(floatY, [-300, 300], [0.9, 1.1])
            }}
            className="absolute w-48 h-12 bg-black/75 rounded-full filter blur-xl bottom-12 z-10 pointer-events-none opacity-60"
          />

          {/* METALLIC AMBIENT GLOW LIGHT STRIPS */}
          <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/5 rounded-2xl pointer-events-none z-10">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-accent-gold/10 to-transparent" />
          </div>

          {/* INTERACTIVE FLOATING PRODUCT LAYER */}
          <motion.div
            data-draggable
            style={{
              x: productTranslateX,
              y: productTranslateY,
              rotateX: productRotateX,
              rotateY: productRotateY,
            }}
            className="relative w-[280px] h-[340px] z-20 flex items-center justify-center"
            // Breathing float simulation
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                width={280}
                height={280}
                className="object-contain max-h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-[1.05]"
                priority
              />

              {/* LUSTER SHINE LIGHT SWEEP OVERLAY */}
              <motion.div 
                style={{
                  left: shineX,
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 mix-blend-overlay pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Gyroscopic control label */}
          {isMobile && (
            <span className="absolute bottom-4 left-4 z-20 text-[9px] uppercase tracking-wider text-accent-gold/60 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full border border-white/5">
              <FiSmartphone className="animate-pulse" />
              <span>Gyroscope Connected</span>
            </span>
          )}
        </div>

      </div>
    </section>
  );
}
