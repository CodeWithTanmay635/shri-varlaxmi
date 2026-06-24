"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const galleryItems = products.map((p, idx) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    category: p.category,
    description: p.description,
    product: p,
    index: idx,
  }));

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? galleryItems.length - 1 : activeIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === galleryItems.length - 1 ? 0 : activeIdx + 1);
    }
  };

  const getAsymmetricClasses = (index: number) => {
    const patterns = [
      "col-span-12 md:col-span-8 aspect-[16/10] md:translate-y-4",
      "col-span-12 md:col-span-4 aspect-[4/5] md:-translate-y-6",
      "col-span-12 md:col-span-4 aspect-[3/4] md:translate-y-8",
      "col-span-12 md:col-span-8 aspect-[16/9] md:-translate-y-2",
      "col-span-12 md:col-span-6 aspect-[1/1] md:translate-y-12",
      "col-span-12 md:col-span-6 aspect-[4/3] md:-translate-y-4",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

        {/* Header Block */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block"
          >
            Visual Showroom
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-page-primary font-serif"
          >
            Digital Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-page-secondary font-light leading-relaxed text-sm md:text-base max-w-lg mx-auto font-sans"
          >
            Observe the delicate patterns, chiseled carvings, and glossy reflections of our German Silver Pooja articles. An editorial exhibition space.
          </motion.p>
        </section>

        {/* Asymmetrical Gallery Grid */}
        <section className="grid grid-cols-12 gap-8 md:gap-12 pb-24 items-center">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setActiveIdx(idx)}
              data-cursor="gallery"
              className={`${getAsymmetricClasses(idx)} relative rounded-2xl overflow-hidden border border-card cursor-pointer group bg-overlay-dark`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale brightness-90 group-hover:scale-101 transition-all duration-[1200ms]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 space-y-3 z-10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold">
                  {item.category.replace("-", " ")}
                </span>
                <h4 className="text-xl font-light text-white font-serif leading-tight">
                  {item.name}
                </h4>
                <div className="flex items-center space-x-2 text-[10px] text-white uppercase tracking-[0.25em] pt-2">
                  <FiMaximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Exhibition Spec</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Close */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 p-3 icon-badge hover:text-accent rounded-full transition-colors z-50"
              aria-label="Close Gallery"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-3 icon-badge hover:text-accent rounded-full transition-colors z-50"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-6 p-3 icon-badge hover:text-accent rounded-full transition-colors z-50"
              aria-label="Next Image"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-theme-mid bg-page p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Image Frame */}
              <div className="w-full md:w-1/2 relative aspect-square rounded-2xl overflow-hidden bg-overlay-dark border border-card">
                <Image
                  src={galleryItems[activeIdx].image}
                  alt={galleryItems[activeIdx].name}
                  fill
                  className="object-cover grayscale brightness-90"
                />
              </div>

              {/* Text & Specs */}
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full space-y-6 text-left">
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-accent">
                      Category: {galleryItems[activeIdx].category.replace("-", " ")}
                    </span>
                    <h3 className="text-2xl font-light text-page-primary mt-1 leading-snug font-serif">
                      {galleryItems[activeIdx].name}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-page-secondary font-light font-sans leading-relaxed">
                    {galleryItems[activeIdx].description}
                  </p>

                  <div className="space-y-2 pt-4 section-border-t font-sans">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-page-primary font-semibold">
                      Parameters
                    </h4>
                    <div className="grid grid-cols-2 gap-y-1.5 text-xs font-light">
                      <span className="text-page-muted">Weight</span>
                      <span className="text-page-primary text-right">{galleryItems[activeIdx].product.specs.weight}</span>
                      <span className="text-page-muted">Dimensions</span>
                      <span className="text-page-primary text-right">{galleryItems[activeIdx].product.specs.dimensions}</span>
                      <span className="text-page-muted">Alloy Core</span>
                      <span className="text-page-primary text-right">{galleryItems[activeIdx].product.specs.material}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 section-border-t flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919845271830?text=I%20am%20interested%20in%20the%20${encodeURIComponent(galleryItems[activeIdx].name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow py-3 px-6 rounded-xl bg-accent hover:opacity-90 text-black text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <Link
                    href={`/product/${galleryItems[activeIdx].id}`}
                    className="py-3 px-5 rounded-xl card-block text-xs text-page-primary uppercase tracking-[0.2em] font-medium transition-all text-center flex items-center justify-center space-x-1.5 hover:text-accent"
                  >
                    <span>View Object</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
