import { alertIcons } from '@dashboard/shared/components/alert-icons'
import { colors } from '@dashboard/shared/components/colors'
import { icons } from '@dashboard/shared/components/measure-icons'
import { MeasureState, MeasureVariable } from '@dashboard/shared/types'

type Props = {
  name: string
  value: number
  state: MeasureState
  unit: string
  measure: MeasureVariable
}

export const ColmenaMeasure: React.FC<Props> = ({
  name,
  value,
  state,
  unit,
  measure
}) => {
  return (
    <div className='p-2 grid border border-foreground-100 bg-foreground-50 bg-opacity-50 rounded-md backdrop-blur-sm'>
      <div className='flex items-center gap-2'>
        <div className={colors[state]}>{alertIcons[state]}</div>
        <h6>{name}</h6>
      </div>
      <div className='flex items-center'>
        {icons[measure]}
        <p className='ml-1'>
          {value} {unit}
        </p>
      </div>
    </div>
  )
}
