import { useForm } from 'react-hook-form'
import { Elemento } from '../../../models/filtros.type'

export type BusquedaContactosForm = {
  tipoContacto?: Elemento[]
  personaMoral?: Elemento[]
  nombre?: string
  primerApellido?: string
  segundoApellido?: string
  tags?: Elemento[]
}

export const useBusquedaContactosForm = () => {
  return useForm<BusquedaContactosForm>({
    mode: 'all',
  })
}

export const filtrosBusqueda = {
  tipoContacto: { etiqueta: 'Tipo de contacto', tipo: 'multiSelect' },
  personaMoral: { etiqueta: 'Persona moral', tipo: 'multiSelect' },
  nombre: { etiqueta: 'Nombre', tipo: 'text' },
  primerApellido: { etiqueta: 'Primer apellido', tipo: 'text' },
  segundoApellido: { etiqueta: 'Segundo apellido', tipo: 'text' },
  tags: { etiqueta: 'Tags', tipo: 'multiSelect' },
}
