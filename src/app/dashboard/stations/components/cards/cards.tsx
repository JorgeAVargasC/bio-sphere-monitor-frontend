import { Card, CardBody } from '@nextui-org/react'

import { StationName } from '../../../shared/types/firebase-data.interface'

import { useGetStationsData } from '@dashboard/shared/hooks'
import { StationCard } from './components/station-card'

export const Cards: React.FC = () => {
  const data = useGetStationsData()

  if (!data) {
    return (
      <Card>
        <CardBody>No Data Available</CardBody>
      </Card>
    )
  }

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-3 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]'>
        {Object.entries(data?.lastRecords ?? {}).map(
          ([stationName, stationData]) => (
            <StationCard
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
