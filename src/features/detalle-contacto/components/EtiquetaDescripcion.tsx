export const EtiquetaDescripcion: React.FC<Props> = ({
  titulo,
  descripcion,
  column,
  marginTop = 'mt-3',
}) => {
  return (
    <>
      {column ? (
        <div className='row'>
          <div className={`d-flex flex-column ${marginTop}`}>
            <div className='d-flex flex-row'>
              <div className='col text-gray-600'>{titulo}</div>
              <div className='col text-gray-800 text-truncate'>
                {descripcion ? descripcion : '-'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`d-flex flex-stack justify-conten-between ${marginTop}`}>
          <div className='text-gray-600'>{titulo}</div>
          {descripcion && (
            <div className='text-gray-800 text-truncate'>{descripcion ? descripcion : '-'}</div>
          )}
        </div>
      )}
    </>
  )
}

interface Props {
  column?: boolean
  titulo: React.ReactNode
  descripcion?: string | string[]
  marginTop?: string
}
