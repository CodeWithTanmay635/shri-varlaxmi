"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getCategoryById, getProductsByCategory } from "@/lib/products";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function CollectionDetails() {
  const { id } = useParams() as { id: string };
  const collection = getCategoryById(id);
  const products = getProductsByCategory(id);

  if (!collection) {
    return (
      <div className="bg-page min-h-[70vh] flex flex-col items-center justify-center space-y-6 text-page-primary">
        <h2 className="text-xl font-light font-serif">Collection not found</h2>
        <Link href="/collections" className="px-6 py-3 rounded-lg bg-accent text-black text-xs uppercase tracking-widest">
          Return to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* Navigation back */}
        <div className="text-left">
          <Link
            href="/collections"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-page-muted hover:text-accent transition-colors group"
          >
            <FiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>All Collections</span>
          </Link>
        </div>

        {/* Collection Header */}
        <section className="space-y-4 max-w-3xl text-left">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
            Exhibition Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-page-primary font-serif">
            {collection.name}
          </h1>
          <p className="text-page-secondary font-light leading-relaxed text-sm md:text-base max-w-xl font-sans">
            {collection.description}
          </p>
        </section>

        {/* Editorial Asymmetrical Product List */}
        <section className="space-y-32 py-12">
          {products.map((product, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-card bg-overlay-dark ${isAlternate ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale brightness-90 hover:scale-101 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-6 text-left ${isAlternate ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold block">
                      {product.specs.polish}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-page-primary font-serif leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-page-muted font-sans tracking-wide">
                      Weight: {product.specs.weight} &bull; Dimensions: {product.specs.dimensions}
                    </p>
                  </div>

                  <p className="text-page-secondary text-xs md:text-sm leading-relaxed font-light font-sans max-w-sm">
                    {product.description}
                  </p>

                  <div className="pt-4">
                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] link-underline border-b pb-1.5 transition-all duration-300"
                    >
                      <span>View Object Details</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </section>

      </div>
    </div>
  );
}
