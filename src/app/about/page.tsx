"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiShield, FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-32">

        {/* Header Block */}
        <section className="max-w-3xl space-y-6 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block"
          >
            Heritage &amp; Vision
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-page-primary leading-tight font-serif"
          >
            A Heritage Born Of <br />Ancient Artistry.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-page-secondary font-light leading-relaxed text-base md:text-lg pt-4 font-sans"
          >
            Located in Kalaburagi, Karnataka, Shri Varalakshmi has spent over two decades crafting premium German Silver masterpieces that grace altars, homes, and grand events worldwide.
          </motion.p>
        </section>

        {/* Brand Showcase Block */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative h-[380px] md:h-[500px] rounded-2xl overflow-hidden border border-card">
            <Image
              src="/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png"
              alt="Artisans at Shri Varalakshmi"
              fill
              className="object-cover grayscale brightness-[0.8]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 vignette-bottom opacity-80" />
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-page-primary font-serif">
              The Kalaburagi Legacy
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Kalaburagi (formerly Gulbarga) is a region steeped in cultural diversity and historic art. Our founders realized that while traditional metalcraft was highly revered, the market lacked consistent quality, certified alloy blends, and premium design standards.
            </p>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Shri Varalakshmi was established to bridge this gap. By building structured manufacturing systems and blending them with the unmatched skills of local master-engravers, we created a brand trusted for its uncompromising quality.
            </p>
          </div>
        </section>

        {/* Pillars / Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FiAward, title: "Elite Craftsmanship", desc: "Every curve, leaf motif, and divine silhouette is chiseled by hand, ensuring that no two pieces are exactly identical." },
            { icon: FiShield, title: "Alloy Purity", desc: "We certify our metal blends to consist strictly of premium copper, nickel, and zinc, giving each item weight and durability." },
            { icon: FiHeart, title: "Supporting Artisans", desc: "We directly support local metalsmiths in Northern Karnataka, providing fair wages, medical coverage, and structural safety." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 rounded-xl card-block space-y-4 text-left">
              <Icon className="w-6 h-6 text-accent" />
              <h3 className="text-base font-light text-page-primary font-serif tracking-wide">{title}</h3>
              <p className="text-xs text-page-secondary font-light leading-relaxed font-sans">{desc}</p>
            </div>
          ))}
        </section>

        {/* Materials / Technology Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center section-border-t pt-20">
          <div className="lg:col-span-5 space-y-6 order-last lg:order-first text-left">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-page-primary font-serif">
              The Science of German Silver
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Genuine German Silver (also known as Alpacca or Nickel Silver) is a heavy metal copper alloy. It has no actual elemental silver content, yet it mimics sterling silver almost perfectly in luster, tensile strength, and sound resonance.
            </p>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              We apply a specialized dual-coat organic lacquer overlay on all items. This barrier shields the metal from atmospheric sulfur, reducing tarnish and making maintenance as simple as wiping down with a soft microfiber cloth.
            </p>
          </div>

          <div className="lg:col-span-7 relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-card">
            <Image
              src="/images/Gemini_Generated_Image_1c9xt61c9xt61c9x.png"
              alt="High-Quality Polish Showpiece"
              fill
              className="object-cover grayscale brightness-[0.8]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 vignette-bottom opacity-80" />
          </div>
        </section>

        {/* Timeline Story */}
        <section className="space-y-16">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">
              Our Journey
            </span>
            <h2 className="text-3xl font-light tracking-tight text-page-primary font-serif">
              Milestones of Growth
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-12 before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-[var(--border-subtle)] text-left font-sans">
            {[
              { year: "1998", side: "left", title: "Foundation of Shri Varalakshmi", desc: "Established a small casting unit in Kalaburagi to manufacture high-weight German Silver diyas and ritual cups." },
              { year: "2008", side: "right", title: "Regional Expansion", desc: "Expanded reach to major cities in Andhra Pradesh, Telangana, and Maharashtra, building a curated network of showroom partnerships." },
              { year: "2018", side: "left", title: "Advanced Lacquer Technology", desc: "Upgraded the Kalaburagi facility with advanced computerized alloying furnaces and anti-tarnish polymer coating lines." },
              { year: "2026", side: "right", title: "Digital Showroom Integration", desc: "Launching full digital operations enabling design clients, luxury showrooms, and private collectors to explore and coordinate custom commissions globally." },
            ].map(({ year, side, title, desc }) => (
              <div key={year} className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 pl-10 md:pl-0">
                <div className="absolute left-3 md:left-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg-primary)]" />
                {side === "left" ? (
                  <>
                    <div className="w-full md:w-[45%] text-left md:text-right">
                      <span className="text-base font-light text-accent">{year}</span>
                      <h4 className="text-lg font-light text-page-primary font-serif mt-1">{title}</h4>
                      <p className="text-xs text-page-muted mt-1.5 leading-relaxed font-light">{desc}</p>
                    </div>
                    <div className="hidden md:block w-[45%]" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-[45%]" />
                    <div className="w-full md:w-[45%] text-left">
                      <span className="text-base font-light text-accent">{year}</span>
                      <h4 className="text-lg font-light text-page-primary font-serif mt-1">{title}</h4>
                      <p className="text-xs text-page-muted mt-1.5 leading-relaxed font-light">{desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
