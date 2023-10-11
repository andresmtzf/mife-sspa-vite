///* TODO AMF [19/09/2023]: Completar y limpiar, hacer dinámico */

import { ItemContacto } from './ItemContacto'

export const CardContenido = ({ titulo, descripcion }) => {
  return (
    <>
      <div className='card card-bordered card-flush h-xl-100'>
        {/** Card header */}
        <div className='card-header pt-7'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold text-dark'>{titulo}</span>
            <span className='text-gray-400 mt-1 fs-6'>{descripcion}</span>
          </h3>
        </div>
        {/** -Card header */}

        {/** Body card */}
        <div className='card-body'>
          <div className='hover-scroll-overlay-y pe-6 me-n6' style={{ height: '250px' }}>
            {/** Fechas Importantes */}
            <div className='d-flex flex-stack position-relative mt-8'>
              <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
              <div className='fw-bolder ms-5 text-gray-600'>
                <div className='fs-5'>Relación: Esposa</div>
                {/* <span className='fs-7 text-gray-400 text-uppercase'></span> */}
                <div className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>
                  Cumpleaños
                </div>
                <div className='text-gray-400'>
                  Fecha: <span className='text-primary'>15 / Sep / 1988</span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-stack position-relative mt-8'>
              <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
              <div className='fw-bolder ms-5 text-gray-600'>
                <div className='fs-5'>Relación: Esposa</div>
                {/* <span className='fs-7 text-gray-400 text-uppercase'></span> */}
                <div className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>
                  Cumpleaños
                </div>
                <div className='text-gray-400'>
                  Fecha: <span className='text-primary'>15 / Sep / 1988</span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-stack position-relative mt-8'>
              <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
              <div className='fw-bolder ms-5 text-gray-600'>
                <div className='fs-5'>Relación: Esposa</div>
                {/* <span className='fs-7 text-gray-400 text-uppercase'></span> */}
                <div className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>
                  Cumpleaños
                </div>
                <div className='text-gray-400'>
                  Fecha: <span className='text-primary'>15 / Sep / 1988</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const CardContenidoContactos = ({ titulo, descripcion }) => {
  return (
    <>
      <div className='card card-bordered card-flush h-xl-100'>
        {/** Card header */}
        <div className='card-header pt-7'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold text-dark'>{titulo}</span>
            <span className='text-gray-400 mt-1 fs-6'>{descripcion}</span>
          </h3>
        </div>
        {/** -Card header */}

        {/** Body card */}
        <div className='card-body'>
          <div className='hover-scroll-overlay-y pe-6 me-n6' style={{ height: '250px' }}>
            {/** Fechas Importantes */}
            <ItemContacto></ItemContacto>
            <div className='separator separator-dashed my-5'></div>
            <ItemContacto></ItemContacto>
            <div className='separator separator-dashed my-5'></div>
            <ItemContacto></ItemContacto>
            <div className='separator separator-dashed my-5'></div>
            <ItemContacto></ItemContacto>
            <div className='separator separator-dashed my-5'></div>
            <ItemContacto></ItemContacto>
            <div className='separator separator-dashed my-5'></div>
          </div>
        </div>
      </div>
    </>
  )
}
