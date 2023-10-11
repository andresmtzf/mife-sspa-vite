import { Correo, Cuenta, DireccionConsulta, Telefono } from '../../../types/Contacto'
import { ItemCuentaCollapse } from './ItemCuentaCollapse'
import { TableContentDetalle } from './TableContentDetalle'

const DATOS_ESPECIFICOS = ['Direcciones', 'Correos', 'Telefonos', 'Cuentas']

export const TabsDatosEspecificos: React.FC<Props> = ({
  direcciones,
  correos,
  telefonos,
  cuentas,
}) => {
  return (
    <div className='card card-px-0 py-1'>
      <div className='card-header position-relative py-0 border-bottom-2'>
        <ul className='nav nav-stretch nav-pills nav-pills-custom d-flex mt-3' role='tablist'>
          {DATOS_ESPECIFICOS.map((de, index) => (
            <li className='nav-item p-0 ms-0 me-8'>
              <a
                className={`nav-link btn btn-color-muted px-0 ${
                  index === 0 ? 'show active' : 'null'
                }`}
                data-bs-toggle='tab'
                href={`#${de}`}
                role='tab'>
                <span className='nav-text fw-semibold fs-4 mb-3'> {de} </span>

                <span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-ui-turquoise rounded'></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='card-body py-2'>
        <div className='tab-content mb-2'>
          <TableContentDetalle id='Direcciones' activo>
            {direcciones.map((d) => (
              <tr>
                <td style={{ width: '70%' }}>{d.direccion}</td>
                <td style={{ width: '30%' }}>
                  {d.tipoDireccion.map((td) => (
                    <span className='badge badge-light-primary me-2'>{td}</span>
                  ))}
                </td>
              </tr>
            ))}
          </TableContentDetalle>
          <TableContentDetalle id='Correos'>
            {correos.map((c) => (
              <tr>
                <td style={{ width: '70%' }}>{c.correo}</td>
                <td>
                  <span className='badge badge-light-primary me-2'>
                    {c.esCorreoPrincipal ? 'Principal' : null}
                  </span>
                  <span className='badge badge-light-primary me-2'>{c.tipoDeCorreo}</span>
                </td>
              </tr>
            ))}
          </TableContentDetalle>
          <TableContentDetalle id='Telefonos'>
            {telefonos.map((t) => (
              <tr>
                <td style={{ width: '70%' }}>{t.numero}</td>
                <td>
                  <span className='badge badge-light-primary me-2'>
                    {t.esTelefonoPrincipal ? 'Principal' : null}
                  </span>
                  <span className='badge badge-light-primary me-2'>{t.tipoDeTelefono}</span>
                </td>
              </tr>
            ))}
          </TableContentDetalle>
          <TableContentDetalle id='Cuentas'>
            {cuentas.map((c) => (
              <tr>
                <td style={{ width: '50%' }}>
                  <ItemCuentaCollapse cuenta={c} />
                </td>
                <td></td>
              </tr>
            ))}
          </TableContentDetalle>
        </div>
      </div>
    </div>
  )
}

interface Props {
  direcciones: DireccionConsulta[]
  correos: Correo[]
  telefonos: Telefono[]
  cuentas: Cuenta[]
}
