import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import { IGetColmenasRes } from '@services/dashboard/colmenas/get.colmenas'
import React from 'react'
import { ColmenaMeasure } from './colmena.measure'
import { MdOutlineHive } from 'react-icons/md'
import { useColmenasStore } from '@dashboard/colmenas/store'

export const ColmenaCard: React.FC<IGetColmenasRes['results'][0]> = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
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

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='danger'
                  variant='light'
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color='primary'
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
