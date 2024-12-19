import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { ColmenaMeasure } from './colmena.measure'
import { MdOutlineHive } from 'react-icons/md'
import {
  StationData,
  StationName
} from '../../interfaces/firebase-data.interface'

type Props = {
  stationName: StationName
  stationData: StationData
}

export const ColmenaCard: React.FC<Props> = (props) => {
  const { stationData, stationName } = props

  const getStateTempeerature = (value: number) => {
    if (value < 20) {
      return 'WARNING'
    } else if (value < 30) {
      return 'OK'
    } else {
      return 'DANGER'
    }
  }

  const getStateHumidity = (value: number) => {
    if (value < 50) {
      return 'WARNING'
    } else if (value < 70) {
      return 'OK'
    } else {
      return 'DANGER'
    }
  }

  const getStateBeesPerMinute = (value: number) => {
    if (value < 100) {
      return 'WARNING'
    } else if (value < 150) {
      return 'OK'
    } else {
      return 'DANGER'
    }
  }

  return (
    <Card className='h-[240px]'>
      <MdOutlineHive className='absolute w-3/4 h-auto opacity-5 bottom-0 right-0' />
      <CardHeader className='flex justify-start items-center gap-2'>
        <h3 className='capitalize'>{stationName.split('_').join(' ')}</h3>
      </CardHeader>
      <CardBody className='grid grid-cols-2 gap-2'>
        <ColmenaMeasure
          name='Temperatura'
          value={stationData.temperature.value}
          state={getStateTempeerature(stationData.temperature.value)}
          unit={stationData.temperature.unit}
          measure='temperature'
        />
        <ColmenaMeasure
          name='Humedad'
          value={stationData.humidity.value}
          state={getStateHumidity(stationData.humidity.value)}
          unit={stationData.humidity.unit}
          measure='humidity'
        />
        <ColmenaMeasure
          name='Abejas por minuto'
          value={stationData.beesPerMinute.value}
          state={getStateBeesPerMinute(stationData.beesPerMinute.value)}
          unit={stationData.beesPerMinute.unit}
          measure='beesPerMinute'
        />
      </CardBody>
    </Card>
  )
}
