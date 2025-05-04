export interface IFirebaseData {
  station: Station
  lastRecords: Record<StationName, StationData>
}

export type Station = Record<StationName, StationData[]>

export type StationName =
  | 'station_1'
  | 'station_2'
  | 'station_3'
  | 'station_4'
  | 'station_5'

export interface StationData {
  airQuality: Data
  createdAt: number
  humidity: Data
  rain: { value: number }
  sun: { value: number }
  temperature: Data
}

export interface Data {
  unit: string
  value: number
}
