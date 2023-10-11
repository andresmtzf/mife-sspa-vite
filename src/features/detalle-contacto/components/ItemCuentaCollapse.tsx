import { Cuenta } from '../../../types'
import { EtiquetaDescripcion } from './EtiquetaDescripcion'

export const ItemCuentaCollapse: React.FC<Props> = ({ cuenta }) => {
  let target = self.crypto.randomUUID()

  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible toggle collapsed mb-0'
        data-bs-toggle={cuenta.tipoDeCuenta !== 'Efectivo' ? 'collapse' : ''}
        data-bs-target={`#item-${target}`}>
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-3'>
          <i
            className={`fa-solid fa-chevron-down toggle-on fs-4 ${
              cuenta.tipoDeCuenta === 'Efectivo' ? 'visually-hidden' : ''
            }`}></i>
          <i
            className={`fa-solid fa-chevron-right toggle-off fs-4 ${
              cuenta.tipoDeCuenta === 'Efectivo' ? 'visually-hidden' : ''
            }`}></i>
        </div>

        <div className='me-3'>
          <div className='d-flex align-items-center'>
            <div className='text-gray-800 fw-bold'>{cuenta.tipoDeCuenta}</div>
            <div className='badge badge-light-primary ms-2'>
              {cuenta.esCuentaPrincipal ? 'Principal' : ''}
            </div>
            <div className='badge badge-light-success ms-2'>{cuenta.tipoDeMoneda}</div>
          </div>
          <div className='text-muted'>
            {cuenta.cuentaDeEfectivo ? cuenta.cuentaDeEfectivo : cuenta.clabeInterbancaria}
          </div>
        </div>
      </div>

      <div id={`item-${target}`} className='collapse fs-6 ms-1'>
        <div className='d-flex flex-column pb-5'>
          {cuenta.tipoDeCuenta !== 'Efectivo' && (
            <>
              <div className='fw-bold text-gray-600 mt-2  '>
                Titular: <span className='text-gray-800'>{cuenta.nombreTitular}</span>
              </div>
              <EtiquetaDescripcion
                titulo='Banco: '
                descripcion={cuenta.Banco}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
              <EtiquetaDescripcion
                titulo='Número de cuenta: '
                descripcion={cuenta.numeroDeCuenta}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
              <EtiquetaDescripcion
                titulo='Número de tarjeta: '
                descripcion={cuenta.numeroDeTarjeta}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
              <EtiquetaDescripcion
                titulo='Alias de Cuenta: '
                descripcion={cuenta.aliasDeCuenta}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
            </>
          )}
          {cuenta.tipoDeCuenta === 'Crédito' && (
            <>
              <EtiquetaDescripcion
                titulo='Tipo de crédito: '
                descripcion={cuenta.tipoDeCredito}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
              <EtiquetaDescripcion
                titulo='Crédito disponible: '
                descripcion={cuenta.creditoDisponible}
                column
                marginTop='mt-1'></EtiquetaDescripcion>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

interface Props {
  cuenta: Cuenta
}
