import { useGetBeehivesData } from '@dashboard/shared/hooks'
import { BeehiveTable } from './beehive-table'
import { StationName } from '@dashboard/beehives/components/cards/interfaces'

export const Tables = () => {
  const data = useGetBeehivesData()

  return (
    <div className='grid gap-4'>
      {Object.entries(data?.beehiveStation ?? {}).map(
        ([stationName, stationData]) => (
          <BeehiveTable
            key={stationName}
            stationData={stationData}
            stationName={stationName as StationName}
          />
        )
      )}
    </div>
  )
}
