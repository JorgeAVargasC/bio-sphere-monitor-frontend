import {
  MAX_BEES_PER_MINUTE,
  MAX_HUMIDITY,
  MAX_TEMPERATURE,
  MIN_BEES_PER_MINUTE,
  MIN_HUMIDITY,
  MIN_TEMPERATURE
} from '../constants'
import { MeasureState, MeasureVariable } from '../types'

export const getAlerts = (
  measure: MeasureVariable,
  value: number
): MeasureState => {
  if (measure === 'temperature') {
    if (value < MIN_TEMPERATURE) return 'WARNING'
    if (value < MAX_TEMPERATURE) return 'OK'
    return 'DANGER'
  }

  if (measure === 'humidity') {
    if (value < MIN_HUMIDITY) return 'WARNING'
    if (value < MAX_HUMIDITY) return 'OK'
    return 'DANGER'
  }

  if (measure === 'beesPerMinute') {
    if (value < MIN_BEES_PER_MINUTE) return 'WARNING'
    if (value < MAX_BEES_PER_MINUTE) return 'OK'
    return 'DANGER'
  }

  return 'DANGER'
}
