import { Symbol } from '../../../components/Symbol'
import { obtenerIniciales } from '../../../utils/StringUtils'
import { CardContactosVinculados, CardFechasImportantes, RowText } from './LayoutAlternoDC'
import { AcordionUnico } from './components/AcordionOld'
import { BtnRedSocial } from './components/BtnRedSocialOld'
import { Badge } from './components/CardOld'
import { BodyPagina } from './components/ContainerPaginaOld'
import { DatoGeneral, Separador, TarjetaRol } from './components/CotenedoresOld'

export const LayoutPersonaFisica = () => {
  return (
    <BodyPagina>
      <div className='container-fluid'>
        <div className='row'>
          <DatosGeneralesSinMargen></DatosGeneralesSinMargen>
          <DatosEspecificosSinMargen></DatosEspecificosSinMargen>
        </div>
      </div>
    </BodyPagina>
  )
}

const DatosGeneralesSinMargen = () => {
  return (
    <div className='col-xl-4'>
      <div className='card card-bordered card-px-0 mb-xl-10'>
        <div className='card-body py-9 px-2'>
          <div className='d-flex flex-wrap flex-sm-nowrap p-1'>
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
            <div className='flex-grow-1 p-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap p-1'>
                <div className='d-flex flex-column p-1 w-100'>
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
          <div className='d-flex align-items-center my-2 p-0 hover-scroll-x'>
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
          <div className='d-flex flex-wrap flex-sm-nowrap p-1 mt-1'>
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
        </div>
      </div>
    </div>
  )
}

const DatosEspecificosSinMargen = () => {
  return (
    <div className='col-xl-8'>
      <div className='card card-bordered'>
        <div className='card-body'>
          <div className='d-flex flex-column flex-grow-1'>
            <Separador titulo='Fechas importantes'></Separador>
            <CardFechasImportantes titulo='Fechas Importantes' />
          </div>
          <div className='d-flex flex-column flex-grow-1 mt-2'>
            <Separador titulo='Contactos Vinculados' />
            <CardContactosVinculados />
          </div>
          <div className='d-flex flex-column flex-grow-1 mt-2'>
            <Separador titulo='Colaborador' />
            <RolColaboradorSinMargen></RolColaboradorSinMargen>
          </div>
          <div className='d-flex flex-column flex-grow-1 mt-2'>
            <Separador titulo='Proveedor' />
            <RolProveedorSinMargen></RolProveedorSinMargen>
          </div>
          <AcordionUnico></AcordionUnico>
        </div>
      </div>
    </div>
  )
}

const RolColaboradorSinMargen = () => {
  return (
    <div className='container'>
      <div className='row'>
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

const RolProveedorSinMargen = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6'>
          <RowText titulo='Tipo de proveedor:' descripcion='Tecnología'></RowText>
          <RowText titulo='Factura:' descripcion='Si'></RowText>
          <RowText titulo='Número de cliente:' descripcion='123'></RowText>
        </div>
      </div>
    </div>
  )
}
