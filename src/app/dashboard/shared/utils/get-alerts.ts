import {
  MAX_AIR_QUALITY,
  MAX_HUMIDITY,
  MAX_TEMPERATURE,
  MIN_AIR_QUALITY,
  MIN_HUMIDITY,
  MIN_TEMPERATURE
} from '../constants'
import { MeasureState } from '../types/measure-state.type'
import { MeasureVariables } from '../types/measure-variables.type'

export const getAlerts = (
  measure: MeasureVariables,
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

  if (measure === 'airQuality') {
    if (value < MIN_AIR_QUALITY) return 'WARNING'
    if (value < MAX_AIR_QUALITY) return 'OK'
    return 'DANGER'
  }

  return 'DANGER'
}
