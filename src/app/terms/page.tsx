"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <section className="text-center space-y-4 pt-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block animate-fade-in">
            Legal Framework
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-page-primary font-serif animate-slide-up">
            Terms &amp; Conditions
          </h1>
          <p className="text-page-muted font-light text-xs font-sans">
            Last Updated: June 24, 2026
          </p>
        </section>

        <section className="p-8 md:p-12 rounded-2xl card-block text-sm text-page-secondary leading-relaxed font-light font-sans space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">1. Showroom Exhibition Policy</h3>
            <p>
              Shri Varalakshmi Jewellery and Metals operates as a digital showroom presenting handcrafted premium German Silver articles as luxury collectibles. All inquiries are custom routed and coordinated directly. We do not support standard click-to-buy e-commerce structures.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">2. Custom Commissions &amp; Inquiries</h3>
            <p>
              Custom engraving, detailing, or sizing requests submitted via our inquiry form are subject to manual verification, workshop scheduling, and base alloy metal availability. Committing to a custom commission requires direct alignment with our showroom managers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">3. Metal Crafting &amp; Finish Guarantee</h3>
            <p>
              Every article is chiseled by hand and uses high-grade copper, nickel, and zinc alloys with dual-layer protective lacquer. Due to the handcrafted nature of our process, minor variations in weights, dimensions, and chiseled motifs are expected and celebrated as marks of authentic craftsmanship.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">4. Packaging &amp; Custody</h3>
            <p>
              To safeguard the mirror-finish, each item is packed in museum-grade velvet-lined cases. Transit and shipping coordinates are finalized directly during inquiry alignment. Liability for handling transitions to the receiver upon carrier receipt.
            </p>
          </div>
        </section>

        <div className="text-center font-sans">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl card-block text-page-primary font-semibold text-xs tracking-wider uppercase transition-all hover:text-accent"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
