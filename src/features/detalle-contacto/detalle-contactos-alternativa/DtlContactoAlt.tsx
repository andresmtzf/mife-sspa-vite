import { Button, Icon } from 'ui-react-components-ui'
import { Card } from './components/CardOld'
import { BodyPagina, HeaderPagina } from './components/ContainerPaginaOld'

export const DtlContactoAlt = () => {
  return (
    <>
      {/* <div className='my-4 container d-flex flex-stack' style={{ maxWidth: '1380px' }}>
        <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
          <h1 className='page-heading d-flex text-dark fw-bold fs-2 flex-column justify-content-center my-0'>
            Detalle de contacto
          </h1>
        </div>
        <div className='d-flex align-items-center gap-2 gap-lg-3'>
          <Button variant='icon' className='btn-sm justify-content-end'>
            <Icon icon={'fa-pen-to-square'}></Icon>
          </Button>
          <Button variant='icon' className='btn-sm justify-content-end'>
            <Icon icon={'fa-xmark'}></Icon>
          </Button>
        </div>
      </div>
      <div className='my-6 container p-0' style={{ maxWidth: '1380px' }}>
        <Card></Card>
      </div> */}
      <HeaderPagina titulo='Detalle de contacto'>
        <Button variant='icon' className='btn-sm justify-content-end'>
          <Icon icon={'fa-pen-to-square'}></Icon>
        </Button>
        <Button variant='icon' className='btn-sm justify-content-end'>
          <Icon icon={'fa-xmark'}></Icon>
        </Button>
      </HeaderPagina>
      <BodyPagina>
        <Card></Card>
      </BodyPagina>
    </>
  )
}
