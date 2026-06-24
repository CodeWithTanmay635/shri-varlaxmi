"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories, products } from "@/lib/products";
import { FiArrowRight } from "react-icons/fi";
import ProductShowcase from "@/components/sections/ProductShowcase";

export default function Home() {
  const signatureProduct = products.find(p => p.id === "kalash-pair-elephant") || products[0];

  const highlights = products.filter(p =>
    ["gs-diya-peacock-classic", "pooja-plate-lattice", "gift-paneer-sombu"].includes(p.id)
  );

  return (
    <div className="relative bg-page min-h-screen text-page-primary overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Hero Description */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[10px] uppercase tracking-[0.35em] text-accent font-semibold block"
              >
                Signature Masterpiece
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.15 }}
                className="text-4xl md:text-6xl font-extralight tracking-tight leading-[1.1] text-page-primary font-serif"
              >
                Ganesha &amp; Lakshmi Kalash Pair
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="text-page-secondary text-sm md:text-base font-light leading-relaxed pt-2 max-w-sm"
              >
                A breathtaking pair of sacred vessels chiseled in high-relief German Silver. Elevated on Ganesha and Lakshmi elephant motifs.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.45 }}
              className="pt-4"
            >
              <Link
                href="/collections"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-page-primary link-underline border-b pb-1.5 transition-all duration-300"
              >
                <span>Explore Collection</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <div className="absolute w-[450px] h-[450px] bg-black/40 rounded-full filter blur-[60px] z-0 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden border border-card bg-overlay-dark z-10"
            >
              <Image
                src={signatureProduct.image}
                alt={signatureProduct.name}
                fill
                className="object-cover grayscale brightness-90 filter contrast-[1.05]"
                priority
              />
              <div className="absolute inset-0 vignette-bottom opacity-80" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. BRAND STORY */}
      <section className="py-32 md:py-48 px-6 md:px-12 section-border-t relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
            The Philosophy of Shri Varalakshmi
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-snug text-page-primary font-serif">
            Timeless silver, chiseled by hand, preservation of sacred heritage.
          </h2>
          <div className="h-[1px] w-16 bg-accent mx-auto my-8 opacity-40" />
          <p className="text-page-secondary font-light leading-loose text-base md:text-lg max-w-2xl mx-auto font-sans">
            We believe that sacred articles should transcend daily utility to become objects of art. Deep in Kalaburagi, our craftsmen shape raw alloys into high-micron silver pieces chiseled with divine silhouettes. We do not manufacture; we create silent testaments of faith, chiseled to endure generations.
          </p>
        </div>
      </section>

      {/* 3. FEATURED COLLECTION PREVIEW */}
      <section className="py-24 section-border-t px-6 md:px-12 relative z-10 bg-overlay-subtle">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
                Exhibitions
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-page-primary font-serif">
                Featured Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-[0.25em] text-page-secondary hover:text-accent transition-colors border-b border-theme-subtle pb-1"
            >
              All Collections
            </Link>
          </div>

          {/* Luxury Large Visual Slides */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.id}`}
                data-cursor-text="VIEW"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative h-[500px] rounded-2xl overflow-hidden border border-card bg-overlay-dark flex flex-col justify-end p-8"
                >
                  {/* Background Cover */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover grayscale brightness-[0.7] group-hover:scale-102 transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
                      Collection {idx + 1}
                    </span>
                    <h3 className="text-2xl font-light text-white font-serif">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-light line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-white group-hover:text-accent transition-colors">
                        <span>Explore</span>
                        <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE */}
      <section className="section-border-t py-12 relative z-10 bg-page">
        <ProductShowcase />
      </section>

      {/* 5. CRAFTSMANSHIP BRIEF */}
      <section className="py-32 px-6 md:px-12 section-border-t relative z-10 bg-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 space-y-8 text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
              The Artisan&apos;s Workshop
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-page-primary leading-tight font-serif">
              Crafted Beyond Time.
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Our alloy core blends high-micron silver deposition with durable polymer lacquer protection. We guarantee that the sacred beauty of our articles is preserved from humidity, oxygen, and structural deterioration.
            </p>
            <div className="pt-2">
              <Link
                href="/craftsmanship"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] link-underline border-b pb-1.5 transition-all duration-300"
              >
                <span>Read Story</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Alloys", desc: "Authentic solid alloy weights made strictly of premium copper, nickel, and zinc base metals." },
              { num: "02", title: "Plating", desc: "High-micron electrostatic plating process ensures durable silver layers that resist flaking." },
              { num: "03", title: "Lacquer", desc: "Anti-tarnish shield seals raw silver from oxidation and eliminates daily maintenance." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="p-8 rounded-xl card-block space-y-4">
                <span className="text-xl font-light text-page-primary font-serif">{num} / {title}</span>
                <p className="text-xs text-page-secondary font-light leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PRODUCT HIGHLIGHTS */}
      <section className="py-24 section-border-t px-6 md:px-12 relative z-10 bg-page">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-left space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
              Collectible Mastercrafts
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-page-primary font-serif">
              Product Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
            {highlights.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`flex flex-col space-y-6 ${idx === 1 ? "lg:translate-y-12" : ""}`}
              >
                {/* Visual card */}
                <div data-cursor="product" className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-card bg-overlay-dark group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale brightness-90 group-hover:scale-101 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Details */}
                <div className="space-y-2 text-left">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-medium">
                    {product.specs.polish}
                  </span>
                  <h3 className="text-lg font-light text-page-primary font-serif">
                    {product.name}
                  </h3>
                  <p className="text-xs text-page-secondary leading-relaxed font-light line-clamp-2 font-sans">
                    {product.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/collections/${product.category}`}
                      className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] link-underline border-b pb-1"
                    >
                      <span>Explore Collection</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="py-32 px-6 md:px-12 section-border-t relative z-10 bg-overlay-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
              Visual Exhibition
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-page-primary leading-tight font-serif">
              The Digital Gallery
            </h2>
            <p className="text-page-secondary text-sm leading-relaxed font-light font-sans">
              Observe macro details, hand carvings, and glossy silver finishes. Explore our high-definition visuals curated as a digital exhibition space.
            </p>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] link-underline border-b pb-1.5 transition-all duration-300"
              >
                <span>Enter Gallery</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div data-cursor="gallery" className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden border border-card">
              <Image
                src="/images/Gemini_Generated_Image_urvwqkurvwqkurvw.png"
                alt="German silver diya"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>
            <div data-cursor="gallery" className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden border border-card translate-y-12">
              <Image
                src="/images/Gemini_Generated_Image_wdq99vwdq99vwdq9.png"
                alt="German silver plate"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. VISIT SHOWROOM TEASER */}
      <section className="py-24 section-border-t px-6 md:px-12 relative z-10 bg-page">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
            The Location
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-page-primary font-serif">
            Visit Our Showroom
          </h2>
          <p className="text-page-secondary text-sm leading-relaxed font-light max-w-xl mx-auto font-sans">
            Discover chiseled German Silver Pooja collections physically. Locate our factory showroom office in Kalaburagi, Karnataka. Run our custom interactive map navigation.
          </p>
          <div className="pt-4">
            <Link
              href="/visit-showroom"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-black bg-accent hover:opacity-90 px-8 py-4 rounded-xl font-medium tracking-widest transition-all duration-300"
            >
              <span>Explore Interactive Map</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
