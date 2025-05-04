import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

import { ApexOptions } from 'apexcharts'
import {
  StationData,
  StationName
} from '@dashboard/shared/types/firebase-data.interface'
import { stationLabels } from '@dashboard/shared/components/station-labels'

interface Props {
  stationName: StationName
  stationData: StationData[]
}

export const RainChart: React.FC<Props> = ({ stationName, stationData }) => {
  const chartData = [
    {
      name: stationLabels['rain'],
      data: stationData.map((data) => ({
        x: new Date(data.createdAt).getTime(),
        y: data.rain.value
      }))
    }
  ]

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'stepline',
      colors: ['#00bcd4'], // Cambié el color a uno más relacionado con la lluvia
      width: 2
    },
    grid: {
      borderColor: '#ddd',
      strokeDashArray: 3
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '12px'
        }
      },
      axisBorder: {
        color: '#aaa'
      },
      axisTicks: {
        color: '#aaa'
      }
    },
    yaxis: {
      title: {
        text: `${stationLabels['rain']}`, // Actualicé la unidad de Y
        style: {
          color: '#aaa',
          fontWeight: 600,
          fontSize: '12px'
        }
      },
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '12px'
        }
      },
      axisBorder: {
        color: '#aaa'
      },
      axisTicks: {
        color: '#aaa'
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy HH:mm'
      }
    },
    markers: {
      size: 5,
      colors: ['#00bcd4'],
      strokeColors: '#fff',
      strokeWidth: 2
    }
  }

  return (
    <Card className='h-[300px] overflow-hidden'>
      <CardHeader>
        <h5 className='capitalize'>
          {stationName.split('_').join(' ').replace('station', 'Station')}
        </h5>
      </CardHeader>
      <CardBody className='overflow-hidden'>
        <ReactApexChart
          options={options}
          series={chartData}
          type='line'
          height={200}
        />
      </CardBody>
    </Card>
  )
}
