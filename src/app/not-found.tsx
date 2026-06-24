"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCompass, FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-16 px-6">
      <div className="glow-spot-gold top-[20%] left-[-10%]" />
      <div className="glow-spot-silver top-[50%] right-[-15%]" />

      <div className="max-w-md text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="p-5 bg-white/5 border border-white/10 text-accent-gold rounded-full relative">
            <FiCompass className="w-12 h-12 animate-spin-slow" />
            <FiAlertCircle className="w-5 h-5 text-red-500 absolute bottom-3 right-3 bg-[#0B0B0B] rounded-full border border-black" />
          </span>
        </motion.div>

        <div className="space-y-3">
          <h1 className="text-6xl font-extrabold text-gold-gradient tracking-widest">404</h1>
          <h2 className="text-xl font-bold text-white tracking-wide">Coordinates Lost</h2>
          <p className="text-xs text-gray-400 font-light leading-relaxed max-w-[280px] mx-auto font-sans">
            The page you are looking for does not exist in our digital showroom exhibition catalogue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center font-sans">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase transition-all hover:shadow-[0_0_10px_rgba(200,165,90,0.2)]"
          >
            Showroom Home
          </Link>
          <Link
            href="/collections"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
