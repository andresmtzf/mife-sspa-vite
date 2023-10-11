import { Button, Icon } from 'ui-react-components-ui'
import { BodyPagina, HeaderPagina } from '../../components/PaginaContainers'
import { personaFisica } from '../../types/ContactosDummy'
import { SeccionDatosEspecificos, SeccionDatosGenerales } from './components'

export const PaginaDetalleContacto = () => {
  return (
    <>
      <HeaderPagina titulo='Detalle de contacto'>
        <Button variant='ui-slate' className='me-3'>
          <Icon icon={'fa-pen-to-square'} className='me-2' />
          Editar
        </Button>
        <Button variant='light-ui-slate'>
          <Icon icon={'fa-xmark'} className='me-2' />
          Regresar
        </Button>
      </HeaderPagina>
      <BodyPagina>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-4'>
              <SeccionDatosGenerales
                contacto={personaFisica.datosGenerales}
                fechasImportantes={personaFisica.fechasImportantes}
                contactosVinculados={personaFisica.contactosVinculados}
              />
            </div>
            <div className='col-xl-8'>
              <SeccionDatosEspecificos
                rolColaborador={personaFisica.colaborador}
                rolProveedor={personaFisica.proveedor}
                rolUsuarioSistema={personaFisica.usuarioSistema}
                datosEspecificos={personaFisica.datosEspecificos}
              />
            </div>
          </div>
        </div>
      </BodyPagina>
    </>
  )
}
