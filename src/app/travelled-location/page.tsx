import React from 'react'
import dynamic from 'next/dynamic'

import { SimpleLayout } from '@/components/SimpleLayout'

const TravelledLocation = () => {
  const TravelledLocationMap = dynamic(
    () => import('@/components/TravelledLocationsMap'),
    { ssr: false },
  )
  return (
    <SimpleLayout title={`Places I've been to`} intro="">
      <TravelledLocationMap />
    </SimpleLayout>
  )
}

export default TravelledLocation
