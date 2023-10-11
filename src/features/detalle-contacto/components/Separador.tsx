export const Separador: React.FC<Props> = ({ titulo, icono, sm }) => {
  return (
    <>
      <div className='d-flex align-items-center py-3 mb-0'>
        {icono ? (
          <i className={`fa-solid ${icono} ${sm ? 'fs-5' : 'fs-1'} text-gray-500 me-5`} />
        ) : null}
        {sm ? (
          <div className='fs-5 text-gray-700 fw-bold mb-0'>{titulo}</div>
        ) : (
          <h4 className='text-gray-700 fw-bold mb-0'>{titulo}</h4>
        )}
      </div>
      <div className='separator'></div>
    </>
  )
}

interface Props {
  titulo: string
  icono?: string
  sm?: boolean
}
