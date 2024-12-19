import { useEffect, useState } from 'react'

import { ColmenaCard } from './components'

import {
  IFirebaseData,
  StationName
} from './interfaces/firebase-data.interface'

import { realtimeDB } from '../../../../../firebase/firebase.config'
import { ref, get } from 'firebase/database'

export const Cards: React.FC = () => {
  const [data, setData] = useState<IFirebaseData | null>(null)

  const getData = async () => {
    try {
      const headerRef = ref(realtimeDB)
      const snapshot = await get(headerRef)
      console.log(snapshot.val())
      setData(snapshot.val())
    } catch (error) {
      console.error('Error getting data:', error)
      setData(null)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!data) {
    return <></>
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
