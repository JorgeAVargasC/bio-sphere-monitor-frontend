import { MdOutlineWaterDrop } from 'react-icons/md'
import {
  TbCalendarEvent,
  TbCloudRain,
  TbSun,
  TbTemperature
} from 'react-icons/tb'
import { MeasureVariables } from '../types/measure-variables.type'
import { IoEarth } from 'react-icons/io5'

export const stationIcons: Record<MeasureVariables, React.ReactNode> = {
  temperature: <TbTemperature size={22} />,
  humidity: <MdOutlineWaterDrop size={22} />,
  airQuality: <IoEarth size={22} />,
  rain: <TbCloudRain size={22} />,
  sun: <TbSun size={22} />,
  createdAt: <TbCalendarEvent size={22} />
}
