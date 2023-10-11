import { Symbol } from '../../../components/Symbol'
import { obtenerIniciales } from '../../../utils/StringUtils'
import { CollapseOld } from './components/AcordionOld'
import { BtnRedSocial } from './components/BtnRedSocialOld'
import { Badge } from './components/CardOld'
import { ItemCollapseCuenta } from './components/CardTable'
import { BodyPagina } from './components/ContainerPaginaOld'
import { DatoGeneral, Separador, TarjetaRol } from './components/CotenedoresOld'
import {
  ItemContactoVinculado,
  ItemContactoVinculados,
} from './components/ItemsContactosVinculadosOld'
import { ItemDate, ItemFch, ItemFchIcon, ItemFecha } from './components/ItemsFechasImportantesOld'

export const LayoutAlternoDC = () => {
  return (
    <BodyPagina>
      <div className='container-fluid'>
        <div className='row'>
          <DatosGenerales></DatosGenerales>
          <DatosEspecificos></DatosEspecificos>
        </div>
      </div>
    </BodyPagina>
  )
}

const DatosGenerales = () => {
  return (
    <div className='col-xl-4 border border-success'>
      <div className='card card-bordered card-px-0 mb-xl-10'>
        <div className='card-body py-9 border border-info px-2'>
          <div className='d-flex flex-wrap flex-sm-nowrap p-1 border border-danger'>
            {/** Symbol */}
            <div className='me-7 p-1'>
              <Symbol
                tamanio='100px'
                backgroundColor='ui-slate'
                className='symbol-lg-125px symbol-fixed position-relative'>
                {obtenerIniciales('Hábil')}
              </Symbol>
            </div>
            {/** -Symbol */}
            {/** Info contacto */}
            <div className='flex-grow-1 p-1 border border-primary'>
              <div className='d-flex justify-content-between align-items-start flex-wrap p-1'>
                <div className='d-flex flex-column p-1 border border-info w-100'>
                  <div className='d-flex align-items-center'>
                    <div className='text-gray-900 text-hover-primary fs-2 fw-bold'>Hábil </div>
                  </div>
                  <div className='d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2 fw-bold'>
                    <div className='d-flex flex-column content-justify-center w-100 mt-1'>
                      <DatoGeneral titulo='Cumpleaños' dato='XX/XX/XXXX'></DatoGeneral>
                      <DatoGeneral titulo='RFC' dato='XAXX010101000'></DatoGeneral>
                      <DatoGeneral titulo='Acrónimo' dato='HB'></DatoGeneral>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/** -Info contacto */}
          </div>
          <div className='d-flex align-items-center border border-success my-2 p-0 hover-scroll-x'>
            {/* <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>Tags:</div> */}
            <div className='d-flex '>
              <Badge titulo='Cliente'></Badge>
              <Badge titulo='2022'></Badge>
              <Badge titulo='GEH'></Badge>
              <Badge titulo='HB'></Badge>
              <Badge titulo='I2D'></Badge>
              <Badge titulo='Cliente'></Badge>
              <Badge titulo='2022'></Badge>
              <Badge titulo='GEH'></Badge>
              <Badge titulo='HB'></Badge>
              <Badge titulo='I2D'></Badge>
              <Badge titulo='Cliente'></Badge>
              <Badge titulo='2022'></Badge>
              <Badge titulo='GEH'></Badge>
              <Badge titulo='HB'></Badge>
              <Badge titulo='I2D'></Badge>
            </div>
          </div>
          <div className='d-flex flex-wrap flex-sm-nowrap p-1 border border-danger mt-1'>
            <div className='d-flex flex-wrap flex-stack p-1'>
              <div className='d-flex flex-column flex-grow-1'>
                <Separador titulo='Roles de contacto'></Separador>
                <div className='d-flex flex-wrap'>
                  <TarjetaRol titulo='Cliente' icono='fa-user-group' />
                  <TarjetaRol titulo='Empresa Administrada' icono='fa-building' />
                  <TarjetaRol
                    titulo='Repre. Legal'
                    icono='fa-user-tie'
                    descripcion='Sergio Pérez'
                  />
                  <TarjetaRol
                    titulo='Apode. Legal'
                    icono='fa-user-tie'
                    descripcion='Sergio Pérez'
                  />
                  {/** Contenedor de info */}
                  <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
                    <div className='d-flex flex-column align-items-start'>
                      <div>
                        <i className='fa-solid fa-cake-candles fs-3 text-ui-slate'></i>
                      </div>
                      <div className='d-flex align-items-center fs-6 fw-bolder'>Apode. legal</div>
                    </div>
                    <div className='fw-bold fs-7 text-gray-500'>Sergio Perez</div>
                  </div>
                  {/** -Contenedor de info */}
                </div>
                {/** Iconos redes sociales */}
                <div className='d-flex flex-wrap justify-content-between'>
                  <BtnRedSocial redSocial='facebook'></BtnRedSocial>
                  <BtnRedSocial redSocial='instagram'></BtnRedSocial>
                  <BtnRedSocial redSocial='twitter'></BtnRedSocial>
                  <BtnRedSocial redSocial='google'></BtnRedSocial>
                  <BtnRedSocial redSocial='youtube'></BtnRedSocial>
                  <BtnRedSocial redSocial='linkedin'></BtnRedSocial>
                </div>
                {/** -Iconos redes sociales */}
              </div>
            </div>
          </div>
          <div className='d-flex flex-column flex-wrap flex-sm-nowrap p-1 border border-danger mt-1'>
            <Separador titulo='Fechas importantes'></Separador>
            <CardFechasImportantes titulo='Fechas Importantes' />
          </div>
          <div className='d-flex flex-column flex-wrap flex-sm-nowrap p-1 border border-danger mt-1'>
            <Separador titulo='Contactos Vinculados' />
            <CardContactosVinculados />
          </div>
          <CollapseOld id='fechas' titulo='Fechas Importantes'>
            <CardContactosVinculados />
          </CollapseOld>
        </div>
      </div>
    </div>
  )
}

const DatosEspecificos = () => {
  return (
    <div className='col-xl-8 border border-primary'>
      <div className='card card-bordered'>
        <div className='card-body'>
          <div className='d-flex flex-column flex-grow-1 border border-warning'>
            <Separador titulo='Fechas importantes'></Separador>
            <CardFechasImportantes titulo='Fechas Importantes' />
          </div>
          <div className='d-flex flex-column flex-grow-1 border border-warning mt-2'>
            <Separador titulo='Contactos Vinculados' />
            <CardContactosVinculados />
          </div>
          <div className='d-flex flex-column flex-grow-1 border border-warning mt-2'>
            <Separador titulo='Colaborador' />
            <RolColaborador></RolColaborador>
          </div>
          <div className='d-flex flex-column flex-grow-1 border border-warning mt-2'>
            <Separador titulo='Proveedor' />
            <RolProveedor></RolProveedor>
          </div>
          {/* <TabsDatosEspecificos direcciones={}></TabsDatosEspecificos> */}
          {/* <AcordionUnico></AcordionUnico>
          <ColapsableOld></ColapsableOld>
          <ColapsableOld></ColapsableOld>
          <ColapsableOld></ColapsableOld>
          <CardTable></CardTable>
          <TabsDatos></TabsDatos> */}
          {/* <TableTabs></TableTabs> */}
          {/* <CardCollapse></CardCollapse> */}
          {/* <ItemCollapseCuenta></ItemCollapseCuenta> */}
          <ItemCollapseCuenta></ItemCollapseCuenta>
          <ItemCollapseCuenta></ItemCollapseCuenta>
        </div>
      </div>
    </div>
  )
}

export const CardFechasImportantes = ({ titulo }) => {
  return (
    <>
      <div className='hover-scroll-overlay-y mh-425px'>
        <ItemDate relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemDate>
        <ItemDate relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemDate>
        <ItemFchIcon relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFchIcon>
        <ItemFchIcon relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFchIcon>
        <ItemFch relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFch>
        <ItemFch relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFch>
        <ItemFecha relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFecha>
        <ItemFecha relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFecha>
        <ItemFecha relacion='Esposa' evento='Cumpleaños' fecha='27/sep/2023'></ItemFecha>
      </div>
    </>
  )
}

export const CardContactosVinculados = () => {
  return (
    <div className='hover-scroll-overlay-y mh-425px '>
      <ItemContactoVinculado></ItemContactoVinculado>
      <div className='separator separator-dashed my-5'></div>
      <ItemContactoVinculado></ItemContactoVinculado>
      <div className='separator separator-dashed my-5'></div>
      <ItemContactoVinculado></ItemContactoVinculado>
      <div className='separator separator-dashed my-5'></div>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
      <ItemContactoVinculados></ItemContactoVinculados>
    </div>
  )
}

/**
 * Roles P. Física
 *
 * Colaborador: Id empleado, id empleado nominax, tipo colaborador, modalidad, Filial (Filial, dirección, puesto), coordinador (flag), Gerente de cuenta (flag), Seguro (Numero seguro), Contrato (Fecha Inicio, Fecha Fin, Testigos, descarga(icono?))
 * Cliente
 * Proveedor
 * Usuario de sistema
 * Candidato
 */

export const RolColaborador = () => {
  return (
    <div className='container'>
      <div className='row border border-info'>
        <div className='col-xl-6'>
          <h5 className='mb-3'>Identficación</h5>
          <RowText titulo='ID empleado:' descripcion='153294'></RowText>
          <RowText titulo='ID empleado nominax:' descripcion='153294'></RowText>
          <RowText titulo='Tipo colaborador:' descripcion='Prestador de servicios'></RowText>
          <RowText titulo='Modalidad:' descripcion='Residencias'></RowText>
        </div>
        <div className='col-xl-6'>
          <h5 className='mb-3'>Filial</h5>
          <RowText titulo='Filial:' descripcion='Unosiete'></RowText>
          <RowText titulo='Dirección:' descripcion='Dirección comercial'></RowText>
          <RowText titulo='Puesto:' descripcion='Administración'></RowText>
        </div>
        <div className='col-xl-6'>
          <h5 className='mb-3'>Contrato</h5>
          <RowText titulo='Fecha de inicio:' descripcion='28/sep/2023'></RowText>
          <RowText titulo='Fecha de fin:' descripcion='28/sep/2023'></RowText>
          <RowText
            titulo='Testigos:'
            descripcion='Fernando Alonos, Lando Norris, Fernando Alonos, Lando Norris, Fernando Alonos, Lando Norris'></RowText>
          <RowText titulo='Descarga:' descripcion=''></RowText>
        </div>
        <div className='col-xl-6'>
          <h5 className='mb-3'>Seguro</h5>
          <RowText titulo='Seguro:' descripcion='789546GTH5'></RowText>
        </div>
        <div className='col-xl-6'>
          <h5 className='mb-3'>Actividades</h5>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Coordinador
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Gerente de cuenta
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Autorizadore de operaciones
          </div>
          <div className='text-gray-600 d-flex align-items-center py-2'>
            <span className='bullet bullet-dot bg-primary me-3'></span> Autorizador de finanzas:{' '}
            <span className='ms-1 text-gray-800'>$50,000.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const RolProveedor = () => {
  return (
    <div className='container'>
      <div className='row border border-info'>
        <div className='col-xl-6'>
          <RowText titulo='Tipo de proveedor:' descripcion='Tecnología'></RowText>
          <RowText titulo='Factura:' descripcion='Si'></RowText>
          <RowText titulo='Número de cliente:' descripcion='123'></RowText>
        </div>
      </div>
    </div>
  )
}

export const RowText: React.FC<{ titulo: string; descripcion?: string }> = ({
  titulo,
  descripcion,
}) => {
  return (
    <div className='d-flex flex-stack justify-conten-between mt-3'>
      <div className='text-gray-600'>{titulo}</div>
      <div className='ms-1 text-gray-800 text-truncate'>{descripcion}</div>
    </div>
  )
}

/**
 * Roles P. Moral
 *
 * Cliente
 * Empresa administrada
 * Proveedor
 */

const CardCollapse = () => {
  return (
    <div className='card shadow-sm'>
      <div
        className='card-header collapsible cursor-pointer rotate'
        data-bs-toggle='collapse'
        data-bs-target='#kt_docs_card_collapsible'>
        <h3 className='card-title'>Title</h3>
        <div className='card-toolbar rotate-180'>
          <i className='fa-solid fa-arrow-down fs-3'></i>
        </div>
      </div>
      <div id='kt_docs_card_collapsible' className='collapse show'>
        <div className='card-body'>Lorem Ipsum is simply dummy text...</div>
        <div className='card-footer'>Footer</div>
      </div>
    </div>
  )
}
