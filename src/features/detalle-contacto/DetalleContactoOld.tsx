import { DatosBasicosContactos } from './detalle-contactos-alternativa/components/DatosBasicosContacto'

export const DetalleContactoOld = () => {
  return (
    <>
      <div className='m-0 p-0'>
        <div className='card flex-row-fluid m-6 border border-success'>
          <div className='card-body border border-primary'>
            <DatosBasicosContactos></DatosBasicosContactos>
          </div>
        </div>
      </div>
    </>
  )
}
