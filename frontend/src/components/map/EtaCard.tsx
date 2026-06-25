"use client";

import { motion } from "framer-motion";
import { RouteData } from "@/services/osrm";
import { FiClock, FiMap, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface EtaCardProps {
  route: RouteData | null;
}

export default function EtaCard({ route }: EtaCardProps) {
  if (!route) return null;

  // Format distance
  const distanceKm = (route.distance / 1000).toFixed(1);
  
  // Format duration
  const minutes = Math.ceil(route.duration / 60);
  const formattedDuration = minutes > 60 
    ? `${Math.floor(minutes / 60)}h ${minutes % 60}m`
    : `${minutes} min`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-nav-bg backdrop-blur-md border border-border-subtle p-5 rounded-xl shadow-2xl z-10 font-sans"
    >
      <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-4">
        <div>
          <h4 className="text-[10px] uppercase tracking-wider text-page-muted font-semibold">Distance</h4>
          <div className="flex items-center space-x-2 mt-1">
            <FiMap className="w-4 h-4 text-accent" />
            <span className="text-lg font-light text-page-primary">{distanceKm} km</span>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-[10px] uppercase tracking-wider text-page-muted font-semibold">ETA</h4>
          <div className="flex items-center justify-end space-x-2 mt-1">
            <span className="text-lg font-light text-page-primary">{formattedDuration}</span>
            <FiClock className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-page-secondary">
          <span>Showroom Open</span>
          <span className="text-emerald-500 flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span> Now</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href="tel:+919341874222"
            className="flex items-center justify-center space-x-2 bg-surface hover:bg-card border border-border-subtle text-page-primary py-2 rounded-lg text-xs transition-colors"
          >
            <FiPhone className="w-3.5 h-3.5" />
            <span>Call 1</span>
          </a>
          <a
            href="tel:+919740423851"
            className="flex items-center justify-center space-x-2 bg-surface hover:bg-card border border-border-subtle text-page-primary py-2 rounded-lg text-xs transition-colors"
          >
            <FiPhone className="w-3.5 h-3.5" />
            <span>Call 2</span>
          </a>
          <a
            href="https://wa.me/919341874222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 py-2 rounded-lg text-xs transition-colors"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>WA 1</span>
          </a>
          <a
            href="https://wa.me/919740423851"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 py-2 rounded-lg text-xs transition-colors"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>WA 2</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
