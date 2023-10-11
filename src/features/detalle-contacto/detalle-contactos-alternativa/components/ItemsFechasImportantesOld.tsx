const BaseItem = () => {
  return (
    <div className='d-flex align-items-center mb-6'>
      <span
        data-kt-element='bullet'
        className='bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info'></span>

      <div className='flex-grow-1 me-5'>
        <div className='text-gray-800 fw-semibold fs-2'>
          10:20 - 11:00
          <span className='text-gray-400 fw-semibold fs-7'> AM </span>
        </div>

        <div className='text-gray-700 fw-semibold fs-6'>9 Degree Project Estimation Meeting</div>

        <div className='text-gray-400 fw-semibold fs-7'>
          Lead by
          <a href='#' className='text-primary opacity-75-hover fw-semibold'>
            Peter Marcus
          </a>
        </div>
      </div>

      <a
        href='#'
        className='btn btn-sm btn-light'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_project'>
        View
      </a>
    </div>
  )
}

export const ItemFchIcon: React.FC<{ relacion: string; evento: string; fecha: string }> = ({
  relacion,
  evento,
  fecha,
}) => {
  return (
    <div className='d-flex align-items-center mb-6 w-100 border border-info'>
      <span
        data-kt-element='bullet'
        className='bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info'></span>

      <div className='flex-grow-1 me-5'>
        <div className='text-gray-800 fw-semibold fs-2'>{evento}</div>

        <div className='text-gray-700 fw-semibold fs-6'>Relación: {relacion}</div>

        <div className='text-gray-400 fw-semibold fs-7'>
          <a href='#' className='text-primary opacity-75-hover fw-semibold'>
            {fecha}
          </a>
        </div>
      </div>

      <div>
        <i className={`fa-solid fa-cake-candles fs-2x text-ui-slate`}></i>
      </div>
    </div>
  )
}

export const ItemDate: React.FC<{ relacion: string; evento: string; fecha: string }> = ({
  relacion,
  evento,
  fecha,
}) => {
  return (
    <div className='d-flex flex-stack mb-6 w-100 border'>
      <div className='d-flex align-items-center me-3 pe-6'>
        <span
          data-kt-element='bullet'
          className='bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info'></span>

        <div className='flex-grow-1 me-5'>
          <div className='text-gray-800 fw-semibold fs-2'>
            {evento}
            <i className={`ms-2 fa-solid fa-cake-candles fs-7 text-gray-400`}></i>
          </div>

          <div className='text-gray-700 fw-semibold fs-6'>Relación: {evento}</div>
        </div>
      </div>

      <div className='d-flex align-items-center w-100 mw-125px fs-4'>
        <a href='#' className='text-primary opacity-75-hover fw-bold'>
          {fecha}
          <i className={`ms-2 fa-solid fa-calendar fs-2 text-ui-slate`}></i>
        </a>
      </div>
    </div>
  )
}

export const ItemFch: React.FC<{ relacion: string; evento: string; fecha: string }> = ({
  relacion,
  evento,
  fecha,
}) => {
  return (
    <div className='d-flex align-items-center mb-6'>
      <span
        data-kt-element='bullet'
        className='bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info'></span>

      <div className='flex-grow-1 me-5'>
        <div className='text-gray-800 fw-semibold fs-2'>
          {evento}
          {/* <span className='text-gray-400 fw-semibold fs-7'> AM </span> */}
          <i className={`ms-2 fa-solid fa-cake-candles fs-7 text-gray-400`}></i>
        </div>

        <div className='text-gray-700 fw-semibold fs-6'>Relación: {relacion}</div>

        <div className='text-gray-400 fw-semibold fs-7'>
          <a href='#' className='text-primary opacity-75-hover fw-semibold'>
            {fecha}
          </a>
        </div>
      </div>
    </div>
  )
}

export const ItemFecha: React.FC<{ relacion: string; evento: string; fecha: string }> = ({
  relacion,
  evento,
  fecha,
}) => {
  return (
    <div className='d-flex flex-stack position-relative my-4'>
      <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
      <div className='fw-bolder ms-5 text-gray-600'>
        <div className='fs-5'>Relación: {relacion}</div>
        {/* <span className='fs-7 text-gray-400 text-uppercase'>{relacion}</span> */}
        <div className='fs-5 fw-bolder text-gray-800 text-hover-primary'>{evento}</div>
        <div className='text-gray-400'>
          <span className='text-primary'>{fecha}</span>
        </div>
      </div>
    </div>
  )
}
