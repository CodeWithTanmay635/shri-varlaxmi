"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/products";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Collections() {
  return (
    <div className="bg-page text-page-primary min-h-screen">
      {/* Editorial Intro */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block"
        >
          Curated Exhibition
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl md:text-6xl font-light tracking-tight text-page-primary font-serif"
        >
          The Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-page-secondary font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto font-sans"
        >
          Browse our German Silver articles organized into signature collections. Each occupies its own canvas, chiseled for luxury digital display.
        </motion.p>
      </section>

      {/* Screen-snapped collections list */}
      <div className="space-y-4">
        {categories.map((collection, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={collection.id}
              className="min-h-[85vh] flex items-center justify-center section-border-t py-16 px-6 md:px-12 relative"
            >
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                {/* Image panel */}
                <Link
                  href={`/collections/${collection.id}`}
                  data-cursor-text="EXPLORE"
                  className={`lg:col-span-7 block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-overlay-dark border border-card ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover grayscale brightness-[0.75] hover:scale-101 transition-transform duration-[1200ms]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </Link>

                {/* Info panel */}
                <div className={`lg:col-span-5 space-y-6 text-left ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                    Collection 0{idx + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light text-page-primary tracking-tight font-serif leading-tight">
                    {collection.name}
                  </h2>
                  <p className="text-page-secondary text-sm leading-relaxed font-light font-sans max-w-sm">
                    {collection.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href={`/collections/${collection.id}`}
                      className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] link-underline border-b pb-1.5 transition-all duration-300"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
