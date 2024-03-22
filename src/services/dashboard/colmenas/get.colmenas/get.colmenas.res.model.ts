export interface IGetColmenasRes {
  meta: {
    totalPages: number
  }
  results: {
    id: string
    name: string
    description: string
    temperature: {
      value: number
      unit: string
      state: IGetColmenaMeasureState
    }
    humidity: {
      value: number
      unit: string
      state: IGetColmenaMeasureState
    }
    beesPerMinute: {
      value: number
      unit: string
      state: IGetColmenaMeasureState
    }
  }[]
}

export type IGetColmenaMeasureState = 'OK' | 'WARNING' | 'DANGER'
