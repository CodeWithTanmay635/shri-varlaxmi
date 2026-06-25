"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCompass, FiMapPin } from "react-icons/fi";

export default function InteractiveMapPlaceholder() {
  return (
    <div
      data-cursor="map"
      className="map-bg relative w-full h-[500px] md:h-[600px] rounded-2xl border border-theme-mid overflow-hidden flex flex-col items-center justify-center select-none text-page-primary"
    >

      {/* 1. COORDINATE GRID BACKDROP */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />

        {/* Stylized vector map lines */}
        <svg className="absolute inset-0 w-full h-full text-accent" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,250 Q 300,200 600,300 T 1200,100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M 200,0 Q 250,300 150,600"               fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
          <path d="M 800,0 Q 750,250 900,600"               fill="none" stroke="currentColor" strokeWidth="1"   strokeOpacity="0.3" />
          <path d="M 0,400 Q 500,450 1200,380"              fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="580" cy="280" r="120" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8"  strokeOpacity="0.5"/>
          <circle cx="580" cy="280" r="220" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 12" strokeOpacity="0.3"/>
        </svg>

        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-theme-subtle rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-theme-subtle rounded-full" />
      </div>

      {/* 2. SCANLINE SWEEP */}
      <motion.div
        animate={{ y: ["-100%", "700%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent z-10 pointer-events-none"
      />

      {/* 3. CENTER PIN */}
      <div className="relative z-20 flex flex-col items-center space-y-5">
        {/* Pulse rings around pin */}
        <div className="relative flex items-center justify-center w-12 h-12">
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-12 h-12 rounded-full border border-accent"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-8 h-8 rounded-full border border-accent/40"
          />
          <div className="w-5 h-5 rounded-full bg-accent border-2 border-white/10 shadow-[0_0_20px_rgba(200,165,90,0.5)] flex items-center justify-center">
            <FiMapPin className="w-2.5 h-2.5 text-black" />
          </div>
        </div>

        {/* Coordinates label */}
        <div className="map-hud-bg backdrop-blur-md px-5 py-3 rounded-xl text-center space-y-1 shadow-xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block font-sans">
            Showroom Target Locked
          </span>
          <span className="text-[9px] text-page-secondary font-light font-mono block">
            GPS: 17.3300° N &bull; 76.8342° E
          </span>
        </div>
      </div>

      {/* 4. HUD — top-left compass */}
      <div className="map-hud-bg absolute top-5 left-5 z-20 flex items-center space-x-2.5 backdrop-blur-md px-3.5 py-2 rounded-xl font-sans">
        <FiCompass className="w-4 h-4 text-accent animate-[spin_10s_linear_infinite]" />
        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-page-primary">
          System Calibration Active
        </span>
      </div>

      {/* 5. HUD — bottom-right scale indicator */}
      <div className="map-hud-bg absolute bottom-5 right-5 z-20 flex items-center space-x-3 backdrop-blur-md px-3.5 py-2 rounded-xl font-sans">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px] bg-accent/60" />
            <span className="text-[8px] text-page-muted font-mono">500 m</span>
          </div>
          <span className="text-[8px] uppercase tracking-[0.18em] text-page-secondary">
            Kalaburagi, Karnataka
          </span>
        </div>
      </div>

      {/* Edge fade overlays — theme-aware */}
      <div className="absolute inset-0 vignette-bottom opacity-60 pointer-events-none z-10" />
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--surface)] to-transparent pointer-events-none z-10 opacity-60" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none z-10 opacity-60" />
    </div>
  );
}
