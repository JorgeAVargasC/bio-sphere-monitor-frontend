import { useGetBeehivesData } from '@dashboard/shared/hooks'
import { BeehiveTable } from './beehive-table'
import { StationName } from '@dashboard/beehives/components/cards/interfaces'

export const Tables = () => {
  const query = useGetBeehivesData()

  return (
    <div className='grid gap-4'>
      {Object.entries(query.data?.beehiveStation ?? {}).map(
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
