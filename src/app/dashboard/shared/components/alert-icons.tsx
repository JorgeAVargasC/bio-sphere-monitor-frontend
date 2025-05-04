import { TbAlertTriangleFilled } from 'react-icons/tb'
import { FaCheckCircle } from 'react-icons/fa'
import { MeasureState } from '../types/measure-state.type'

export const alertIcons: Record<MeasureState, React.ReactNode> = {
  WARNING: <TbAlertTriangleFilled size={18} />,
  OK: <FaCheckCircle size={18} />,
  DANGER: <TbAlertTriangleFilled size={18} />
}
