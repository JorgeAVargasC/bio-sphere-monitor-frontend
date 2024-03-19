import {
  //  IFormFields,
  IFormValues
} from '../models'
import { UseFormReturn } from 'react-hook-form'
// import { useEffect, useState } from 'react'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const usePredioFormFields = ({ methods }: Props) => {
  // const [municipios, setMunicipios] = useState<{ value: string; label: string }[]>([])

  // const fetchData = async () => {
  //   getMunicipiosService()
  //     .then((response) => {
  //       setMunicipios(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const form: IFormFields = {
  //   search: {
  //     name: 'search',
  //     label: 'Búsqueda'
  //   },
  //   municipio: {
  //     name: 'municipio',
  //     label: 'Municipio',
  //     placeholder: 'Seleccione una opción',
  //     options: municipios.map((municipio: IGetMunicipiosRes) => ({
  //       value: municipio.value,
  //       label: municipio.label
  //     }))
  //   }
  // }

  return {}
}
