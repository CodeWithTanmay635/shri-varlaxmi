"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock, FiShield, FiBriefcase } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import InteractiveMapPlaceholder from "@/components/sections/InteractiveMapPlaceholder";

export default function VisitShowroom() {
  const showroomImages = [
    "/images/Gemini_Generated_Image_lljr5xlljr5xlljr.png",
    "/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png",
    "/images/Gemini_Generated_Image_1c9xt61c9xt61c9x.png",
  ];

  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

        {/* Header Block */}
        <section className="text-left max-w-3xl space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block"
          >
            Physical Presence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-page-primary leading-tight font-serif"
          >
            Factory Showroom Office
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-page-secondary font-light leading-relaxed text-sm md:text-base font-sans max-w-xl"
          >
            Experience our mastercraft German Silver articles chiseled by hand. Coordinate sizing, weights, and commissions physically at our primary Kalaburagi location.
          </motion.p>
        </section>

        {/* Showroom Hero Image block */}
        <section data-cursor="product" className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-card">
          <Image
            src="/images/Gemini_Generated_Image_lljr5xlljr5xlljr.png"
            alt="Shri Varalakshmi Showroom Entrance Facade"
            fill
            className="object-cover grayscale brightness-90"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 vignette-bottom opacity-80" />
        </section>

        {/* Store Information & Grid Details */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Block: Showroom Metadata & Contact */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-2xl font-light text-page-primary font-serif tracking-wide">Showroom Office</h3>

            <div className="space-y-6 font-sans">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-page-muted font-semibold">Address</h4>
                  <p className="text-sm text-page-primary mt-1.5 leading-relaxed font-light">
                    M.S.K. Mill Road, Opposite Hanuman Temple,<br />
                    Kalaburagi (Gulbarga),<br />
                    Karnataka - 585102, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiClock className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-page-muted font-semibold">Business Hours</h4>
                  <p className="text-sm text-page-primary mt-1.5 font-light">
                    Monday - Saturday: 10:00 AM - 8:30 PM
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiPhone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-page-muted font-semibold">Direct Communication</h4>
                  <div className="text-sm text-page-primary mt-1.5 space-y-1.5 font-light">
                    <a href="tel:+919845271830" className="block hover:text-accent transition-colors">+91 98452 71830</a>
                    <a
                      href="https://wa.me/919845271830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-emerald-500 hover:text-accent transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Connect via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Premium Info Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl card-block space-y-4 text-left">
              <FiShield className="w-6 h-6 text-accent" />
              <h4 className="text-base font-light text-page-primary font-serif">Valet &amp; Parking</h4>
              <p className="text-xs text-page-secondary font-light leading-relaxed font-sans">
                Dedicated parking slots are reserved for visitors on the M.S.K. Mill Road factory site. Secure gates are monitored 24/7.
              </p>
            </div>

            <div className="p-8 rounded-xl card-block space-y-4 text-left">
              <FiBriefcase className="w-6 h-6 text-accent" />
              <h4 className="text-base font-light text-page-primary font-serif">Curator Scheduling</h4>
              <p className="text-xs text-page-secondary font-light leading-relaxed font-sans">
                Request a dedicated gallery tour to chiseled segments with a master metalsmith. Connect on WhatsApp to coordinate calendars.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE MAP BLOCK */}
        <section className="space-y-8 pt-12 section-border-t text-left">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
              Cartography Preview
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-page-primary font-serif">
              Interactive Showroom Map
            </h2>
            <p className="text-page-secondary text-xs md:text-sm font-light font-sans max-w-xl">
              Previewing the coordinates layer interface. The live geographical locator and routes tracker will be bound in a future iteration.
            </p>
          </div>

          <InteractiveMapPlaceholder />
        </section>

        {/* Showroom Images Gallery Section */}
        <section className="space-y-8 section-border-t pt-20 text-left">
          <h2 className="text-2xl font-light text-page-primary font-serif">Showroom Collections Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showroomImages.map((src, idx) => (
              <div key={idx} data-cursor="product" className="relative aspect-[4/3] rounded-xl overflow-hidden border border-card bg-overlay-dark">
                <Image
                  src={src}
                  alt={`Shri Varalakshmi gallery display piece ${idx + 1}`}
                  fill
                  className="object-cover grayscale brightness-90 hover:scale-101 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
