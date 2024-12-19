import { useEffect, useState } from 'react'

import { ColmenaCard } from './components'

import {
  IFirebaseData,
  StationName
} from './interfaces/firebase-data.interface'

import { realtimeDB } from '../../../../../firebase/firebase.config'
import { ref, get } from 'firebase/database'
import { Skeleton } from '@nextui-org/react'

export const Cards: React.FC = () => {
  const [data, setData] = useState<IFirebaseData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIsLoading(true)
    try {
      const headerRef = ref(realtimeDB)
      const snapshot = await get(headerRef)
      console.log(snapshot.val())
      setData(snapshot.val())
    } catch (error) {
      console.error('Error getting data:', error)
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!data && isLoading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <Skeleton
        key={index}
        className='h-[240px] rounded-2xl'
      />
    ))
  }

  if (!data) {
    return <div>No existe información en el momento</div>
  }

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        {Object.entries(data?.lastRecords).map(([stationName, stationData]) => (
          <ColmenaCard
            key={stationName}
            stationData={stationData}
            stationName={stationName as StationName}
          />
        ))}
      </div>
    </div>
  )
}
