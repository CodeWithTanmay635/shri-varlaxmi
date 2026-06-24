"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { motion } from "framer-motion";
import { FiArrowLeft, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams() as { id: string };
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-page min-h-[70vh] flex flex-col items-center justify-center space-y-6 text-page-primary">
        <h2 className="text-xl font-light font-serif">Product not found</h2>
        <Link href="/collections" className="px-6 py-3 rounded-lg bg-accent text-black text-xs uppercase tracking-widest">
          All Collections
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* Navigation back */}
        <div className="text-left">
          <Link
            href={`/collections/${product.category}`}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-page-muted hover:text-accent transition-colors group"
          >
            <FiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Collection</span>
          </Link>
        </div>

        {/* Product Exhibition Presentation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Hero Image */}
          <div className="lg:col-span-7 relative aspect-[4/5] rounded-2xl overflow-hidden bg-overlay-dark border border-card">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover grayscale brightness-90 filter contrast-[1.03]"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
          </div>

          {/* Right: Spec Sheets & Narrative */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
                {product.specs.polish}
              </span>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-page-primary leading-tight font-serif">
                {product.name}
              </h1>
              <p className="text-page-secondary text-sm md:text-base font-light leading-relaxed font-sans pt-2">
                {product.description}
              </p>
            </div>

            {/* Specifications Card */}
            <div className="p-8 rounded-xl card-block space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-page-primary font-semibold flex items-center gap-1.5 font-sans">
                <FiInfo className="text-accent" />
                <span>Object Parameters</span>
              </span>
              <div className="grid grid-cols-2 gap-y-3.5 text-xs font-light font-sans section-border-t pt-4">
                <span className="text-page-muted">Weight</span>
                <span className="text-page-primary text-right font-medium">{product.specs.weight}</span>
                <span className="text-page-muted">Dimensions</span>
                <span className="text-page-primary text-right font-medium">{product.specs.dimensions}</span>
                <span className="text-page-muted">Alloy Core</span>
                <span className="text-page-primary text-right font-medium">{product.specs.material}</span>
                <span className="text-page-muted">Finishing</span>
                <span className="text-page-primary text-right font-medium">{product.specs.polish}</span>
              </div>
            </div>

            {/* Artisanal Features */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-page-primary font-semibold font-sans">
                Artisanal Features
              </h3>
              <ul className="space-y-3.5 text-xs text-page-secondary font-light font-sans">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 mt-1.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Inquiry */}
            <div className="pt-4 section-border-t">
              <a
                href={`https://wa.me/919845271830?text=I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-accent text-black hover:opacity-90 font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </a>
              <p className="text-[10px] text-page-muted mt-3 text-center leading-relaxed font-light font-sans">
                No checkout. Pre-populated templates coordinate direct showroom inquiries for sizing and availability.
              </p>
            </div>
          </div>
        </section>

        {/* Related Collectibles */}
        {relatedProducts.length > 0 && (
          <section className="section-border-t pt-20 space-y-12">
            <h2 className="text-xl md:text-2xl font-light text-page-primary font-serif text-left">
              Related Collectibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="space-y-4 text-left group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-overlay-dark border border-card">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover grayscale brightness-90 group-hover:scale-101 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-light text-page-primary font-serif group-hover:text-accent transition-colors leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs text-page-muted font-sans font-light">
                      Specs: {p.specs.weight} &bull; {p.specs.dimensions}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/product/${p.id}`}
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-page-primary group-hover:text-accent transition-colors"
                      >
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
