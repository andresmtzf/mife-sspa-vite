export const SinRegistros: React.FC<{
  titulo: string
  descripcion?: React.ReactNode
  icono?: string
}> = ({ titulo, descripcion, icono }) => {
  return (
    <div className='alert d-flex flex-column flex-sm-row p-5 mb-10'>
      {icono && <i className={`fa-solid fa-${icono} fs-2hx text-primary me-4 mb-5 mb-sm-0`}></i>}
      <div className='d-flex flex-column pe-0 pe-sm-10 w-100'>
        <h4 className='text-center text-gray-800'>{titulo}</h4>
        <span>{descripcion}</span>
      </div>
    </div>
  )
}
