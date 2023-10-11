import { RolProveedor } from '../../../types'
import { EtiquetaDescripcion } from './EtiquetaDescripcion'

export const DetalleTipoProveedor: React.FC<Props> = ({ rolProveedor }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6'>
          <EtiquetaDescripcion
            titulo='Tipo de proveedor:'
            descripcion={rolProveedor.tipoProveedor}
          />
          <EtiquetaDescripcion
            titulo='Factura:'
            descripcion={rolProveedor.factura ? ' Si' : ' No'}
          />
          <EtiquetaDescripcion
            titulo='Número de cliente:'
            descripcion={rolProveedor.numeroCliente}
          />
        </div>
      </div>
    </div>
  )
}

interface Props {
  rolProveedor: RolProveedor
}
