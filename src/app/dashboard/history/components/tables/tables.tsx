import { useGetStationsData } from '@dashboard/shared/hooks'
import { StationsTable } from './stations-table'
import { Card, CardBody } from '@nextui-org/react'
import { StationName } from '@dashboard/shared/types/firebase-data.interface'

export const Tables = () => {
  const data = useGetStationsData()

  if (!data) {
    return (
      <Card>
        <CardBody>No Data Available</CardBody>
      </Card>
    )
  }

  return (
    <div className='grid gap-4'>
      {Object.entries(data?.station ?? {}).map(([stationName, stationData]) => (
        <StationsTable
          key={stationName}
          stationData={stationData}
          stationName={stationName as StationName}
        />
      ))}
    </div>
  )
}
