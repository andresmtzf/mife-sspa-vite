export const CardTable = () => {
  return (
    <div className='card card-px-0'>
      <div className='card-header card-header-stretch border-bottom border-gray-200'>
        <div className='card-title'>
          <h3 className='fw-bold m-0'>Datos específicos</h3>
        </div>

        <div className='card-toolbar m-0'>
          <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'>
            <li className='nav-item' role='presentation'>
              <a
                id='address'
                className='nav-link fs-5 fw-semibold me-3 active'
                data-bs-toggle='tab'
                role='tab'
                href='#direcciones'
                aria-selected='true'>
                Direcciones
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                id='kt_billing_1year_tab'
                className='nav-link fs-5 fw-semibold me-3 '
                data-bs-toggle='tab'
                role='tab'
                href='#kt_billing_year'
                aria-selected='false'
                tabIndex={-1}>
                Correo
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                id='kt_billing_alltime_tab'
                className='nav-link fs-5 fw-semibold'
                data-bs-toggle='tab'
                role='tab'
                href='#kt_billing_all'
                aria-selected='false'
                tabIndex={-1}>
                Telefonos
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                id='_account_'
                className='nav-link fs-5 fw-semibold'
                data-bs-toggle='tab'
                role='tab'
                href='#account'
                aria-selected='false'
                tabIndex={-1}>
                Cuentas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='tab-content'>
        <div
          id='direcciones'
          className='card-body p-0 tab-pane fade active show'
          role='tabpanel'
          aria-labelledby='direcciones'>
          <div className='table-responsive'>
            <table className='table table-row-bordered align-middle gy-4 gs-9'>
              <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
                <tr>
                  <td className='min-w-150px'>Dirección</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className='fw-semibold text-gray-600'>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id='kt_billing_year'
          className='card-body p-0 tab-pane fade '
          role='tabpanel'
          aria-labelledby='kt_billing_year'>
          <div className='table-responsive'>
            <table className='table table-row-bordered align-middle gy-4 gs-9'>
              <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
                <tr>
                  <td className='min-w-150px'>Dirección</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className='fw-semibold text-gray-600'>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id='kt_billing_all'
          className='card-body p-0 tab-pane fade'
          role='tabpanel'
          aria-labelledby='kt_billing_all'>
          <div className='table-responsive'>
            <table className='table table-row-bordered align-middle gy-4 gs-9'>
              <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
                <tr>
                  <td className='min-w-150px'>Dirección</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className='fw-semibold text-gray-600'>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id='account'
          className='card-body p-0 tab-pane fade'
          role='tabpanel'
          aria-labelledby='cuentas'>
          <div className='table-responsive'>
            <table className='table table-row-bordered align-middle gy-4 gs-9'>
              <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
                <tr>
                  <td className='min-w-150px'>Dirección</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className='fw-semibold text-gray-600'>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
                <tr>
                  <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
                  <td className='text-right'>
                    <span className='badge badge-light me-2'>PR</span>
                    <span className='badge badge-primary me-2'>Fs</span>
                    <span className='badge badge-secondary'>CS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TableBasic = () => {
  return (
    <div className='table-responsive'>
      <table className='table'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800'>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const TabsDatos = () => {
  return (
    <div className='card card-px-0'>
      <div className='card-header card-header-stretch border-bottom border-gray-200'>
        <div className='card-title'>
          <h3 className='fw-bold m-0'>Datos específicos</h3>
        </div>

        <div className='card-toolbar m-0'>
          <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'>
            <li className='nav-item' role='presentation'>
              <a
                id='_direccion_'
                className='nav-link fs-5 fw-semibold me-3 active'
                data-bs-toggle='tab'
                role='tab'
                href='#residencias'
                aria-selected='true'>
                Direcciones
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                id='_correo_'
                className='nav-link fs-5 fw-semibold me-3 '
                data-bs-toggle='tab'
                role='tab'
                href='#correo'
                aria-selected='false'
                tabIndex={-1}>
                Correo
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                id='_telefono_'
                className='nav-link fs-5 fw-semibold me-3 '
                data-bs-toggle='tab'
                role='tab'
                href='#telefono'
                aria-selected='false'
                tabIndex={-1}>
                Telefonos
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                id='_cuenta_'
                className='nav-link fs-5 fw-semibold me-3 '
                data-bs-toggle='tab'
                role='tab'
                href='#cuentas'
                aria-selected='false'
                tabIndex={-1}>
                Cuentas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='tab-content'>
        <TabContentDirecciones></TabContentDirecciones>
        <TabContentCorreo></TabContentCorreo>
        <TabContentTelefono></TabContentTelefono>
        <TabContentCuentas></TabContentCuentas>
      </div>
    </div>
  )
}

export const TabContentDirecciones = () => {
  return (
    <div
      id='residencias'
      className='card-body p-0 tab-pane fade active show'
      role='tabpanel'
      aria-labelledby='direcciones'>
      <div className='table-responsive'>
        <table className='table table-row-bordered align-middle gy-4 gs-9'>
          <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
            <tr>
              <td className='min-w-150px'>Dirección</td>
              <td></td>
            </tr>
          </thead>
          <tbody className='fw-semibold text-gray-600'>
            <tr>
              <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>Fs</span>
                <span className='badge badge-secondary'>CS</span>
              </td>
            </tr>
            <tr>
              <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>Fs</span>
                <span className='badge badge-secondary'>CS</span>
              </td>
            </tr>
            <tr>
              <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>Fs</span>
                <span className='badge badge-secondary'>CS</span>
              </td>
            </tr>
            <tr>
              <td>Chalco #31, Colonia El Conde Naucalpan de Juárez, Estado de México 53500</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>Fs</span>
                <span className='badge badge-secondary'>CS</span>
              </td>
            </tr>
            <tr>
              <td>
                <ItemDireccion />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const TabContentCorreo = () => {
  return (
    <div
      id='correo'
      className='card-body p-0 tab-pane fade '
      role='tabpanel'
      aria-labelledby='kt_billing_year'>
      <div className='table-responsive'>
        <table className='table table-row-bordered align-middle gy-4 gs-9'>
          <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
            <tr>
              <td className='min-w-150px'>Correo</td>
              <td></td>
            </tr>
          </thead>
          <tbody className='fw-semibold text-gray-600'>
            <tr>
              <td>dorian.chavez@habilgroup.com</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>CR</span>
              </td>
            </tr>
            <tr>
              <td>dorian.chavez@habil.mx</td>
              <td className='text-right'>
                <span className='badge badge-secondary'>PS</span>
              </td>
            </tr>
            <tr>
              <td>dorian.chavez@gmail.com</td>
              <td className='text-right'>
                <span className='badge badge-secondary'>IN</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const TabContentTelefono = () => {
  return (
    <div
      id='telefono'
      className='card-body p-0 tab-pane fade '
      role='tabpanel'
      aria-labelledby='kt_billing_year'>
      <div className='table-responsive'>
        <table className='table table-row-bordered align-middle gy-4 gs-9'>
          <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
            <tr>
              <td className='min-w-150px'>Correo</td>
              <td></td>
            </tr>
          </thead>
          <tbody className='fw-semibold text-gray-600'>
            <tr>
              <td>5555555555</td>
              <td className='text-right'>
                <span className='badge badge-light me-2'>PR</span>
                <span className='badge badge-primary me-2'>CR</span>
              </td>
            </tr>
            <tr>
              <td>4444444444</td>
              <td className='text-right'>
                <span className='badge badge-secondary'>PS</span>
              </td>
            </tr>
            <tr>
              <td>0123456789</td>
              <td className='text-right'>
                <span className='badge badge-secondary'>IN</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const TabContentCuentas = () => {
  return (
    <div
      id='cuentas'
      className='card-body p-0 tab-pane fade '
      role='tabpanel'
      aria-labelledby='kt_billing_year'>
      <div className='table-responsive'>
        <table className='table table-row-bordered align-middle gy-4 gs-9'>
          <thead className='border-bottom border-gray-200 fs-6 text-gray-600 fw-bold'>
            <tr>
              <td className='min-w-150px'>Cuentas</td>
              <td></td>
            </tr>
          </thead>
          <tbody className='fw-semibold text-gray-600'>
            <tr>
              <td>
                <ItemCollapse></ItemCollapse>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const ItemDireccion = () => {
  return (
    <div className='py-0'>
      <div className='py-3 d-flex flex-stack flex-wrap'>
        <a
          className='accordion-header d-flex align-items-center collapsible rotate collapsed'
          data-bs-toggle='collapse'
          href='#kt_ecommerce_customer_addresses_1'
          role='button'
          aria-expanded='false'
          aria-controls='kt_customer_view_payment_method_1'>
          <div className='accordion-icon me-3'>
            <i className='fa-solid fa-chevron-right fs-4'></i>
          </div>

          <div className='me-3'>
            <div className='d-flex align-items-center'>
              <div className='fs-4 fw-bold'>Home</div>

              <div className='badge badge-light-primary ms-5'>Default Address</div>
            </div>
            <div className='text-muted'>101 Collin Street</div>
          </div>
        </a>
      </div>

      <div
        id='kt_ecommerce_customer_addresses_1'
        className='fs-6 ps-9 collapse'
        data-bs-parent='#kt_ecommerce_customer_addresses_accordion'>
        <div className='d-flex flex-column pb-5'>
          <div className='fw-bold text-gray-600'>Max Smith</div>
          <div className='text-muted'>
            101 Collin Street,
            <br />
            Melbourne, VIC 3000,
            <br />
            Australia
          </div>
        </div>
      </div>
    </div>
  )
}

export const ItemCollapse = () => {
  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible toggle collapsed py-3 toggle mb-0'
        data-bs-toggle='collapse'
        data-bs-target='#kt_job_4_1'>
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
          <i className='fa-solid fa-chevron-down toggle-on fs-4'></i>
          <i className='fa-solid fa-chevron-right toggle-off fs-4'></i>
        </div>

        <div className='me-3'>
          <div className='d-flex align-items-center'>
            <div className='fs-4 fw-bold'>Home</div>

            <div className='badge badge-light-primary ms-5'>Default Address</div>
          </div>
          <div className='text-muted'>101 Collin Street</div>
        </div>
      </div>

      <div id='kt_job_4_1' className='collapse fs-6 ms-1'>
        <div className='d-flex flex-column pb-5'>
          <div className='fw-bold text-gray-600'>Max Smith</div>
          <div className='text-muted'>
            101 Collin Street,
            <br />
            Melbourne, VIC 3000,
            <br />
            Australia
          </div>
        </div>
      </div>

      <div className='separator separator-dashed'></div>
    </div>
  )
}

export const ItemCollapseCuenta = () => {
  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible toggle collapsed py-3 toggle mb-0'
        data-bs-toggle='collapse'
        /* data-bs-target='#item-collapse' */
      >
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
          <i className='fa-solid fa-chevron-down toggle-on fs-4'></i>
          <i className='fa-solid fa-chevron-right toggle-off fs-4'></i>
        </div>

        <div className='me-3'>
          <div className='d-flex align-items-center'>
            <div className='fs-5 fw-bold'>Débito</div>
            <div className='badge badge-light-primary ms-5'>Principal</div>
            <div className='badge badge-light-primary ms-5'>MX</div>
          </div>
          <div className='text-muted fs-6'>Clabe interbancaria: 124586397586</div>
        </div>
      </div>

      <div id='item-collapse' className='collapse fs-6 ms-1'>
        <div className='d-flex flex-column pb-5'>
          <div className='fw-bold text-gray-600'>Titular: Dorian Chávez</div>
          <div className='text-muted'>
            Banco: Banamex
            <br />
            Número de cuenta: 124586397586
            <br />
            Número de tarjeta: 124586397586
            <br />
            Alias de cuenta: Personal
            <br />
            Tipo de crédito: Revolvente
            <br />
            Crédito disponible: $25,000.00
          </div>
        </div>
      </div>

      <div className='separator separator-dashed'></div>
    </div>
  )
}
