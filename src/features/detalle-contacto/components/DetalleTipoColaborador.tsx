import { RolColaborador } from '../../../types'
import { EtiquetaDescripcion } from './EtiquetaDescripcion'
import { Separador } from './Separador'

export const DetalleTipoColaborador: React.FC<Props> = ({ rolColaborador }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6 mb-2'>
          <Separador titulo='Identificación' icono='fa-id-card-clip' sm />
          <EtiquetaDescripcion
            titulo='ID empleado:'
            descripcion={rolColaborador.identificacion.idEmpleado}
          />
          <EtiquetaDescripcion
            titulo='ID empleado nominax:'
            descripcion={rolColaborador.identificacion.idEmpleadoNomina}
          />
          <EtiquetaDescripcion
            titulo='Tipo colaborador:'
            descripcion={rolColaborador.identificacion.tipoColaborador}
          />
          <EtiquetaDescripcion
            titulo='Modalidad:'
            descripcion={rolColaborador.identificacion.modalidad}
          />
        </div>
        <div className='col-xl-6'>
          <Separador titulo='Filial' icono='fa-building' sm />
          <EtiquetaDescripcion titulo='Filial:' descripcion={rolColaborador.filial.filial} />
          <EtiquetaDescripcion titulo='Dirección:' descripcion={rolColaborador.filial.direccion} />
          <EtiquetaDescripcion titulo='Puesto:' descripcion={rolColaborador.filial.puesto} />
        </div>
        <div className='col-xl-6 mb-2'>
          <Separador titulo='Contrato' icono='fa-file-contract' sm />
          <EtiquetaDescripcion
            titulo='Fecha de inicio:'
            descripcion={rolColaborador.contrato.fechaInicio}
          />
          <EtiquetaDescripcion
            titulo='Fecha de fin:'
            descripcion={rolColaborador.contrato.fechaFin}
          />
          <EtiquetaDescripcion titulo='Testigos:' descripcion={rolColaborador.contrato.testigos} />
          <EtiquetaDescripcion titulo='Descarga:' descripcion='' />
        </div>
        <div className='col-xl-6'>
          <Separador titulo='Seguro' icono='fa-hospital-user' sm />
          <EtiquetaDescripcion titulo='Seguro:' descripcion={rolColaborador.seguro.seguro} />
        </div>
        <div className='col-xl-6'>
          <Separador titulo='Actividades' icono='fa-list-check' sm />
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Coordinador
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Gerente de cuenta
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Autorizadore de operaciones
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Autorizador de finanzas:{' '}
            <span className='ms-1 text-gray-800'>$50,000.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  rolColaborador: RolColaborador
}
