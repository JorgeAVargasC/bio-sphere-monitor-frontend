import { alertIcons } from '@dashboard/shared/components/alert-icons'
import { colors } from '@dashboard/shared/components/colors'
import { stationIcons } from '@dashboard/shared/components/station-icons'
import { stationLabels } from '@dashboard/shared/components/station-labels'
import {
  StationData,
  StationName
} from '@dashboard/shared/types/firebase-data.interface'
import { getAlerts, getDateFormatted } from '@dashboard/shared/utils'
import {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Table,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Chip
} from '@nextui-org/react'

type Props = {
  stationName: StationName
  stationData: StationData[]
}

export const StationsTable = ({ stationData, stationName }: Props) => {
  const firstRegister = stationData[0]
  const tempUnit = firstRegister.temperature.unit
  const humidityUnit = firstRegister.humidity.unit
  const airQualityUnit = firstRegister.airQuality.unit

  return (
    <Card>
      <CardHeader>
        <div className='flex w-full justify-between items-center'>
          <h5 className='capitalize'>{stationName.split('_').join(' ')}</h5>

          <Chip
            size='sm'
            color='primary'
          >
            {stationData.length} records
          </Chip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Table
          aria-label='Example static collection table'
          isStriped
          isCompact
          isHeaderSticky
          removeWrapper
          className='max-h-[320px] overflow-y-auto min-w-[800px]'
        >
          <TableHeader>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['temperature']}
                {`${stationLabels['temperature']} [${tempUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['humidity']}
                {`${stationLabels['humidity']} [${humidityUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['airQuality']}
                {`${stationLabels['airQuality']} [${airQualityUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['rain']}
                {`${stationLabels['rain']}`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['sun']}
                {`${stationLabels['sun']} [${humidityUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1 uppercase'>
                {stationIcons['createdAt']}
                {stationLabels['createdAt']}
              </div>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {stationData.map((data, index) => {
              const tempState = getAlerts('temperature', data.temperature.value)
              const humidityState = getAlerts('humidity', data.humidity.value)
              const airQualityState = getAlerts(
                'airQuality',
                data.airQuality.value
              )

              return (
                <TableRow key={data.createdAt}>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <div className={colors[tempState]}>
                        {alertIcons[tempState]}
                      </div>
                      {data.temperature.value}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <div className={colors[humidityState]}>
                        {alertIcons[humidityState]}
                      </div>
                      {data.humidity.value}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <div className={colors[airQualityState]}>
                        {alertIcons[airQualityState]}
                      </div>
                      {data.airQuality.value}
                    </div>
                  </TableCell>
                  <TableCell>
                    {
                      <Chip
                        size='sm'
                        color={data.rain.value ? 'success' : 'danger'}
                        className='text-white min-w-full text-center'
                      >
                        {data.rain.value ? 'YES' : 'NO'}
                      </Chip>
                    }
                  </TableCell>
                  <TableCell>{data.sun.value}</TableCell>
                  <TableCell>{getDateFormatted(data.createdAt)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}
