import { ItemColaborador } from './ItemColaborador'

export const CardTabs = () => {
  return (
    <>
      <div className='card card-bordered card-flush h-xl-100'>
        <div className='card-header position-relative min-h-50px border-bottom-2'>
          <ul
            className='nav nav-pills nav-pills-custom d-flex position-relative w-100'
            role='tablist'>
            <li className='nav-item mx-0 p-0 w-50' role='presentation'>
              <a className='nav-link btn btn-color-muted active border-0 h-100 px-0' role='tab'>
                <span className='nav-text fw-bold fs-4 mb-3 text-wrap'>Colaborador</span>

                <span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item mx-0 px-0 w-50' role='presentation'>
              <a className='nav-link btn btn-color-muted border-0 h-100 px-0'>
                <span className='nav-text fw-bold fs-4 mb-3'>Proveedor</span>

                <span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
              </a>
            </li>
          </ul>
        </div>

        <div className='card-body'>
          <div
            className='hover-scroll-overlay-y pe-6 me-n6 tab-content'
            style={{ height: '250px' }}>
            <ItemColaborador></ItemColaborador>
          </div>
        </div>
      </div>
    </>
  )
}

export const TableTabs = () => {
  return (
    <div className='card card-xl-stretch mb-xl-8'>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Latest Products</span>

          <span className='text-muted mt-1 fw-semibold fs-7'>More than 400 new products</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav' role='tablist'>
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
                aria-selected='true'
                role='tab'>
                Month
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
                aria-selected='false'
                tabIndex={-1}
                role='tab'>
                Week
              </a>
            </li>

            <li className='nav-item' role='presentation'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
                aria-selected='false'
                tabIndex={-1}
                role='tab'>
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='card-body py-3'>
        <div className='tab-content'>
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/plurk.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>React, HTML</td>
                    <td className='text-end'>
                      <span className='badge badge-light-success'>Approved</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/telegram.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/vimeo.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        New Users
                      </a>
                      <span className='text-muted fw-semibold d-block'>Awesome Users</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>Laravel,Metronic</td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary'>Success</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/bebo.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/kickstarter.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Bestseller Theme
                      </a>
                      <span className='text-muted fw-semibold d-block'>Best Customers</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>ReactJS, Ruby</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='tab-pane fade' id='kt_table_widget_5_tab_2' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/plurk.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>React, HTML</td>
                    <td className='text-end'>
                      <span className='badge badge-light-success'>Approved</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/telegram.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/bebo.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='tab-pane fade' id='kt_table_widget_5_tab_3' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/kickstarter.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Bestseller Theme
                      </a>
                      <span className='text-muted fw-semibold d-block'>Best Customers</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>ReactJS, Ruby</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/bebo.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/vimeo.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        New Users
                      </a>
                      <span className='text-muted fw-semibold d-block'>Awesome Users</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>Laravel,Metronic</td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary'>Success</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src='/metronic8/demo1/assets/media/svg/brand-logos/telegram.svg'
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-bold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                        <i className='ki-duotone ki-arrow-right fs-2'>
                          <span className='path1'></span>
                          <span className='path2'></span>
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
