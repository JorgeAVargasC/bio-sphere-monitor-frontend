import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { IGetColmenasRes } from '@services/dashboard/colmenas/get.colmenas'
import React from 'react'
import { ColmenaMeasure } from './colmena.measure'
import { MdOutlineHive } from 'react-icons/md'
import { useColmenasStore } from '@dashboard/colmenas/store'
import { useSearchParams } from 'react-router-dom'

export const ColmenaCard: React.FC<IGetColmenasRes['results'][0]> = (props) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [, setSearchParams] = useSearchParams()

  const onOpen = () => {
    setSearchParams({ colmena: props.id })
  }

  const view = useColmenasStore((state) => state.view)

  return (
    <>
      {view === 'grid' && (
        <Card
          className='h-[240px]'
          isPressable
          onPress={onOpen}
        >
          <MdOutlineHive className='absolute w-3/4 h-auto opacity-5 bottom-0 right-0' />
          <CardHeader className='flex justify-start items-center gap-2'>
            <h3>{props.name}</h3>
          </CardHeader>
          <CardBody className='grid grid-cols-2 gap-2'>
            <ColmenaMeasure
              name='Temperatura'
              value={props.temperature.value}
              state={props.temperature.state}
              unit={props.temperature.unit}
              measure='temperature'
            />
            <ColmenaMeasure
              name='Humedad'
              value={props.humidity.value}
              state={props.humidity.state}
              unit={props.humidity.unit}
              measure='humidity'
            />
            <ColmenaMeasure
              name='Abejas por minuto'
              value={props.beesPerMinute.value}
              state={props.beesPerMinute.state}
              unit={props.beesPerMinute.unit}
              measure='beesPerMinute'
            />
          </CardBody>
        </Card>
      )}
    </>
  )
}
