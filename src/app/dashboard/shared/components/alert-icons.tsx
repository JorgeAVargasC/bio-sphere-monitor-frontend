import { TbAlertTriangleFilled } from 'react-icons/tb'
import { MeasureState } from '../types'
import { FaCheckCircle } from 'react-icons/fa'

export const alertIcons: Record<MeasureState, React.ReactNode> = {
  WARNING: <TbAlertTriangleFilled size={18} />,
  OK: <FaCheckCircle size={18} />,
  DANGER: <TbAlertTriangleFilled size={18} />
}
