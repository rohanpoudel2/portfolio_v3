"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import ReactDOMServer from "react-dom/server";
import { useTheme } from "next-themes";

import {
  defaultMarker,
  Locations as locations,
} from "@/data/TravelledLocation";

const PopupContent: React.FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => (
  <div>
    <h3 className="font-semibold">{title}</h3>
    {/* <div>
      <p>This is a detailed description of {description}.</p>
    </div> */}
  </div>
);

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const center = { lng: 53.338414, lat: 32.507932 };
  const [zoom] = useState<number>(3.5);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mapContainer.current) return;

    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    map.current = new L.Map(mapContainer.current as HTMLElement, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });

    const maptilerOptions = {
      apiKey: process.env.NEXT_PUBLIC_MAPTILER!,
      style:
        resolvedTheme === "dark"
          ? `https://api.maptiler.com/maps/darkmatter/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER}`
          : `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER}`,
    };

    new MaptilerLayer(maptilerOptions).addTo(map.current);

    locations.forEach((location) => {
      const marker = L.marker(location.position, { icon: defaultMarker });
      const popupContent = ReactDOMServer.renderToString(
        <PopupContent
          title={location.title}
          description={location.description}
        />
      );
      marker.bindPopup(popupContent);
      marker.addTo(map.current!);
    });
  }, [center, zoom, resolvedTheme]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
};

export default Map;
