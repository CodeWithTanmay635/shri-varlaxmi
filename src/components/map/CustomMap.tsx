"use client";

import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useRoute } from "@/hooks/useRoute";
import { SHOP_COORDINATES } from "@/constants/showroom";
import ShopMarker from "./ShopMarker";
import UserMarker from "./UserMarker";
import RouteLayer from "./RouteLayer";
import EtaCard from "./EtaCard";

export default function CustomMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const [mapReady, setMapReady] = useState(false);
  
  const { location: userLocation, error: geoError } = useGeolocation();
  const { route, loading: routeLoading } = useRoute(userLocation);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (mapInstance.current) return; // Prevent double initialization

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [SHOP_COORDINATES.lng, SHOP_COORDINATES.lat],
      zoom: 15,
      attributionControl: false,
    });

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    map.on('load', () => {
      setMapReady(true);
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-card shadow-lg">
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
      {mapReady && (
        <>
          <ShopMarker map={mapInstance.current} lat={SHOP_COORDINATES.lat} lng={SHOP_COORDINATES.lng} />
          {userLocation && (
            <UserMarker map={mapInstance.current} lat={userLocation.lat} lng={userLocation.lng} />
          )}
          {route && (
            <>
              <RouteLayer map={mapInstance.current} route={route} />
              <EtaCard route={route} />
            </>
          )}
        </>
      )}
    </div>
  );
}
