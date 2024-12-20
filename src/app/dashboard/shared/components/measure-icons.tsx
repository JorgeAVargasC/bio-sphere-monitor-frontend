import { GiBee } from 'react-icons/gi'
import { MdOutlineWaterDrop } from 'react-icons/md'
import {
  TbCalendarEvent,
  TbCloudRain,
  TbSun,
  TbTemperature
} from 'react-icons/tb'
import { MeasureVariable } from '../types'

export const icons: Record<MeasureVariable, React.ReactNode> = {
  temperature: <TbTemperature size={22} />,
  humidity: <MdOutlineWaterDrop size={22} />,
  beesPerMinute: <GiBee size={22} />,
  rain: <TbCloudRain size={22} />,
  sun: <TbSun size={22} />,
  date: <TbCalendarEvent size={22} />
}
