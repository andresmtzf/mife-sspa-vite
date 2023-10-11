export const Colapsable: React.FC<Props> = ({ titulo, children }) => {
  let id = self.crypto.randomUUID()

  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible py-3 toggle mb-0'
        data-bs-toggle='collapse'
        data-bs-target={`#id-${id}`}>
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-ui-turquoise me-5'>
          <i className='fa-solid fa-square-minus toggle-on text-ui-turquoise fs-1'></i>
          <i className='fa-solid fa-square-plus toggle-off fs-1'></i>
        </div>

        <h4 className='text-gray-700 fw-bold cursor-pointer mb-0'>{titulo}</h4>
      </div>

      <div id={`id-${id}`} className='collapse show fs-6 ms-1 mb-2'>
        {children}
      </div>

      <div className='separator'></div>
    </div>
  )
}

interface Props {
  titulo: string
}
