/* TODO AMF [29/09/2023]: Hacer dinámico  subsección de actividades de un contacto colaborador*/
import {
  Correo,
  Cuenta,
  DireccionConsulta,
  RolColaborador,
  RolProveedor,
  RolUsuarioSistema,
  Telefono,
} from '../../../types/Contacto'
import { Colapsable } from './Colapsable'
import { DetalleTipoColaborador } from './DetalleTipoColaborador'
import { DetalleTipoProveedor } from './DetalleTipoProveedor'
import { DetalleTipoUsuarioSistema } from './DetalleTipoUsuarioSistema'
import { Separador } from './Separador'
import { TabsDatosEspecificos } from './TabsDatosEspecificos'

export const SeccionDatosEspecificos: React.FC<Props> = ({
  rolColaborador,
  rolProveedor,
  rolUsuarioSistema,
  datosEspecificos,
}) => {
  return (
    <div className='card card-bordered min-h-800px'>
      <div className='card-body'>
        <div className='d-flex flex-column flex-grow-1 mt-2'>
          <Colapsable titulo='Colaborador'>
            <DetalleTipoColaborador rolColaborador={rolColaborador}></DetalleTipoColaborador>
          </Colapsable>
        </div>
        <div className='d-flex flex-column flex-grow-1 mt-2'>
          <Colapsable titulo='Proveedor'>
            <DetalleTipoProveedor rolProveedor={rolProveedor} />
          </Colapsable>
        </div>
        <div className='d-flex flex-column flex-grow-1 mt-2'>
          <Colapsable titulo='Usuario de sistema'>
            <DetalleTipoUsuarioSistema rolUsuarioSistema={rolUsuarioSistema} />
          </Colapsable>
        </div>
        <div className='mt-2'>
          <div className='mt-4'>
            <Separador titulo='Datos específicos' icono='fa-address-book' />
          </div>
          <TabsDatosEspecificos
            direcciones={datosEspecificos.direcciones}
            correos={datosEspecificos.correos}
            telefonos={datosEspecificos.telefonos}
            cuentas={datosEspecificos.cuentas}
          />
        </div>
      </div>
    </div>
  )
}

interface Props {
  rolColaborador: RolColaborador
  rolProveedor: RolProveedor
  rolUsuarioSistema: RolUsuarioSistema
  datosEspecificos: {
    direcciones: DireccionConsulta[]
    correos: Correo[]
    telefonos: Telefono[]
    cuentas: Cuenta[]
  }
}
