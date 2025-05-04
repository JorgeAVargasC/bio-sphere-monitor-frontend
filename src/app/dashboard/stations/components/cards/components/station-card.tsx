import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { StationMeasure } from './station-measure'
import { IoEarth } from 'react-icons/io5'
import {
  StationData,
  StationName
} from '../../../../shared/types/firebase-data.interface'
import { getAlerts, getDateFormatted } from '@dashboard/shared/utils'
import { stationLabels } from '@dashboard/shared/components/station-labels'

type Props = {
  stationName: StationName
  stationData: StationData
}

export const StationCard: React.FC<Props> = (props) => {
  const { stationData, stationName } = props

  return (
    <Card className='h-[240px]'>
      <IoEarth className='absolute w-3/4 h-auto opacity-5 bottom-0 right-0' />
      <CardHeader className='flex flex-col items-start'>
        <h5 className='capitalize'>{stationName.split('_').join(' ')}</h5>
        <p className='text-neutral-500'>
          {getDateFormatted(stationData.createdAt)}
        </p>
      </CardHeader>
      <CardBody className='grid grid-cols-2 gap-3'>
        <StationMeasure
          name={stationLabels['temperature']}
          value={stationData.temperature?.value}
          state={getAlerts('temperature', stationData.temperature.value)}
          unit={stationData.temperature.unit}
          measure='temperature'
        />
        <StationMeasure
          name={stationLabels['humidity']}
          value={stationData.humidity.value}
          state={getAlerts('humidity', stationData.humidity.value)}
          unit={stationData.humidity.unit}
          measure='humidity'
        />
        <StationMeasure
          name={stationLabels['airQuality']}
          value={stationData.airQuality.value}
          state={getAlerts('airQuality', stationData.airQuality.value)}
          unit={stationData.airQuality.unit}
          measure='airQuality'
        />
      </CardBody>
    </Card>
  )
}
