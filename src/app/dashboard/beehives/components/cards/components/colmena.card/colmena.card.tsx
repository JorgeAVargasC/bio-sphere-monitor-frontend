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

  console.log(props)

  const getStateTemperature = (value: number) => {
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

  const getDateFormatted = (dateNumber: number) => {
    const formatter = new Intl.DateTimeFormat('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    const date = new Date(dateNumber)

    return formatter.format(date)
  }

  return (
    <Card className='h-[240px]'>
      <MdOutlineHive className='absolute w-3/4 h-auto opacity-5 bottom-0 right-0' />
      <CardHeader className='flex flex-col items-start'>
        <h3 className='capitalize'>{stationName.split('_').join(' ')}</h3>
        <p className='text-neutral-500'>
          {getDateFormatted(stationData.createdAt)}
        </p>
      </CardHeader>
      <CardBody className='grid grid-cols-2 gap-2'>
        <ColmenaMeasure
          name='Temperatura'
          value={stationData.temperature?.value}
          state={getStateTemperature(stationData.temperature.value)}
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
