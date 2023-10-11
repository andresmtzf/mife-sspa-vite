export const DatoGeneral: React.FC<{ titulo: string; dato: string }> = ({ titulo, dato }) => {
  return (
    <div className='d-flex fs-6 fw-semibold align-items-center'>
      <div className='text-gray-500 flex-grow-1 me-4'>{titulo}</div>
      <div className='fw-bolder text-gray-700 text-xxl-end'>{dato}</div>
    </div>
  )
}
/** Aun no se susa */
export const ContenedorDtos: React.FC<{ titulo: string; descripcion: string }> = ({
  titulo,
  descripcion,
}) => {
  return (
    <div className='flex-shrink-0 me-5'>
      <span className='text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1'>{titulo}</span>
      <span className='text-gray-800 fs-1 fw-bold'>{descripcion}</span>
    </div>
  )
}

export const TarjetaRol: React.FC<{ titulo: string; descripcion?: string; icono: string }> = ({
  titulo,
  descripcion,
  icono,
}) => {
  return (
    <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
      <div className='d-flex flex-column align-items-start'>
        <div>
          <i className={`fa-solid ${icono} fs-3 text-ui-slate`}></i>
        </div>
        <div className='d-flex align-items-center fs-6 fw-bolder'>{titulo}</div>
      </div>
      {descripcion ? <div className='fw-bold fs-7 text-gray-500'>{descripcion}</div> : null}
    </div>
  )
}

export const Separador: React.FC<{ titulo: string }> = ({ titulo }) => {
  return (
    <>
      <div className='text-gray-900 fs-6 fw-bold'>{titulo}</div>
      <div className='separator border-gray-400 mt-1 mb-3'></div>
    </>
  )
}

export const Divisior: React.FC<{ titulo: string }> = ({ titulo }) => {
  return (
    <>
      <div className='fw-bold fs-6 pb-1' style={{ boxShadow: 'inset 0 -1px #e3e8ee' }}>
        {titulo}
      </div>
    </>
  )
}
