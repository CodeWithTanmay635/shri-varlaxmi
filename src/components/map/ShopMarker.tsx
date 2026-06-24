"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

interface ShopMarkerProps {
  map: maplibregl.Map | null;
  lat: number;
  lng: number;
}

export default function ShopMarker({ map, lat, lng }: ShopMarkerProps) {
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!map) return;

    // Create a custom DOM element for the marker
    const el = document.createElement("div");
    el.className = "w-8 h-8 flex items-center justify-center rounded-full bg-accent shadow-lg shadow-black/50 border-2 border-page";
    // We use a simple star SVG for the shop
    el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    `;

    markerRef.current = new maplibregl.Marker({ element: el })
      .setLngLat([lng, lat])
      .addTo(map);

    return () => {
      markerRef.current?.remove();
    };
  }, [map, lat, lng]);

  return null; // This component doesn't render standard React DOM, it injects into MapLibre
}
