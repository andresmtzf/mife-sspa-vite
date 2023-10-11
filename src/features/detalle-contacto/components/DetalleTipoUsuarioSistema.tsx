import { RolUsuarioSistema } from '../../../types'
import { EtiquetaDescripcion } from './EtiquetaDescripcion'

export const DetalleTipoUsuarioSistema: React.FC<Props> = ({ rolUsuarioSistema }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6'>
          <EtiquetaDescripcion
            titulo='Usuario de sistema:'
            descripcion={rolUsuarioSistema ? ' Si' : 'No'}
          />
          <EtiquetaDescripcion titulo='Usuario:' descripcion={rolUsuarioSistema.usuario} />
        </div>
      </div>
    </div>
  )
}

interface Props {
  rolUsuarioSistema: RolUsuarioSistema
}
