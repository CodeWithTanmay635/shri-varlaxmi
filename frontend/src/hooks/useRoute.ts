"use client";

import { useState, useEffect } from "react";
import { fetchRoute, RouteData } from "@/services/osrm";
import { Coordinates } from "@/hooks/useGeolocation";
import { SHOP_COORDINATES } from "@/constants/showroom";

export function useRoute(userLocation: Coordinates | null) {
  const [route, setRoute] = useState<RouteData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userLocation) return;

    let isMounted = true;

    async function getRoute() {
      setLoading(true);
      setError(null);
      
      try {
        const routeData = await fetchRoute(userLocation as Coordinates, SHOP_COORDINATES);
        if (isMounted) {
          if (routeData) {
            setRoute(routeData);
          } else {
            setError("Could not calculate a route.");
          }
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Failed to fetch route.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    getRoute();

    return () => {
      isMounted = false;
    };
  }, [userLocation]);

  return { route, loading, error };
}
