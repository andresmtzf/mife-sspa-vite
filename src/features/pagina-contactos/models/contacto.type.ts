import { Paginado } from '../../../models/paginado.type'
//TODO 18/09/23 akcm verificar nombre de atributos
export interface Contacto {
  id: string
  nombre: string ///NOMBRE COMPLETO
  direccion: string //'PR' (Principal), 'FS' (Fiscal), 'CS' (Casa), 'OF' (Oficina),
  correo: string
  telefono: Telefono
  tiposContacto: string[] //CORROBORAR EL NOMBRE
  estatus?: string
  tags?: string[]
  imagen?: any
  esArchivado: boolean
}

export interface Telefono {
  numero: string
  extension: string
  pais: string
  tipo: string //PR (Principal), CS (Casa), MV (móvil), DP(departamento)
}

export interface PaginadoContactos extends Paginado {
  contactos: Contacto[]
}
