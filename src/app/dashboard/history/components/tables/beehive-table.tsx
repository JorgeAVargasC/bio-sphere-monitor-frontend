import {
  StationData,
  StationName
} from '@dashboard/beehives/components/cards/interfaces'
import { alertIcons } from '@dashboard/shared/components/alert-icons'
import { colors } from '@dashboard/shared/components/colors'
import { icons } from '@dashboard/shared/components/measure-icons'
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

export const BeehiveTable = ({ stationData, stationName }: Props) => {
  const firstRegister = stationData[0]
  const tempUnit = firstRegister.temperature.unit
  const humidityUnit = firstRegister.humidity.unit
  const beesPerMinuteUnit = firstRegister.beesPerMinute.unit

  return (
    <Card>
      <CardHeader>
        <div className='flex w-full justify-between items-center'>
          <h5 className='capitalize'>
            {stationName.split('_').join(' ').replace('station', 'colmena')}
          </h5>

          <Chip
            size='sm'
            color='primary'
          >
            {stationData.length} registros
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
              <div className='flex items-center gap-1'>
                {icons['temperature']}
                {`TEMPERATURA [${tempUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1'>
                {icons['humidity']}
                {`HUMEDAD [${humidityUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1'>
                {icons['beesPerMinute']}
                {`ABEJAS/MIN [${beesPerMinuteUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1'>
                {icons['rain']}
                LLUVIA
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1'>
                {icons['sun']}
                {`SOL [${humidityUnit}]`}
              </div>
            </TableColumn>
            <TableColumn>
              <div className='flex items-center gap-1'>
                {icons['date']}
                FECHA
              </div>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {stationData.map((data, index) => {
              const tempState = getAlerts('temperature', data.temperature.value)
              const humidityState = getAlerts('humidity', data.humidity.value)
              const beesPerMinuteState = getAlerts(
                'beesPerMinute',
                data.beesPerMinute.value
              )

              return (
                <TableRow key={index}>
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
                      <div className={colors[beesPerMinuteState]}>
                        {alertIcons[beesPerMinuteState]}
                      </div>
                      {data.beesPerMinute.value}
                    </div>
                  </TableCell>
                  <TableCell>
                    {
                      <Chip
                        size='sm'
                        color={data.rain.value ? 'success' : 'danger'}
                        className='text-white min-w-full text-center'
                      >
                        {data.rain.value ? 'SI' : 'NO'}
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
