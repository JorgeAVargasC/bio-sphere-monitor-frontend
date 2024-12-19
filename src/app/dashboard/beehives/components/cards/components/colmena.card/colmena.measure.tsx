import { FaCheckCircle } from 'react-icons/fa'
import { GiBee } from 'react-icons/gi'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { TbAlertTriangleFilled, TbTemperature } from 'react-icons/tb'

type Props = {
  name: string
  value: number
  state: 'WARNING' | 'OK' | 'DANGER'
  unit: string
  measure: 'temperature' | 'humidity' | 'beesPerMinute'
}

export const ColmenaMeasure: React.FC<Props> = ({
  name,
  value,
  state,
  unit,
  measure
}) => {
  const alertIcons: Record<Props['state'], React.ReactNode> = {
    WARNING: <TbAlertTriangleFilled size={18} />,
    OK: <FaCheckCircle size={18} />,
    DANGER: <TbAlertTriangleFilled size={18} />
  }

  const measureIcons: Record<Props['measure'], React.ReactNode> = {
    temperature: <TbTemperature size={22} />,
    humidity: <MdOutlineWaterDrop size={22} />,
    beesPerMinute: <GiBee size={22} />
  }

  const colors: Record<Props['state'], string> = {
    WARNING: 'text-warning',
    OK: 'text-success',
    DANGER: 'text-danger'
  }

  return (
    <div className='p-2 grid border border-foreground-100 bg-foreground-50 bg-opacity-50 rounded-md backdrop-blur-sm'>
      <div className='flex items-center gap-2'>
        <div className={colors[state]}>{alertIcons[state]}</div>
        <h6>{name}</h6>
      </div>
      <div className='flex items-center'>
        {measureIcons[measure]}
        <p className='ml-1'>
          {value} {unit}
        </p>
      </div>
    </div>
  )
}
