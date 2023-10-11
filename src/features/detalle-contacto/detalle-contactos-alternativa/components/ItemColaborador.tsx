export const ItemColaborador = () => {
  return (
    <>
      <div className='card-body pt-0 fs-6'>
        <div className='mb-7'>
          <h5 className='mb-3'>Detalles de colaborador</h5>

          <div className='d-flex align-items-center mb-1'>
            <div className='fw-bold text-gray-800 text-hover-primary me-2'>Id empleado interno</div>
            <span className='badge badge-light-success'>153294</span>
          </div>
          <div className='d-flex align-items-center mb-1'>
            <div className='fw-bold text-gray-800 text-hover-primary me-2'>Id empleado nominax</div>
            <span className='badge badge-light-success'>153294</span>
          </div>
          <div className='d-flex align-items-center mb-1'>
            <div className='fw-bold text-gray-800 text-hover-primary me-2'>Tipo colaborador:</div>
            <span className='badge badge-light-success'>Prestador de servicios</span>
          </div>
          <div className='d-flex align-items-center mb-1'>
            <div className='fw-bold text-gray-800 text-hover-primary me-2'>Modalidad:</div>
            <span className='badge badge-light-success'>Residencias</span>
          </div>
          <div className='d-flex align-items-center mb-1'>
            <div className='fw-bold text-gray-800 text-hover-primary me-2'>Seguro:</div>
            <span className='badge badge-light-success'> 789546GTH5</span>
          </div>
        </div>

        <div className='separator separator-dashed mb-7'></div>

        <div className='mb-10'>
          <h5 className='mb-3'>Contrato</h5>

          <div className='mb-0'>
            <div className='d-flex align-items-center mb-1'>
              <div className='fw-bold text-gray-800 text-hover-primary me-2'>Fecha Inicio:</div>
              <span className='badge badge-light-success'>01/Feb/2018</span>
            </div>
            <div className='d-flex align-items-center mb-1'>
              <div className='fw-bold text-gray-800 text-hover-primary me-2'>Fecha Fin:</div>
              <span className='badge badge-light-success'>01/Feb/2020</span>
            </div>
            <div className='fw-semibold text-gray-600 d-flex align-items-center'>Testigos:</div>
            <div className='fw-semibold text-gray-600'>Juan Perez, María Juarez</div>
          </div>
        </div>

        <div className='separator separator-dashed mb-7'></div>

        <div className='mb-10'>
          <h5 className='mb-3'>Actividades</h5>

          <div className='mb-0'>
            <div className='d-flex align-items-center py-2'>
              <span className='bullet bg-primary me-3'></span> Coordinador
            </div>
            <div className='d-flex align-items-center py-2'>
              <span className='bullet bg-primary me-3'></span> Gerente de cuenta
            </div>
            <div className='d-flex align-items-center py-2'>
              <span className='bullet bg-primary me-3'></span> Autorizador de operaciones
            </div>
            <div className='d-flex align-items-center py-2'>
              <span className='bullet bg-primary me-3'></span> Autorizador de finanzas
              <div className='fw-semibold text-gray-600'>
                Monto Máximo: <span className='badge badge-sucees badge-sm'></span>$50,000.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
