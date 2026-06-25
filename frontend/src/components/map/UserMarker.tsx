"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

interface UserMarkerProps {
  map: maplibregl.Map | null;
  lat: number;
  lng: number;
}

export default function UserMarker({ map, lat, lng }: UserMarkerProps) {
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!map) return;

    const el = document.createElement("div");
    el.className = "w-5 h-5 rounded-full bg-white border-2 border-blue-500 shadow-md";
    // Optional: add a pulsing animation using Tailwind
    el.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.8)";

    if (markerRef.current) {
      markerRef.current.setLngLat([lng, lat]);
    } else {
      markerRef.current = new maplibregl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map);
    }

    // When location updates, we could fly to it or just leave it
    // Let's just update the marker position for now

    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
    };
  }, [map, lat, lng]);

  return null;
}
