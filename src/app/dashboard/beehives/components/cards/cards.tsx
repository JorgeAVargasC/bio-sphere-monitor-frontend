import { ColmenaCard } from './components'

import { StationName } from './interfaces/firebase-data.interface'

import { Skeleton } from '@nextui-org/react'
import { useGetBeehivesData } from '@dashboard/shared/hooks'

export const Cards: React.FC = () => {
  const query = useGetBeehivesData()

  if (query.isFetching) {
    return (
      <div className='flex flex-col gap-3'>
        <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className='h-[240px] rounded-2xl'
            />
          ))}
        </div>
      </div>
    )
  }

  if (query.isFetched && !query.data?.lastRecords) {
    return <div>No existe información en el momento</div>
  }

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        {Object.entries(query.data?.lastRecords ?? {}).map(
          ([stationName, stationData]) => (
            <ColmenaCard
              key={stationName}
              stationData={stationData}
              stationName={stationName as StationName}
            />
          )
        )}
      </div>
    </div>
  )
}
