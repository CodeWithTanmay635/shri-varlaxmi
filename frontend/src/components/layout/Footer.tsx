import React from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#080808] text-gray-400">
      {/* Decorative ambient lighting top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="group flex flex-col justify-start">
              <span className="text-lg font-light tracking-[0.3em] text-[#F5F5F5] transition-all duration-300 group-hover:text-accent-gold">
                SHRI VARALAKSHMI
              </span>
              <span className="text-[8px] tracking-[0.45em] text-accent-gold uppercase font-medium mt-1">
                Jewellery & Metals
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Prestige manufacturers of premium German Silver Pooja Items. We blend legacy craftsmanship with timeless design for digital galleries and showrooms globally.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Digital Showroom
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-accent-gold transition-colors">
                  Heritage & Story
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-accent-gold transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-accent-gold transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent-gold transition-colors">
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Information */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Main Showroom
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-4 h-4 text-accent-gold mt-1 shrink-0" />
                <span className="leading-snug">
                  5677, Super Market, Chakkar Katta,<br />
                  Maktampura, Kalaburagi,<br />
                  Karnataka 585101
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiClock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Mon - Sat: 10:00 AM - 8:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Urgent Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Showroom details
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+919341874222"
                className="flex items-center space-x-3 text-sm hover:text-white transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-all">
                  <FiPhone className="w-4 h-4 text-accent-gold" />
                </span>
                <span>+91 93418 74222</span>
              </a>
              <a
                href="tel:+919740423851"
                className="flex items-center space-x-3 text-sm hover:text-white transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-all">
                  <FiPhone className="w-4 h-4 text-accent-gold" />
                </span>
                <span>+91 97404 23851</span>
              </a>
              <a
                href="https://wa.me/919341874222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-white transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-all">
                  <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                </span>
                <span>WhatsApp (Primary)</span>
              </a>
              <a
                href="https://wa.me/919740423851"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-white transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-all">
                  <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                </span>
                <span>WhatsApp (Secondary)</span>
              </a>
              <a
                href="mailto:shri.varlaxmi1625@gmail.com"
                className="flex items-center space-x-3 text-sm hover:text-white transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-all">
                  <FiMail className="w-4 h-4 text-accent-gold" />
                </span>
                <span>shri.varlaxmi1625@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center">
            <span>&copy; {currentYear} Shri Varalakshmi Jewellery and Metals. All rights reserved.</span>
            <span className="hidden md:inline mx-2 text-white/10">|</span>
            <span className="mt-2 md:mt-0">Designed by <span className="text-accent-gold/80">Tanmay Pansare</span></span>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-accent-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
