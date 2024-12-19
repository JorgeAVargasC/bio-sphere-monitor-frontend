import {
  StationData,
  StationName
} from '@dashboard/beehives/components/cards/interfaces'
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

  const firstRegister = stationData[0]
  const tempUnit = firstRegister.temperature.unit
  const humidityUnit = firstRegister.humidity.unit
  const beesPerMinuteUnit = firstRegister.beesPerMinute.unit

  return (
    <Card>
      <CardHeader>
        <h5 className='capitalize'>
          {stationName.split('_').join(' ').replace('station', 'colmena')}
        </h5>
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
            <TableColumn>{`TEMPERATURA [${tempUnit}]`}</TableColumn>
            <TableColumn>{`HUMEDAD [${humidityUnit}]`}</TableColumn>
            <TableColumn>{`ABEJAS/MIN [${beesPerMinuteUnit}]`}</TableColumn>
            <TableColumn>LLUVIA</TableColumn>
            <TableColumn>{`SOL ${humidityUnit}`}</TableColumn>
            <TableColumn>FECHA</TableColumn>
          </TableHeader>
          <TableBody>
            {stationData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.temperature.value}</TableCell>
                <TableCell>{data.humidity.value}</TableCell>
                <TableCell>{data.beesPerMinute.value}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}
