/* TODO AMF [02/10/2023]: Verificar generacion de badges, arreglos de string */

export interface ContactoPersonaFisica {
  datosGenerales: DtosGeneralesFisica
  fechasImportantes: FechasImportantes[]
  contactosVinculados: ContactoVinculado[]
  colaborador: RolColaborador
  proveedor: RolProveedor
  usuarioSistema: RolUsuarioSistema
  datosEspecificos: {
    direcciones: DireccionConsulta[]
    correos: Correo[]
    telefonos: Telefono[]
    cuentas: Cuenta[]
  }
}

export interface DtosGeneralesFisica {
  tratamiento: string
  nombre: string
  primerApellido: string
  segundoApellido: string
  fechaNacimiento: string
  rfc: string
  acronimo: string
  tags: string[]
  roles: string[]
}

export interface FechasImportantes {
  relacion: string
  evento: string
  fecha: string
}

export interface ContactoVinculado {
  contacto: string
  puesto: string
}

export interface RolColaborador {
  identificacion: {
    idEmpleado: string
    idEmpleadoNomina: string
    tipoColaborador: string
    modalidad: string
  }
  filial: {
    filial: string
    direccion: string
    puesto: string
  }
  coordinador: boolean
  gerenteDeCuenta: boolean
  seguro: {
    tieneSeguro: boolean
    seguro: string
  }
  contrato: {
    tieneContrato: boolean
    fechaInicio: string
    fechaFin: string
    firma: string
    testigos: string[]
    url?: string
  }
}

export interface RolProveedor {
  proveedor: boolean
  tipoProveedor: string
  factura: boolean
  numeroCliente: string
}

export interface RolUsuarioSistema {
  usuarioSistema: boolean
  usuario: string
}

export interface Direccion {
  esDireccionPrincipal: boolean
  esDireccionFiscal: boolean
  tipoDeDireccion: string
  codigop: string
  calle: string
  numeroint: string
  numeroext: string
  colonia: string
  municipio: string
  estado: string
  pais: string
}

export interface DireccionConsulta {
  direccion: string
  tipoDireccion: string[]
}

export interface Correo {
  esCorreoPrincipal: boolean
  tipoDeCorreo: string
  correo: string
}

export interface Telefono {
  esTelefonoPrincipal: boolean
  tipoDeTelefono: string
  codigo: string
  numero: string
  extension?: string
}

export interface Cuenta {
  esCuentaPrincipal: boolean
  tipoDeCuenta: string
  tipoDeMoneda: string
  cuentaDeEfectivo?: string
  clabeInterbancaria?: string
  Banco?: string
  nombreTitular?: string
  numeroDeCuenta?: string
  numeroDeTarjeta?: string
  creditoDisponible?: string
  tipoDeCredito?: string
  aliasDeCuenta?: string
}
