export const ItemContactoVinculados = () => {
  return (
    <>
      <div className='d-flex flex-stack'>
        <div className='d-flex align-items-center me-5'>
          <span className='symbol symbol-40px'>
            <div className='symbol-label fs-6 fw-semibold bg-danger text-inverse-danger symbol-50px'>
              HA
            </div>
          </span>
          <div className='mx-5'>
            <span className='text-gray-800 text-hover-primary fw-bold'>Contacto</span>
          </div>
        </div>
        <span className='badge badge-light-success'>Puesto</span>
      </div>
      <div className='separator separator-dashed my-5'></div>
    </>
  )
}

export const ItemContactoVinculado = () => {
  return (
    <>
      <div className='d-flex flex-stack'>
        <div className='d-flex align-items-center me-5'>
          <span className='symbol symbol-40px'>
            <div className='symbol-label fs-6 fw-semibold bg-danger text-inverse-danger symbol-50px'>
              HA
            </div>
          </span>
          <div className='mx-5'>
            <div className='text-gray-800 fw-bold text-hover-primary fs-6'>Hábil</div>
            <div className='text-gray-400 fw-bold'>Puesto</div>
          </div>
        </div>
      </div>
    </>
  )
}
