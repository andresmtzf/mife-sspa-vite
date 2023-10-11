import { ReactElement } from 'react'

type TProps = {
  titulo: string
  total: number
  icon: ReactElement
  className?: string
}

export const CardConsolidado = ({ titulo, total, icon, className }: TProps) => {
  return (
    <div className='me-2 h-70 '>
      <div
        className={`card card-custom card-border ctos-card-border card-stretch h-100 ctos-card-consolidado ${className}`}>
        <div className='card-body p-5'>
          <div className=' d-flex w-100 justify-content-center mb-3'>
            <div>
              <span className='w-100 text-ui-slate card-label p-0 mb-3 text-start p-consolidado'>
                {titulo}
              </span>
            </div>
          </div>
          <div className=' d-flex w-100 align-items-end'>
            <div className='col-10 d-flex justify-content-center'>
              <div className=' align-items-center d-flex'>
                <span className='fw-bold span-consolidado'>{total}</span>
              </div>
              <div className='col-2 ms-5'>{icon}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
