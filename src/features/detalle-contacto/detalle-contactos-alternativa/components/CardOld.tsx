import { Symbol } from '../../../../components/Symbol'
import { obtenerIniciales } from '../../../../utils/StringUtils'

export const Card = () => {
  return (
    <>
      <div className='card card-flush border border-info'>
        <div className='card-body'>
          {/** Ejemplo limpio Moral */}
          <div className='card card-px-0 mb-xl-10 card-bordered'>
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
                <div className='flex-grow-1 p-1 border border-primary'>
                  {/** NombreContacto y roles */}
                  <div className='d-flex justify-content-between align-items-start flex-wrap p-1'>
                    <div className='d-flex flex-column p-1 border border-info'>
                      <div className='d-flex align-items-center'>
                        <div className='text-gray-900 text-hover-primary fs-2 fw-bold'>Hábil </div>
                      </div>
                      <div className='d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2 fw-bold'>
                        <CardRoles info='XX/XX/XXXX' icon='fa-cake-candles'></CardRoles>
                        <CardRoles info='XAXX010101000' icon='fa-id-card'></CardRoles>
                        <CardRoles info='HB' icon='fa-trademark'></CardRoles>
                      </div>
                      <div className='d-flex border border-success p-0'>
                        {/* <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>Tags:</div> */}
                        <div className='d-flex flex-wrap'>
                          <Badge titulo='Cliente'></Badge>
                          <Badge titulo='2022'></Badge>
                          <Badge titulo='GEH'></Badge>
                          <Badge titulo='HB'></Badge>
                          <Badge titulo='I2D'></Badge>
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
            <div className='col-xl-4'></div>
            <div className='col-xl-4'></div>
            <div className='col-xl-4'></div>
          </div>
        </div>
      </div>
    </>
  )
}

const Datos = () => {
  return (
    <>
      <div className='d-flex flex-column'>
        <div className='fs-5 text-dark text-hover-primary fw-bold'>Título</div>
        <div className='fs-6 fw-semibold text-gray-400'>Descripción</div>
      </div>
    </>
  )
}

export const CardRoles = ({ info, icon }) => {
  return (
    <div className='fs-6 fw-bold d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
      <i className={`fa-solid ${icon} fs-4 me-1`}></i> {info}
    </div>
  )
}

export const Badge = ({ titulo }) => {
  return <span className='badge badge-light-ui-slate badge-sm text-wrap mb-1 mx-1'>{titulo}</span>
}
