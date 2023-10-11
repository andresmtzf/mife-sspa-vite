import { Symbol } from '../../../components'
import { obtenerIniciales } from '../../../utils'

export const ItemContactoVinculado: React.FC<Props> = ({ contacto, puesto }) => {
  return (
    <>
      <div className='d-flex flex-stack'>
        <div className='d-flex align-items-center me-5'>
          <Symbol
            children={obtenerIniciales(contacto)}
            backgroundColor='ui-turquoise'
            isCircular></Symbol>
          <div className='mx-5'>
            <div className='text-gray-800 fw-bold text-hover-primary fs-6'>{contacto}</div>
            <div className='text-gray-600'>{puesto}</div>
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  contacto: string
  puesto: string
}
