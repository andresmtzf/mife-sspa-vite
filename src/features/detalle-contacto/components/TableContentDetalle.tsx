export const TableContentDetalle: React.FC<Props> = ({ id, activo, children }) => {
  return (
    <div id={id} className={`card-body p-0 tab-pane fade ${activo ? 'active show' : ''}`}>
      <div className='table-responsive'>
        <table className='table table-row-bordered align-middle gy-4 gs-9'>
          <tbody className='text-gray-600 tab-content'>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

interface Props {
  id: string
  activo?: boolean
}
