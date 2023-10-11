import { RolProveedor } from '../LayoutAlternoDC'

export const AcordionIcon = () => {
  return (
    <div className='accordion accordion-icon-toggle' id='kt_accordion_2'>
      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_2_item_1'>
          <span className='accordion-icon'>
            <i className='fa-solid fa-arrow-right fs-4'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>The best way to quick start business</h3>
        </div>

        <div
          id='kt_accordion_2_item_1'
          className='fs-6 collapse show ps-10'
          data-bs-parent='#kt_accordion_2'>
          ...
        </div>
      </div>

      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex collapsed'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_2_item_2'>
          <span className='accordion-icon'>
            <i className='fa-solid fa-arrow-right fs-4'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>How To Create Channel ?</h3>
        </div>

        <div
          id='kt_accordion_2_item_2'
          className='collapse fs-6 ps-10'
          data-bs-parent='#kt_accordion_2'>
          ...
        </div>
      </div>

      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex collapsed'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_2_item_3'>
          <span className='accordion-icon'>
            <i className='fa-solid fa-arrow-right fs-4'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>What are the support terms & conditions ?</h3>
        </div>

        <div
          id='kt_accordion_2_item_3'
          className='collapse fs-6 ps-10'
          data-bs-parent='#kt_accordion_2'>
          ...
        </div>
      </div>
    </div>
  )
}

export const Acordion = () => {
  return (
    <div className='accordion' id='kt_accordion_1'>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='kt_accordion_1_header_1'>
          <button
            className='accordion-button fs-4 fw-semibold'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_1'
            aria-expanded='true'
            aria-controls='kt_accordion_1_body_1'>
            Accordion Item #1
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_1'
          className='accordion-collapse collapse show'
          aria-labelledby='kt_accordion_1_header_1'
          data-bs-parent='#kt_accordion_1'>
          <div className='accordion-body'>...</div>
        </div>
      </div>

      <div className='accordion-item'>
        <h2 className='accordion-header' id='kt_accordion_1_header_2'>
          <button
            className='accordion-button fs-4 fw-semibold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_2'
            aria-expanded='false'
            aria-controls='kt_accordion_1_body_2'>
            Accordion Item #2
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_2'
          className='accordion-collapse collapse'
          aria-labelledby='kt_accordion_1_header_2'
          data-bs-parent='#kt_accordion_1'>
          <div className='accordion-body'>...</div>
        </div>
      </div>

      <div className='accordion-item'>
        <h2 className='accordion-header' id='kt_accordion_1_header_3'>
          <button
            className='accordion-button fs-4 fw-semibold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_3'
            aria-expanded='false'
            aria-controls='kt_accordion_1_body_3'>
            Accordion Item #3
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_3'
          className='accordion-collapse collapse'
          aria-labelledby='kt_accordion_1_header_3'
          data-bs-parent='#kt_accordion_1'>
          <div className='accordion-body'>...</div>
        </div>
      </div>
    </div>
  )
}

export const AcordionCollapse = () => {
  return (
    <div className='accordion accordion-icon-collapse' id='kt_accordion_3'>
      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_3_item_1'>
          <span className='accordion-icon'>
            <i className='fa-solid fa-square-plus fs-3 accordion-icon-off'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
            </i>
            <i className='fa-solid fa-square-minus fs-3 accordion-icon-on'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>The best way to quick start business</h3>
        </div>

        <div
          id='kt_accordion_3_item_1'
          className='fs-6 collapse show ps-10'
          data-bs-parent='#kt_accordion_3'>
          ...
        </div>
      </div>

      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex collapsed'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_3_item_2'>
          <span className='accordion-icon'>
            <i className='ki-duotone ki-plus-square fs-3 accordion-icon-off'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
            </i>
            <i className='ki-duotone ki-minus-square fs-3 accordion-icon-on'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>How To Create Channel ?</h3>
        </div>

        <div
          id='kt_accordion_3_item_2'
          className='collapse fs-6 ps-10'
          data-bs-parent='#kt_accordion_3'>
          ...
        </div>
      </div>

      <div className='mb-5'>
        <div
          className='accordion-header py-3 d-flex collapsed'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_3_item_3'>
          <span className='accordion-icon'>
            <i className='ki-duotone ki-plus-square fs-3 accordion-icon-off'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
            </i>
            <i className='ki-duotone ki-minus-square fs-3 accordion-icon-on'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </span>
          <h3 className='fs-4 fw-semibold mb-0 ms-4'>What are the support terms & conditions ?</h3>
        </div>

        <div
          id='kt_accordion_3_item_3'
          className='collapse fs-6 ps-10'
          data-bs-parent='#kt_accordion_3'>
          ...
        </div>
      </div>
    </div>
  )
}

export const AcordionUnico = () => {
  return (
    <div className='accordion accordion-flush' id='kt_accordion_1'>
      <div className='accordion-item px-0'>
        <h2 className='accordion-header' id='kt_accordion_1_header_1'>
          <button
            className='accordion-button fs-4 fw-semibold'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_1'
            aria-expanded='true'
            aria-controls='kt_accordion_1_body_1'>
            Accordion Item #1
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_1'
          className='accordion-collapse collapse show'
          aria-labelledby='kt_accordion_1_header_1'
          data-bs-parent='#kt_accordion_1'>
          <div className='accordion-body px-0'>
            <RolProveedor></RolProveedor>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ColapsableOld = () => {
  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible py-3 toggle mb-0'
        data-bs-toggle='collapse'
        data-bs-target='#kt_job_4_1'>
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
          <i className='fa-solid fa-square-minus toggle-on text-primary fs-1'></i>
          <i className='fa-solid fa-square-plus toggle-off fs-1'></i>
        </div>

        <h4 className='text-gray-700 fw-bold cursor-pointer mb-0'>How does it work?</h4>
      </div>

      <div id='kt_job_4_1' className='collapse show fs-6 ms-1'>
        <div className='mb-4 text-gray-600 fw-semibold fs-6 ps-10'>
          First, a disclaimer – the entire process of writing a blog post often takes more than a
          couple of hours, even if you can type eighty words as per minute and your writing skills
          are sharp.
        </div>
      </div>

      <div className='separator separator-dashed'></div>
    </div>
  )
}

export const CollapseOld: React.FC<{ id: string; titulo: string }> = ({ id, titulo, children }) => {
  return (
    <div className='m-0'>
      <div
        className='d-flex align-items-center collapsible py-3 toggle mb-0'
        data-bs-toggle='collapse'
        data-bs-target={`#${id}`}>
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
          <i className='fa-solid fa-square-minus toggle-on text-primary fs-1'></i>
          <i className='fa-solid fa-square-plus toggle-off fs-1'></i>
        </div>

        <h4 className='text-gray-700 fw-bold cursor-pointer mb-0'>{titulo}</h4>
      </div>

      <div id={id} className='collapse show fs-6 ms-1'>
        {children}
      </div>

      <div className='separator'></div>
    </div>
  )
}
