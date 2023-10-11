///* TODO AMF [19/09/2023]: Limpiar, no agregar al commit */

import { ItemColaborador } from './ItemColaborador'

export const CardCarrusel = () => {
  return (
    <>
      <div className='card card-flush h-xl-100'>
        <div className='card-header pt-7'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold text-gray-800'>Delivery Tracking</span>
            <span className='text-gray-400 mt-1 fw-semibold fs-6'>56 deliveries in progress</span>
          </h3>

          <div className='card-toolbar'>
            <a href='#' className='btn btn-sm btn-light'>
              View All
            </a>
          </div>
        </div>
        <div className='card-body pt-4 px-0'>
          <ul
            className='nav nav-pills nav-pills-custom item position-relative gap-4 gap-lg-10 gap-xl-15 mx-9 mb-9 '
            role='tablist'>
            <li className='nav-item col-4 mx-0 p-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100 active'
                data-bs-toggle='pill'
                href='#tab_1'
                aria-selected='true'
                role='tab'>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> New </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item col-4 mx-0 px-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                data-bs-toggle='pill'
                href='#tab_2'
                aria-selected='false'
                role='tab'
                tabIndex={-1}>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> Preparing </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item col-4 mx-0 px-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                data-bs-toggle='pill'
                href='#tab_3'
                aria-selected='false'
                role='tab'
                tabIndex={-1}>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> Shipping </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <span className='position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded'></span>
          </ul>

          <div
            className='tab-content px-9 hover-scroll-overlay-y pe-7 me-3 mb-2'
            style={{ height: '454px' }}>
            <div className='tab-pane fade active show' id='tab_1' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='tab_2' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='tab_3' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const CardCarruselAlt = () => {
  return (
    <>
      <div className='card card-flush h-xl-100'>
        <div className='card-header py-7'>
          <div className='card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0'>
            <div className='fs-4 fw-bold pb-3 cursor-pointer border-bottom border-3 border-primary'>
              Tab 1
            </div>
            <div className='fs-4 fw-bold pb-3 cursor-pointer border-bottom border-3 border-primary'>
              Tab 2
            </div>
            <div className='fs-4 fw-bold pb-3 cursor-pointer border-bottom border-3 border-primary'>
              Tab 3
            </div>
          </div>
        </div>
        <div className='card-body pt-4 px-0'>
          <ul
            className='nav nav-pills nav-pills-custom item position-relative mx-9 mb-9'
            role='tablist'>
            <li className='nav-item col-4 mx-0 p-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100 active'
                data-bs-toggle='pill'
                href='#tab_1'
                aria-selected='true'
                role='tab'>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> New </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item col-4 mx-0 px-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                data-bs-toggle='pill'
                href='#tab_2'
                aria-selected='false'
                role='tab'
                tabIndex={-1}>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> Preparing </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item col-4 mx-0 px-0' role='presentation'>
              <a
                className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                data-bs-toggle='pill'
                href='#tab_3'
                aria-selected='false'
                role='tab'
                tabIndex={-1}>
                <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'> Shipping </span>

                <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
              </a>
            </li>

            <span className='position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded'></span>
          </ul>

          <div
            className='tab-content px-9 hover-scroll-overlay-y pe-7 me-3 mb-2'
            style={{ height: '454px' }}>
            <div className='tab-pane fade active show' id='tab_1' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='tab_2' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='tab_3' role='tabpanel'>
              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Albert Flores
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Jessie Clarcson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        Total 2,356 Items in the Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Brooklyn Simmons
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        6391 Elgin St. Celina, Delaware 10299
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Ralph Edwards
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed mt-5 mb-4'></div>

              <div className='m-0'>
                <div className='timeline timeline-border-dashed'>
                  <div className='timeline-item pb-5'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-cd fs-2 text-success'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-success text-uppercase'>Sender</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Cameron Williamson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-line'></div>

                    <div className='timeline-icon'>
                      <i className='ki-duotone ki-geolocation fs-2 text-info'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>
                    </div>

                    <div className='timeline-content m-0'>
                      <span className='fs-8 fw-bolder text-info text-uppercase'>Receiver</span>

                      <a href='#' className='fs-6 text-gray-800 fw-bold d-block text-hover-primary'>
                        Kristin Watson
                      </a>

                      <span className='fw-semibold text-gray-400'>
                        8502 Preston Rd. Inglewood, Maine 98380
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const CardTabs = () => {
  return (
    <>
      <div className='card card-bordered card-flush h-xl-100'>
        <div className='card-header position-relative min-h-50px border-bottom-2'>
          <ul
            className='nav nav-pills nav-pills-custom d-flex position-relative w-100'
            role='tablist'>
            <li className='nav-item mx-0 p-0 w-50' role='presentation'>
              <a
                className='nav-link btn btn-color-muted active border-0 h-100 px-0'
                data-bs-toggle='pill'
                id='kt_forms_widget_1_tab_1'
                href='#kt_forms_widget_1_tab_content_1'
                aria-selected='true'
                role='tab'>
                <span className='nav-text fw-bold fs-4 mb-3 text-wrap'>Colaborador</span>

                <span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
              </a>
            </li>

            <li className='nav-item mx-0 px-0 w-50' role='presentation'>
              <a
                className='nav-link btn btn-color-muted border-0 h-100 px-0'
                data-bs-toggle='pill'
                id='kt_forms_widget_1_tab_2'
                href='#kt_forms_widget_1_tab_content_2'
                aria-selected='false'
                tabIndex={-1}
                role='tab'>
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
