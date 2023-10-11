///* TODO AMF [11/09/2023]: Considerar agregar botón tipo icono a librería  */
///* TODO AMF [11/09/2023]: Tomar en cuenta botones para redes sociales, alternativas de tamaños  */
///* TODO AMF [18/09/2023]: Completar */

import { Button, Icon } from 'ui-react-components-ui'
import { Symbol } from '../../../../components/Symbol'
import { obtenerIniciales } from '../../../../utils/StringUtils'
import { CardTabs } from './CardCarrusel'
import { CardContenido, CardContenidoContactos } from './CardContenido'

export const DatosBasicosContactos = () => {
  const customStyles = {
    '--bs-btn-padding-y': '.25rem',
    '--bs-btn-padding-x': '.5rem',
    '--bs-btn-font-size': '.75rem',
  }
  const borde = 'border border-gray-500 border-active active'

  return (
    <>
      <div className='card card-flush border border-info'>
        <div className='card-header'>
          <div className='card-title'>
            <h1 className='text-dark fw-bold my-0 fs-2'>Detalle de contacto</h1>
          </div>
          <div className='card-toolbar'>
            <Button variant='icon' className='btn-sm justify-content-end'>
              <Icon icon={'fa-pen-to-square'}></Icon>
            </Button>
            <Button variant='icon' className='btn-sm justify-content-end'>
              <Icon icon={'fa-xmark'}></Icon>
            </Button>
          </div>
        </div>
        <div className='card-body py-5 px-20'>
          {/** Ejemplo limpio Moral */}
          <div className='card mb-xl-10 card-bordered'>
            <div className='card-body pt-9 pb-9'>
              {/** Contenido */}
              <div className='d-flex flex-wrap flex-sm-nowrap p-1'>
                {/** Symbol */}
                <div className='me-7 p-1'>
                  <Symbol
                    tamanio='100px'
                    backgroundColor='ui-slate'
                    className='symbol-lg-125px symbol-fixed position-relative'>
                    {obtenerIniciales('Hábil')}
                  </Symbol>
                </div>
                {/** -Symbol */}

                {/** Info contacto */}
                <div className='flex-grow-1 p-1'>
                  {/** NombreContacto y roles */}
                  <div className='d-flex justify-content-between align-items-start flex-wrap p-1'>
                    <div className='d-flex flex-column p-1'>
                      <div className='d-flex align-items-center p-1'>
                        <div className='text-gray-900 text-hover-primary fs-2 fw-bold me-1 ls-1'>
                          Hábil{' '}
                          <div>
                            <span className='badge badge-primary rounded-pill'>Secondary</span>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex'>
                        <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                          Roles:
                        </div>
                        <div className='d-flex flex-wrap'>
                          <span className='badge badge-light-ui-slate mb-1 mx-1'>Cliente</span>
                          <span className='badge badge-light-ui-slate text-wrap mb-1 mx-1'>
                            Empresa Administrada
                          </span>
                          <span className='badge badge-light-ui-slate mb-1 mx-1'>Proveedor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/** -NombreContacto y roles */}
                  {/** Datos adicionales del contacto */}
                  <div className='d-flex flex-wrap flex-stack p-1'>
                    <div className='d-flex flex-column flex-grow-1'>
                      <div className='d-flex flex-wrap'>
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-cake-candles fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>
                              Aniversario
                            </div>
                          </div>
                          <div className='fw-bold fs-7 text-gray-500'>XX/XX/XXXX</div>
                        </div>
                        {/** -Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 me-3 mb-3'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-id-card fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>RFC</div>
                          </div>
                          <div className='fw-bold fs-7 text-gray-500'>XAXX010101000</div>
                        </div>
                        {/** -Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 me-3 mb-3'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-trademark fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>Acrónimo</div>
                          </div>
                          <div className='fw-bold fs-7 text-gray-500'>
                            {obtenerIniciales('habil')}
                          </div>
                        </div>
                        {/** Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 me-3 mb-3'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-user-group fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>Cliente</div>
                          </div>
                          {/* <div className='fw-bold fs-7 text-gray-500'>Cliente</div> */}
                        </div>
                        {/** Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 me-3 mb-3'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-building fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>
                              Empresa administrada
                            </div>
                          </div>
                          {/*  <div className='fw-bold fs-7 text-gray-500'>
                            {obtenerIniciales('habil')}
                          </div> */}
                        </div>
                        {/** Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-user-tie fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>
                              Repre. Legal
                            </div>
                          </div>
                          <div className='fw-bold fs-7 text-gray-500'>Sergio Perez</div>
                        </div>
                        {/** -Contenedor de info */}
                        {/** Contenedor de info */}
                        <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
                          <div className='d-flex flex-column align-items-start'>
                            <div>
                              <i className='fa-solid fa-cake-candles fs-3 text-ui-slate'></i>
                            </div>
                            <div className='d-flex align-items-center fs-6 fw-bolder'>
                              Apode. legal
                            </div>
                          </div>
                          <div className='fw-bold fs-7 text-gray-500'>Sergio Perez</div>
                        </div>
                        {/** -Contenedor de info */}
                      </div>
                      {/** Iconos redes sociales */}
                      <div className='d-flex flex-wrap'>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-facebook mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-facebook-f fs-4'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-google mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-google fs-4'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-twitter mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-twitter fs-4'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-instagram mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-instagram fs-4'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-youtube mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-youtube fs-4'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-sm btn-light-linkedin mb-2 me-5 '
                          style={{ width: '30px', height: '30px' }}>
                          <i className='fab fa-linkedin fs-4'></i>
                        </a>
                      </div>
                      {/** -Iconos redes sociales */}
                    </div>
                  </div>
                  {/** -Datos adicionales del contacto */}
                </div>
                {/** -Info contacto */}
              </div>
              {/** -Contenido */}
            </div>
          </div>
          {/** -Ejemplo limpio Moral */}
          <div className='row gy-5 g-xl-10 mb-2'>
            <div className='col-xl-4'>
              <CardContenido
                titulo={'Fechas importantes'}
                descripcion={'Fechas relevantes para el contacto'}></CardContenido>
            </div>
            <div className='col-xl-4'>
              <CardContenidoContactos
                titulo={'Conactos vinculados'}
                descripcion={'Contactos relacionados'}></CardContenidoContactos>
            </div>
            <div className='col-xl-4'>
              {/* <CardContenido></CardContenido> */}
              <CardTabs></CardTabs>
            </div>
          </div>
          {/* <CardCarrusel></CardCarrusel> */}
          {/* <div className='row gy-5 g-xl-10'>
            <div className='col-xl-4'>
              <CardContenido></CardContenido>
            </div>
            <div className='col-xl-8'>
              <CardContenido></CardContenido>
            </div>
          </div> */}
          {/* <CardCarrusel></CardCarrusel>
          <CardCarruselAlt></CardCarruselAlt>
          <CardTabs></CardTabs> */}
        </div>
      </div>
    </>
  )
}

const DatoContacto = ({ tipoDato, dato }) => {
  return (
    <div className='fs-5 text-gray-800 text-hover-primary fw-bolder my-1'>
      {tipoDato}: <span className='fs-5 text-gray-700 text-hover-primary fw-bolder'>{dato}</span>
    </div>
  )
}
