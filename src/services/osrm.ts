import { Coordinates } from "@/hooks/useGeolocation";

export interface RouteData {
  geometry: {
    coordinates: [number, number][];
    type: "LineString";
  };
  distance: number; // in meters
  duration: number; // in seconds
}

export async function fetchRoute(start: Coordinates, end: Coordinates): Promise<RouteData | null> {
  // OSRM expects coordinates in lng,lat format
  const startStr = `${start.lng},${start.lat}`;
  const endStr = `${end.lng},${end.lat}`;
  
  const url = `https://router.project-osrm.org/route/v1/driving/${startStr};${endStr}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`OSRM API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.code !== "Ok" || !data.routes || data.routes.length === 0) {
      return null;
    }
    
    const route = data.routes[0];
    
    return {
      geometry: route.geometry,
      distance: route.distance,
      duration: route.duration,
    };
  } catch (error) {
    console.error("Failed to fetch route:", error);
    return null;
  }
}
