"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <div className="relative bg-page min-h-screen text-page-primary py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-32">

        {/* Header Block */}
        <section className="max-w-3xl space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block"
          >
            The Heritage &amp; The Hand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-page-primary leading-tight font-serif"
          >
            Artistry Is Born <br />In Patient Details.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-page-secondary font-light leading-relaxed text-base md:text-lg pt-4 font-sans"
          >
            For over twenty years, Shri Varalakshmi has preserved the legacy of traditional metalworking. Each article represents hours of focused carving, dual-metal plating, and anti-tarnish protection chiseled by hand in our Kalaburagi workshops.
          </motion.p>
        </section>

        {/* SECTION 1: Alloy Core Purity */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative h-[380px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-card">
            <Image
              src="/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png"
              alt="Raw silver metal alloys and casting stage"
              fill
              className="object-cover grayscale brightness-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              I. The Alloy Core
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-page-primary tracking-wide font-serif">
              Authentic Weight. Premium Base.
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Unlike generic silver-coated hollow items that bend under light pressure, every Shri Varalakshmi piece is forged from a heavy alloy core. We balance high-grade copper (for structural resilience), zinc (for smooth fusion), and nickel (for corrosion resistance).
            </p>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              This balance gives our lamps, kalash pots, and decorative platters an authentic, solid weight that feels reassuring in the hand and guarantees long-term durability.
            </p>
          </div>
        </section>

        {/* QUOTE SEGMENT */}
        <section className="py-12 section-border-t border-b border-theme-subtle text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-serif italic text-page-primary/80 leading-relaxed font-light">
            &ldquo;A machine can stamp a shape ten thousand times, but it can never stamp the soul of the engraver into the metal.&rdquo;
          </p>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-accent mt-6 font-medium font-sans">
            — Master Engraver, Kalaburagi Workshop
          </span>
        </section>

        {/* SECTION 2: Hand Carving & Chiseling */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 lg:order-2 relative h-[380px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-card">
            <Image
              src="/images/Gemini_Generated_Image_5xmz7b5xmz7b5xmz.png"
              alt="Deity details chiseled on German Silver Kalash"
              fill
              className="object-cover grayscale brightness-95"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              II. Chiseled Devotion
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-page-primary tracking-wide font-serif">
              Engraving by Pulse &amp; Chisel
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Once cast, the raw item is handed over to our master engravers. Using miniature steel chisels and light brass hammers, they engrave traditional patterns, floral borders, and sacred deity countenances like Lakshmi, Ganesha, and Saraswati.
            </p>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              The depth of each cut reflects the artisan&apos;s decade-long experience. The minor, unique variations across items act as signatures of human touch, giving each piece the status of a collectible heirloom.
            </p>
          </div>
        </section>

        {/* SECTION 3: High-Micron Plating */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative h-[380px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-card">
            <Image
              src="/images/Gemini_Generated_Image_lljr5xlljr5xlljr.png"
              alt="High gloss finish and protective polymer lacquer spraying"
              fill
              className="object-cover grayscale brightness-95"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              III. The Luster Protective Shield
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-page-primary tracking-wide font-serif">
              Electrostatic Plating &amp; Lacquer
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              We apply silver plating using advanced high-micron electrodeposition. This ensures a uniform, thick silver deposit that stays bonded to the alloy core without flaking or dulling.
            </p>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              To lock in this brilliant mirror-gloss shine, we apply an anti-tarnish polymer lacquer coat. This lacquer isolates the silver surface from humidity and oxygen, minimizing tarnish and ensuring it remains shiny with minimal maintenance.
            </p>
          </div>
        </section>

        {/* SECTION 4: Museum Packaging */}
        <section className="max-w-3xl mx-auto text-center space-y-8 pt-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
            IV. Packaging Excellence
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-page-primary tracking-wide font-serif">
            A Fit Beginning for a Sacred Object
          </h2>
          <p className="text-page-secondary text-sm leading-relaxed font-light max-w-2xl mx-auto font-sans">
            Every masterpiece is carefully wrapped in butter paper, set into custom velvet-lined boxes, and padded with dense structural foam to prevent friction marks. The packaging is designed to create a sense of premium presentation from the moment it is opened.
          </p>
        </section>

      </div>
    </div>
  );
}
