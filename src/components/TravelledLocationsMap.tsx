'use client'

import React, { useRef, useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L, { LatLngExpression, Icon } from 'leaflet'
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk'

interface Location {
  position: LatLngExpression
  description: string
  icon?: Icon
}

const iconSize: [number, number] = [50, 50];
const iconAnchor: [number, number] = [17, 23];
const popupAnchor: [number, number] = [0, 0];

const motorBikeMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=15130&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
});

const carMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=36738&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

const planeMarket = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=C7Q1wz0DAlZR&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

const trekkingMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=16958&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

const markerIcon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
});

const locations: Location[] = [
  { position: [29.322748, 83.986198], description: 'Korala Border, Pillar 24', icon: motorBikeMarker },
  { position: [29.528439, 82.089435], description: 'Rara Lake', icon: motorBikeMarker },
  { position: [27.926689, 83.527947], description: 'Rani Mahal', icon: motorBikeMarker },
  { position: [27.913735, 85.164610], description: 'Nuwakot Durbar', icon: motorBikeMarker },
  { position: [28.816962, 83.871721], description: 'Muktinath Temple', icon: motorBikeMarker },
  { position: [27.429599, 87.766837], description: 'Pathivara Temple in Taplejung', icon: trekkingMarker },
  { position: [28.162931, 85.268072], description: 'Ghatlang Village', icon: motorBikeMarker },
  { position: [28.583849, 81.627842], description: 'Birendranagar', icon: motorBikeMarker },
  { position: [28.082935, 85.413701], description: 'Gosaikunda Lake', icon: trekkingMarker },
  { position: [27.192803, 86.622144], description: 'Haleshi Temple', icon: carMarker },
  { position: [26.730411, 85.926010], description: 'Janaki Temple', icon: carMarker },
  { position: [27.973555, 85.963568], description: 'Kodari Border', icon: motorBikeMarker },
  { position: [28.278004, 85.378328], description: 'Rasuwa Gadhi', icon: motorBikeMarker },
]

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const center = { lng: 13.338414, lat: 52.507932 }
  const [zoom] = useState<number>(2.2)

  useEffect(() => {
    if (map.current || !mapContainer.current) return

    map.current = new L.Map(mapContainer.current as HTMLElement, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    })

    new MaptilerLayer({
      apiKey: process.env.NEXT_PUBLIC_MAPTILER!,
    }).addTo(map.current)

    locations.forEach(location => {
      const marker = L.marker(location.position, { icon: location.icon || markerIcon })
      marker.bindPopup(location.description)
      marker.addTo(map.current!)
    })
  }, [center, zoom])

  return (
    <div className='relative w-full h-[500px] overflow-hidden rounded-xl'>
      <div ref={mapContainer} className='absolute w-full h-full' />
    </div>
  )
}

export default Map