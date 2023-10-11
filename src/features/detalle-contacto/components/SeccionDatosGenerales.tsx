import { Symbol } from '../../../components'
import { ContactoVinculado, DtosGeneralesFisica, FechasImportantes } from '../../../types'
import { obtenerIniciales } from '../../../utils'
import { BtnRedSocial } from './BtnRedSocial'
import { Colapsable } from './Colapsable'
import { DatoGeneral } from './DatoGeneral'
import { Separador } from './Separador'
import { SinRegistros } from './SinRegistros'
import { Tag } from './Tag'
import { MAPA_ROLES_ICONO, TarjetaRol } from './TarjetaRol'

export const SeccionDatosGenerales: React.FC<Props> = ({
  contacto,
  fechasImportantes,
  contactosVinculados,
}) => {
  return (
    <div className='card card-bordered mb-4 min-h-800px'>
      <div className='card-body py-9'>
        {/** Cabecera DetalleContacto */}
        <div className='d-flex flex-wrap flex-sm-nowrap'>
          {/** Symbol */}
          <div className='me-7 p-1'>
            <Symbol
              tamanio='100px'
              backgroundColor='ui-slate'
              className='symbol-lg-125px symbol-fixed position-relative'
              isCircular>
              {obtenerIniciales(contacto.nombre, contacto.primerApellido)}
            </Symbol>
          </div>
          {/** -Symbol */}
          <div className='flex-grow-1 p-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap p-1'>
              <div className='d-flex flex-column p-1 w-100'>
                <div className='d-flex align-items-center'>
                  <div className='text-gray-900 text-hover-primary fs-2 fw-bold'>{`${contacto.tratamiento} ${contacto.nombre} ${contacto.primerApellido} ${contacto.segundoApellido}`}</div>
                </div>
                <div className='d-flex flex-wrap fw-semibold fs-6 pe-2 fw-bold'>
                  <div className='d-flex flex-column content-justify-center w-100 mt-1'>
                    <DatoGeneral titulo='Cumpleaños' dato={contacto.fechaNacimiento} />
                    <DatoGeneral titulo='RFC' dato={contacto.rfc} />
                    <DatoGeneral titulo='Acrónimo' dato={contacto.acronimo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** -Cabecera DetalleContacto */}
        {/** Tags */}
        <div className='container px-0'>
          {contacto.tags.map((t) => (
            <Tag titulo={t} />
          ))}
        </div>
        {/** Tags */}
        {/** Redes Sociales */}
        <div className='mt-4'>
          <Separador titulo='Redes sociales' icono='fa-share-nodes' />
        </div>
        <div className='d-flex mt-4 flex-wrap justify-content-between container'>
          <BtnRedSocial href='#' redSocial='facebook' />
          <BtnRedSocial href='#' redSocial='instagram' />
          <BtnRedSocial href='#' redSocial='twitter' />
          <BtnRedSocial href='#' redSocial='google' />
          <BtnRedSocial href='#' redSocial='youtube' />
          <BtnRedSocial href='#' redSocial='linkedin' />
        </div>
        {/** -Redes Sociales */}
        {/** Roles del contacto */}
        <Colapsable titulo='Tipos de contacto'>
          <div className='d-flex flex-wrap flex-sm-nowrap mt-1'>
            <div className='d-flex flex-wrap container '>
              {contacto.roles.map((r) => (
                <TarjetaRol titulo={r} icono={MAPA_ROLES_ICONO.get(r)} />
              ))}
            </div>
          </div>
        </Colapsable>
        {/** -Roles del contacto */}
        {/** Fechas importantes */}
        <Colapsable titulo='Fechas importantes'>
          <div className='d-flex flex-wrap flex-sm-nowrap mt-1'>
            <div className='hover-scroll-overlay-y mh-425px container'>
              {/*               {fechasImportantes.map((f, index) => (
                <>
                  <ItemFecha relacion={f.relacion} evento={f.evento} fecha={f.fecha} />
                  {index !== fechasImportantes.length - 1 && (
                    <div className='separator separator-dashed my-4'></div>
                  )}
                </>
              ))} */}
              <SinRegistros titulo='No hay fechas registradas' />
            </div>
          </div>
        </Colapsable>
        {/** Contactos vinculados colapse*/}
        <Colapsable titulo='Contactos Vinculados'>
          <div className='d-flex flex-wrap flex-sm-nowrap mt-1 w-100'>
            <div className='hover-scroll-overlay-y mh-425px container'>
              {/* {contactosVinculados.map((c, index) => (
                <>
                  <ItemContactoVinculado contacto={c.contacto} puesto={c.puesto} />
                  {index !== contactosVinculados.length - 1 && (
                    <div className='separator separator-dashed my-4'></div>
                  )}
                </>
              ))} */}
              <SinRegistros titulo='No hay fechas contactos registrados' />
            </div>
          </div>
        </Colapsable>
        {/** -Contactos vinculdos*/}
      </div>
    </div>
  )
}
interface Props {
  contacto: DtosGeneralesFisica
  fechasImportantes: FechasImportantes[]
  contactosVinculados: ContactoVinculado[]
}
