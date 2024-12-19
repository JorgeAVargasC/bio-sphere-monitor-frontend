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
      const headerRef = ref(realtimeDB) // Obtener una referencia a 'data'
      const snapshot = await get(headerRef) // Obtener los datos de 'data'
      console.log(snapshot.val())
      setData(snapshot.val())
    } catch (error) {
      console.error('Error getting data:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        {Object.entries(data?.beehiveStation ?? {}).map(
          ([stationName, stationDataArray]) => (
            <ColmenaCard
              key={stationName}
              stationData={stationDataArray[stationDataArray.length - 1]}
              stationName={stationName as StationName}
            />
          )
        )}
      </div>
    </div>
  )
}
