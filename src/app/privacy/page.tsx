"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <section className="text-center space-y-4 pt-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block animate-fade-in">
            Data Protection
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-page-primary font-serif animate-slide-up">
            Privacy Policy
          </h1>
          <p className="text-page-muted font-light text-xs font-sans">
            Last Updated: June 24, 2026
          </p>
        </section>

        <section className="p-8 md:p-12 rounded-2xl card-block text-sm text-page-secondary leading-relaxed font-light font-sans space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">1. Information Collection</h3>
            <p>
              We collect details voluntarily provided during direct showroom inquiries. This includes name, phone/WhatsApp coordinates, email addresses, location details, and sizing specs. We do not track or capture silent background telemetry.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">2. Purpose of Processing</h3>
            <p>
              Your contact details are processed solely to verify product sizing availability, formulate custom design pricing coordinates, route logistics, and respond to your direct commission requests. We maintain strict confidentiality and never sell or lease information to third-party databases.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">3. Cache &amp; Storage</h3>
            <p>
              We utilize local storage keys on your browser to support dynamic map configurations and location status coordinates. This storage remains entirely local and can be cleared at any time within your browser settings.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-light text-page-primary font-serif tracking-wide">4. Security Measures</h3>
            <p>
              Showroom records are stored behind secure local database firewalls. Direct communications and details transmitted are protected using standard routing layers.
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
