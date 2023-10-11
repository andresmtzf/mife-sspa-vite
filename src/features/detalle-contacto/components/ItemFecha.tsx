export const ItemFecha: React.FC<Props> = ({ relacion, evento, fecha }) => {
  return (
    <div className='d-flex align-items-center'>
      <span
        data-kt-element='bullet'
        className='bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-ui-turquoise'></span>

      <div className='flex-grow-1 me-5'>
        <div className='text-gray-800 fw-semibold fs-3'>
          {evento}
          <i className={`ms-2 fa-solid fa-cake-candles fs-7 text-gray-400`}></i>
        </div>

        <div className='text-gray-600 fs-6'>
          Relación: <span className='text-gray-800'>{relacion}</span>
        </div>

        <div className='text-gray-400 fs-7'>
          <div className='text-primary opacity-75-hover'>{fecha}</div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  relacion: string
  evento: string
  fecha: string
}
