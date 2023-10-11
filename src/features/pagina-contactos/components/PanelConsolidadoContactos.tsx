import { Button, Icon } from 'ui-react-components-ui'
import { Consolidado } from '../models/cosolidado.type'
import { PanelConsolidadoContactosElemento } from './PanelConsolidadoContactosElemento'

export const PanelConsolidadoContactos = ({
  mostrarPanelConsolidado,
  setMostrarPanelConsolidado,
}: Props) => {
  const consolidadoContactos: Consolidado = {
    total: 987,
    totalClientesFisica: 678,
    totalClientesMoral: 60,
    totalCandidatos: 45,
    totalContactos: 125,
    totalColaboradores: 22,
    totalFiliales: 14,
    totalProveedoresFisica: 25,
    totalProveedoresMoral: 18,
  }
  return (
    <div className={`filters ${mostrarPanelConsolidado && 'open'}`}>
      <div className='p-5 border-bottom d-flex justify-content-between align-items-center '>
        <div className='d-flex flex-column'>
          <h1 className='text-ui-slate'>Consolidado</h1>
        </div>
        <Button
          type='button'
          onClick={() => setMostrarPanelConsolidado(false)}
          variant='icon'
          className='btn btn-sm btn-light-ui-slate btn-circle'>
          <Icon icon='fa-xmark' size='fs-7'></Icon>
        </Button>
      </div>
      <div className='filter-container pt-10'>
        <div className='row'>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalClientesFisica}
            texto={'Clientes (física)'}></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalClientesMoral}
            texto={'Clientes (moral)'}
            icon='fa-users'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalCandidatos}
            texto={'Candidatos'}
            icon='fa-user-tie'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalContactos}
            texto={'Contactos'}
            icon='fa-address-book'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalColaboradores}
            texto={'Colaboradores'}
            icon='fa-people-group'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalFiliales}
            texto={'Filiales'}
            icon='fa-building-user'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalProveedoresFisica}
            texto={'Proveedores (física)'}
            icon='fa-people-carry-box'></PanelConsolidadoContactosElemento>
          <PanelConsolidadoContactosElemento
            total={consolidadoContactos.totalProveedoresMoral}
            texto={'Proveedores (moral)'}
            icon='fa-people-carry-box'></PanelConsolidadoContactosElemento>
        </div>
      </div>
    </div>
  )
}

type Props = {
  mostrarPanelConsolidado: boolean
  setMostrarPanelConsolidado: (p: boolean) => void
}
