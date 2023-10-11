import { Filtro } from '../../../models/filtros.type'
import { BusquedaContactosForm } from '../models/filtroContactos.type'
import { isMobile } from 'react-device-detect'
type Props = {
  filtro: Filtro
  indice: number
  setValue: any
  getValues: any
  handleBusqueda?: any
  filtrosAplicados: Filtro[]
  setFiltrosAplicados: any
}

export const SpanFiltroAplicado = ({
  filtro,
  indice,
  setValue,
  getValues,
  handleBusqueda,
  filtrosAplicados,
  setFiltrosAplicados,
}: Props) => {
  const quitarFiltro = (clave: string) => {
    setValue(clave as keyof BusquedaContactosForm, null)
    setFiltrosAplicados(filtrosAplicados.filter(({ clave: c }) => c !== clave))
    handleBusqueda(getValues())
  }

  return (
    <>
      {isMobile ? (
        <div
          className='badge py-1 me-2  border border-1 border-ui-slate text-ui-slate mb-1 bg-light-ui-slate row'
          key={indice}>
          <span className='col-1' onClick={() => quitarFiltro(filtro.clave)}>
            <i className='fa fa-times-circle me-1 mt-1 fs-4 text-ui-slate cursor-pointer'></i>
          </span>
          <div className='d-block col-9 text-start col-10'>
            <span className='fw-bold me-2 fs-6'>{filtro.etiqueta}:</span>
            <span className={`fw-light fs-6 ${isMobile ? 'text-wrap' : ''}`}>
              {filtro.descripcion}
            </span>
          </div>
        </div>
      ) : (
        <div
          className='badge py-1 me-2  border border-1 border-ui-slate text-ui-slate mb-1 bg-light-ui-slate'
          key={indice}>
          <span onClick={() => quitarFiltro(filtro.clave)}>
            <i className='fa fa-times-circle me-1 mt-1 fs-4 text-ui-slate cursor-pointer'></i>
          </span>
          <span className='fw-bold me-2 fs-6'>{filtro.etiqueta}:</span>
          <span className='fw-light fs-6'>{filtro.descripcion}</span>
        </div>
      )}
    </>
  )
}
