import { useForm } from 'react-hook-form'

export type useFormArchivoContacto = {
  idContacto: string
  esArchivado: boolean
}

export const useArchivoContactoForm = () => {
  return useForm<useFormArchivoContacto>({
    mode: 'all',
  })
}
