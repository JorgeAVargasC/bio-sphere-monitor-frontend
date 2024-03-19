import { IGetColmenasRes } from './get.colmenas.res.model'

export const colmenasData: IGetColmenasRes = {
  meta: {
    totalPages: 5
  },
  results: [
    {
      id: '8945sd-asd8a7s-asdasd-asda79dasd',
      name: 'Colmena 1',
      temperature: {
        value: 30, // WARNING
        unit: '°C',
        state: 'WARNING'
      },
      humidity: {
        value: 70, // WARNING
        unit: '%',
        state: 'WARNING'
      },
      beesPerMinute: {
        value: 150, // WARNING
        unit: 'abejas/min',
        state: 'WARNING'
      }
    },
    {
      id: '8945sd-asd8a7s-asdasd-asda79ddfgd',
      name: 'Colmena 2',
      temperature: {
        value: 20, // OK
        unit: '°C',
        state: 'OK'
      },
      humidity: {
        value: 50, // DANGER
        unit: '%',
        state: 'DANGER'
      },
      beesPerMinute: {
        value: 100, // OK
        unit: 'abejas/min',
        state: 'OK'
      }
    },
    {
      id: '8945sd-asd8a7s-asdasd-asda09po',
      name: 'Colmena 3',
      temperature: {
        value: 10, // DANGER
        unit: '°C',
        state: 'DANGER'
      },
      humidity: {
        value: 60, // OK
        unit: '%',
        state: 'OK'
      },
      beesPerMinute: {
        value: 80, // DANGER
        unit: 'abejas/min',
        state: 'DANGER'
      }
    },
    {
      id: '8945sd-asd8a7s-asdasd-asda79dghj',
      name: 'Colmena 4',
      temperature: {
        value: 25, // OK
        unit: '°C',
        state: 'OK'
      },
      humidity: {
        value: 70, // WARNING
        unit: '%',
        state: 'WARNING'
      },
      beesPerMinute: {
        value: 120, // OK
        unit: 'abejas/min',
        state: 'OK'
      }
    },
    {
      id: '8945sd-asd8a7s-asdasd-asda79d345',
      name: 'Colmena 5',
      temperature: {
        value: 35, // WARNING
        unit: '°C',
        state: 'WARNING'
      },
      humidity: {
        value: 40, // DANGER
        unit: '%',
        state: 'DANGER'
      },
      beesPerMinute: {
        value: 170, // WARNING
        unit: 'abejas/min',
        state: 'WARNING'
      }
    }
  ]
}
