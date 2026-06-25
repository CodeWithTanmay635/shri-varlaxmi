"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { RouteData } from "@/services/osrm";

interface RouteLayerProps {
  map: maplibregl.Map | null;
  route: RouteData | null;
}

export default function RouteLayer({ map, route }: RouteLayerProps) {
  useEffect(() => {
    if (!map || !route) return;

    const sourceId = "route-source";
    const layerId = "route-layer";

    // If source doesn't exist, create it
    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: route.geometry,
        },
      });

      map.addLayer({
        id: layerId,
        type: "line",
        source: sourceId,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3B82F6", // Blue color for the route
          "line-width": 4,
          "line-opacity": 0.8,
        },
      });
    } else {
      // Update existing source
      const source = map.getSource(sourceId) as maplibregl.GeoJSONSource;
      source.setData({
        type: "Feature",
        properties: {},
        geometry: route.geometry,
      });
    }

    // Optional: Fly to fit the route bounds
    if (route.geometry.coordinates.length > 0) {
      const bounds = new maplibregl.LngLatBounds();
      route.geometry.coordinates.forEach((coord) => {
        bounds.extend(coord as [number, number]);
      });
      
      map.fitBounds(bounds, {
        padding: 50,
        duration: 1000, // Smooth transition
      });
    }

    return () => {
      // Cleanup on unmount or route change if we want
      // But we generally want to keep the layer and just update the data
      // If we really unmount, we should clean up
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
      if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
      }
    };
  }, [map, route]);

  return null;
}
