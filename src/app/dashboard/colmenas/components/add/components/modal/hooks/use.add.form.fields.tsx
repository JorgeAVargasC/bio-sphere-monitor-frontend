import { IFormFields, IFormValues } from '../models'
import { UseFormReturn } from 'react-hook-form'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const useAddFormFields = ({ methods }: Props) => {
  const form: IFormFields = {
    zona: {
      name: 'zona',
      label: 'Zona'
    },
    barrio: {
      name: 'barrio',
      label: 'Barrio'
    },
    comuna: {
      name: 'comuna',
      label: 'Comuna'
    },
    manzana: {
      name: 'manzana',
      label: 'Manzana'
    },
    sector: {
      name: 'sector',
      label: 'Sector'
    },
    terreno: {
      name: 'terreno',
      label: 'Terreno'
    },

    predio: {
      name: 'predio',
      label: 'Predio',
      placeholder: 'Seleccione una opción',
      options: [
        {
          value: '1',
          label: 'Predio 1'
        },
        {
          value: '2',
          label: 'Predio 2'
        }
      ]
    },
    torre: {
      name: 'torre',
      label: 'Torre'
    },
    piso: {
      name: 'piso',
      label: 'Piso'
    },
    unidad: {
      name: 'unidad',
      label: 'Unidad'
    }
  }

  return { form }
}
