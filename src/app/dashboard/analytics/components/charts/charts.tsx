import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'

import { StationName } from './interfaces/firebase-data.interface'

import { useGetBeehivesData } from '@dashboard/shared/hooks'
import {
  BeesActivityChart,
  HumidityChart,
  RainChart,
  SunChart,
  TempChart
} from './components'
import { icons } from '@dashboard/shared/components/measure-icons'

export const Charts: React.FC = () => {
  const data = useGetBeehivesData()

  if (!data) {
    return (
      <Card>
        <CardBody>No existe información en el momento</CardBody>
      </Card>
    )
  }

  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab
          key='temp'
          title={
            <div className='flex items-center gap-2'>
              {icons['temperature']}
              Temperatura
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.beehiveStation ?? {}).map(
              ([stationName, stationData]) => (
                <TempChart
                  key={stationName}
                  stationData={stationData}
                  stationName={stationName as StationName}
                />
              )
            )}
          </div>
        </Tab>

        <Tab
          key='humidity'
          title={
            <div className='flex items-center gap-2'>
              {icons['humidity']}
              Humedad
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.beehiveStation ?? {}).map(
              ([stationName, stationData]) => (
                <HumidityChart
                  key={stationName}
                  stationData={stationData}
                  stationName={stationName as StationName}
                />
              )
            )}
          </div>
        </Tab>

        <Tab
          key='bees'
          title={
            <div className='flex items-center gap-2'>
              {icons['beesPerMinute']}
              Abejas por minuto
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.beehiveStation ?? {}).map(
              ([stationName, stationData]) => (
                <BeesActivityChart
                  key={stationName}
                  stationData={stationData}
                  stationName={stationName as StationName}
                />
              )
            )}
          </div>
        </Tab>

        <Tab
          key='rain'
          title={
            <div className='flex items-center gap-2'>
              {icons['rain']}
              Lluvia
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.beehiveStation ?? {}).map(
              ([stationName, stationData]) => (
                <RainChart
                  key={stationName}
                  stationData={stationData}
                  stationName={stationName as StationName}
                />
              )
            )}
          </div>
        </Tab>

        <Tab
          key='sun'
          title={
            <div className='flex items-center gap-2'>
              {icons['sun']}
              Sol
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.beehiveStation ?? {}).map(
              ([stationName, stationData]) => (
                <SunChart
                  key={stationName}
                  stationData={stationData}
                  stationName={stationName as StationName}
                />
              )
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
