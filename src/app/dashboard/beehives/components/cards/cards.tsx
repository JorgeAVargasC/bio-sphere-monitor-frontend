import { ColmenaCard } from './components'

import { StationName } from './interfaces/firebase-data.interface'

import { useGetBeehivesData } from '@dashboard/shared/hooks'

export const Cards: React.FC = () => {
  const data = useGetBeehivesData()

  if (!data) {
    return <div>No existe información en el momento</div>
  }

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        {Object.entries(data?.lastRecords ?? {}).map(
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
