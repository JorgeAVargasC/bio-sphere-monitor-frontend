import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'

import { useGetStationsData } from '@dashboard/shared/hooks'

import { stationIcons } from '@dashboard/shared/components/station-icons'
import { StationName } from '@dashboard/shared/types/firebase-data.interface'
import { stationLabels } from '@dashboard/shared/components/station-labels'
import { TempChart } from './components/temp-chart/temp-chart'
import { HumidityChart } from './components/humidity-chart/humidity-chart'
import { AirQualityChart } from './components/air-quality-chart/air-quality-chart'
import { RainChart } from './components/rain-chart/rain-chart'
import { SunChart } from './components/sun-chart/sun-chart'

export const Charts: React.FC = () => {
  const data = useGetStationsData()

  if (!data) {
    return (
      <Card>
        <CardBody>No Data Available</CardBody>
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
              {stationIcons['temperature']}
              {stationLabels['temperature']}
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.station ?? {}).map(
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
              {stationIcons['humidity']}
              {stationLabels['humidity']}
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.station ?? {}).map(
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
          key='airQuality'
          title={
            <div className='flex items-center gap-2'>
              {stationIcons['airQuality']}
              {stationLabels['airQuality']}
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.station ?? {}).map(
              ([stationName, stationData]) => (
                <AirQualityChart
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
              {stationIcons['rain']}
              {stationLabels['rain']}
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.station ?? {}).map(
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
              {stationIcons['sun']}
              {stationLabels['sun']}
            </div>
          }
        >
          <div className='grid gap-4'>
            {Object.entries(data?.station ?? {}).map(
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
