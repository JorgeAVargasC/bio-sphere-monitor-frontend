import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { ColmenaMeasure } from './colmena.measure'
import { MdOutlineHive } from 'react-icons/md'
import {
  StationData,
  StationName
} from '../../interfaces/firebase-data.interface'
import { getAlerts, getDateFormatted } from '@dashboard/shared/utils'

type Props = {
  stationName: StationName
  stationData: StationData
}

export const ColmenaCard: React.FC<Props> = (props) => {
  const { stationData, stationName } = props

  return (
    <Card className='h-[240px]'>
      <MdOutlineHive className='absolute w-3/4 h-auto opacity-5 bottom-0 right-0' />
      <CardHeader className='flex flex-col items-start'>
        <h5 className='capitalize'>
          {stationName.split('_').join(' ').replace('station', 'colmena')}
        </h5>
        <p className='text-neutral-500'>
          {getDateFormatted(stationData.createdAt)}
        </p>
      </CardHeader>
      <CardBody className='grid grid-cols-2 gap-1'>
        <ColmenaMeasure
          name='Temperatura'
          value={stationData.temperature?.value}
          state={getAlerts('temperature', stationData.temperature.value)}
          unit={stationData.temperature.unit}
          measure='temperature'
        />
        <ColmenaMeasure
          name='Humedad'
          value={stationData.humidity.value}
          state={getAlerts('humidity', stationData.humidity.value)}
          unit={stationData.humidity.unit}
          measure='humidity'
        />
        <ColmenaMeasure
          name='Abejas por minuto'
          value={stationData.beesPerMinute.value}
          state={getAlerts('beesPerMinute', stationData.beesPerMinute.value)}
          unit={stationData.beesPerMinute.unit}
          measure='beesPerMinute'
        />
      </CardBody>
    </Card>
  )
}
