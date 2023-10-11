import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { SwiperSlide } from 'swiper/react'
import { Button, Icon, Pagination, usePagination } from 'ui-react-components-ui'
import logoHB from '../../assets/logos/habil_color.png'
import logoGEH from '../../assets/logos/logo-geh.png'
import logoUNOSIETE from '../../assets/logos/unosiete_color.png'
import { BodyPagina } from '../../components'
import { Filtro } from '../../models/filtros.type'
import { AppConstantes } from '../../utils/Constantes'
import { CardConsolidado } from './components/CardConsolidadoContactos'
import { CardContacto } from './components/CardContacto'
import { PanelConsolidadoContactos } from './components/PanelConsolidadoContactos'
import { PanelFiltrosContactos } from './components/PanelFiltrosContactos'
import { SwiperContacto } from './components/SwiperContactos'
import { PaginadoContactos } from './models/contacto.type'
import { Consolidado } from './models/cosolidado.type'
import { BusquedaContactosForm, filtrosBusqueda } from './models/filtroContactos.type'

export const Contactos = () => {
  const paginadoContactos: PaginadoContactos = {
    pagina: 1,
    resgistrosPorPagina: 5,
    totalRegistros: 16,
    totalPaginas: 3,
    contactos: [
      {
        id: '0',
        nombre: 'Grupo Empresarial Hábil',
        direccion: 'Vicente Guerrero, 53730, Jose María Morelos, Edo.Méx, Naucalpan ',
        correo: 'geh@habil.mx',
        telefono: { numero: '12345678', extension: '52', pais: 'México', tipo: 'PR' },
        tiposContacto: ['Administración', 'Cliente'],
        tags: ['2021', 'HB', 'GEH', '2021'],
        imagen: logoGEH,
        esArchivado: false,
      },
      {
        id: '1',
        nombre: 'HÁBIL',
        direccion: 'José María Morelos #42, Edo.Méx',
        correo: 'hb@habil.mx',
        telefono: { numero: '12345678', extension: '22', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Empresa Colaboradora', 'Proveedor', 'Cliente', 'Filial'],
        imagen: logoHB,
        esArchivado: true,
      },
      {
        id: '2',
        nombre: 'UNO SIETE',
        direccion: 'José María Morelos #43, Edo.Méx',
        correo: 'unosiete@habil.mx',
        telefono: { numero: '12345678', extension: '22', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Empresa Colaboradora', 'Proveedor', 'Cliente', 'Filial'],
        tags: ['2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH'],
        imagen: logoUNOSIETE,
        esArchivado: false,
      },
      {
        id: '3',
        nombre: 'Rodrigo Hernández Gutiérrez',
        direccion: 'José María Morelos #44, Edo.Méx',
        correo: 'rodrigo.hdz@habil.mx',
        telefono: { numero: '12345678', extension: '2222', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Cliente'],
        esArchivado: false,
      },
      {
        id: '4',
        nombre: 'UNO SIETE',
        direccion: 'José María Morelos #43, Edo.Méx',
        correo: 'unosiete@habil.mx',
        telefono: { numero: '12345678', extension: '22', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Empresa Colaboradora', 'Proveedor', 'Cliente', 'Filial'],
        tags: ['2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH'],
        imagen: logoUNOSIETE,
        esArchivado: false,
      },
      {
        id: '5',
        nombre: 'Rodrigo Hernández Gutiérrez',
        direccion: 'José María Morelos #44, Edo.Méx',
        correo: 'rodrigo.hdz@habil.mx',
        telefono: { numero: '12345678', extension: '2222', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Cliente'],
        esArchivado: false,
      },
      {
        id: '6',
        nombre: 'HÁBIL',
        direccion: 'José María Morelos #42, Edo.Méx',
        correo: 'hb@habil.mx',
        telefono: { numero: '12345678', extension: '22', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Empresa Colaboradora', 'Proveedor', 'Cliente', 'Filial'],
        imagen: logoHB,
        esArchivado: false,
      },
      {
        id: '7',
        nombre: 'UNO SIETE',
        direccion: 'José María Morelos #43, Edo.Méx',
        correo: 'unosiete@habil.mx',
        telefono: { numero: '12345678', extension: '22', pais: 'Mexico', tipo: 'PR' },
        tiposContacto: ['Empresa Colaboradora', 'Proveedor', 'Cliente', 'Filial'],
        tags: ['2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH', '2021', 'HB', 'GEH'],
        imagen: logoUNOSIETE,
        esArchivado: false,
      },
    ],
  }
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

  const consolidadoSwipers = [
    {
      titulo: 'Total',
      numero: consolidadoContactos.total,
      icon: 'fa-users-rectangle',
      tipo: 'Total',
    },
    {
      titulo: 'Clientes (física)',
      numero: consolidadoContactos.totalClientesFisica,
      icon: 'fa-user',
      tipo: 'ClientesFisica',
    },
    {
      titulo: 'Clientes (moral)',
      numero: consolidadoContactos.totalClientesMoral,
      icon: 'fa-users',
      tipo: 'ClientesMoral',
    },
    {
      titulo: 'Candidatos',
      numero: consolidadoContactos.totalCandidatos,
      icon: 'fa-user-tie',
      tipo: 'Candidatos',
    },
    {
      titulo: 'Contactos',
      numero: consolidadoContactos.totalContactos,
      icon: 'fa-address-book',
      tipo: 'Contactos',
    },
    {
      titulo: 'Colaboradores',
      numero: consolidadoContactos.totalColaboradores,
      icon: 'fa-people-group',
      tipo: 'Colaboradores',
    },
    {
      titulo: 'Filiales',
      numero: consolidadoContactos.totalFiliales,
      icon: 'fa-building-user',
      tipo: 'Filiales',
    },
    {
      titulo: 'Proveedores (física)',
      numero: consolidadoContactos.totalProveedoresFisica,
      icon: 'fa-people-carry-box',
      tipo: 'ProveedoresFisica',
    },
    {
      titulo: 'Proveedores (moral)',
      numero: consolidadoContactos.totalProveedoresMoral,
      icon: 'fa-people-carry-box',
      tipo: 'ProveedoresMoral',
    },
  ]

  let descripcionConcatenadaTags: any[] = []
  let descripcionConcatenadaTipos: any[] = []
  let descripcionConcatenadaPersonaMoral: any[] = []

  const { setPerPage, setPage, page, perPage } = usePagination()
  const [mostrarPanelConsolidado, setMostrarPanelConsolidado] = useState(false)
  const [filtrosAplicados, setFiltrosAplicados] = useState<Filtro[]>([])
  const [tipoConsolidadoSeleccionado, setTipoContactosSeleccionado] = useState<string>('Total')
  const [idContactoSeleccionado, setIdContactosSeleccionado] = useState<string>('')
  const [mostrarPanelBusqueda, setMostrarPanelBusqueda] = useState(false)
  const [textoTooltip, setTextoTooltip] = useState<string>()

  const handleBusqueda = (busquedaContactosForm: BusquedaContactosForm) => {
    const filtros: Filtro[] = []

    Object.entries(busquedaContactosForm).forEach((filtro) => {
      if (typeof filtro[1] === 'object' && filtro[1]?.length !== 0 && filtro[1]) {
        filtro[1].forEach((elemento, index) => {
          filtro[0] === 'tags'
            ? descripcionConcatenadaTags.push(
                `${elemento.etiqueta}${filtro[1].length - 1 !== index ? ', ' : '.'}`
              )
            : filtro[0] === 'tipoContacto'
            ? descripcionConcatenadaTipos.push(
                `${elemento.etiqueta}${filtro[1].length - 1 !== index ? ', ' : '.'}`
              )
            : filtro[0] === 'personaMoral' &&
              descripcionConcatenadaPersonaMoral.push(
                `${elemento.etiqueta}${filtro[1].length - 1 !== index ? ', ' : '.'}`
              )
        })

        filtros.push({
          clave: filtro[0],
          valor: filtro[1][0]?.valor,
          descripcion:
            filtro[0] === 'tags'
              ? descripcionConcatenadaTags
              : filtro[0] === 'tipoContacto'
              ? descripcionConcatenadaTipos
              : filtro[0] === 'personaMoral' && descripcionConcatenadaPersonaMoral,
          etiqueta: filtrosBusqueda[filtro[0] as keyof BusquedaContactosForm].etiqueta,
        })
      } else if (typeof filtro[1] === 'string' && filtro[1]) {
        filtros.push({
          clave: filtro[0],
          valor: filtro[1],
          descripcion: filtro[1],
          etiqueta: filtrosBusqueda[filtro[0] as keyof BusquedaContactosForm].etiqueta,
        })
      }
    })

    setFiltrosAplicados(filtros)
    setPage(1)
  }

  const enviarTextoTooltip = (e: string) => {
    if (textoTooltip === AppConstantes.DESC_TEXTO_COPIADO) {
      setTextoTooltip('')
    } else {
      setTextoTooltip(AppConstantes.DESC_TEXTO_COPIADO)
    }
    navigator.clipboard.writeText(e)
  }

  return (
    <>
      <div className='d-flex'>
        <PanelConsolidadoContactos
          mostrarPanelConsolidado={mostrarPanelConsolidado}
          setMostrarPanelConsolidado={setMostrarPanelConsolidado}
        />
      </div>
      <div className='my-4 container d-flex flex-stack px-4' style={{ maxWidth: '1400px' }}>
        <div className='w-75 d-flex'>
          <h1 className='m-0 text-ui-slate'>Contactos</h1>
          <span className='text-muted fw-lighter fs-4 ps-2'>
            | {paginadoContactos.totalRegistros} total
          </span>
        </div>
        <div className='w-25 d-flex justify-content-end'>
          <Button
            className='btn border border-1 border-ui-slate d-flex align-items-center'
            variant='ui-slate'
            type='button'
            onClick={() => {
              setMostrarPanelConsolidado(true)
            }}>
            <Icon icon='fa-chart-pie' size='fs-5 me-1'></Icon> Consolidado
          </Button>
        </div>
      </div>
      <BodyPagina>
        <div className='card card-flush shadow-sm  m-4'>
          <div className='card-header d-flex'>
            <div className='col-sm-12 d-flex justify-content-between'>
              <h3
                className={`card-title align-items-start ${
                  filtrosAplicados.length > 1 ? 'col-10' : ''
                }`}>
                <PanelFiltrosContactos
                  handleBusqueda={handleBusqueda}
                  mostrarPanelBusqueda={mostrarPanelBusqueda}
                  setMostrarPanelBusqueda={setMostrarPanelBusqueda}
                  filtrosAplicados={filtrosAplicados}
                  setFiltrosAplicados={setFiltrosAplicados}
                  setTipoContactosSeleccionado={setTipoContactosSeleccionado}
                />
              </h3>
              <div className='card-toolbar justify-content-end align-items-start'>
                <Button
                  className='btn btn-sm btn-light-ui-slate me-2 btn-icon btn-sm mb-1'
                  type='button'
                  data-tip='Agregar contacto'>
                  <Icon icon='fa-user-plus' size='fs-7'></Icon>
                </Button>
                <Button
                  className='btn btn-sm btn-light-ui-slate me-2 btn-icon btn-sm mb-1'
                  type='button'
                  data-tip='Descargar'>
                  <Icon icon='fa-download' size='fs-7'></Icon>
                </Button>
                <Button
                  className='btn btn-sm btn-light-ui-slate me-2 btn-icon btn-sm mb-1'
                  type='button'
                  onClick={() => {
                    setMostrarPanelBusqueda(true)
                  }}
                  data-tip='Filtrar'>
                  <Icon icon='fa-filter' size='fs-7'></Icon>
                </Button>
              </div>
            </div>

            {/* CARDS CONSOLIDADO OPCION 1 */}
            <div className='w-100 mt-3'>
              <SwiperContacto>
                {consolidadoSwipers.map((contacto, index) => (
                  <SwiperSlide
                    onClick={() => setTipoContactosSeleccionado(contacto.tipo)}
                    key={index}>
                    <CardConsolidado
                      className={`${
                        tipoConsolidadoSeleccionado === contacto.tipo
                          ? 'ctos-card-consolidado-seleccionado'
                          : ''
                      }`}
                      titulo={contacto.titulo}
                      total={contacto.numero}
                      icon={
                        <Icon
                          icon={contacto.icon}
                          size='fs-3x'
                          className='w-100 align-baseline'></Icon>
                      }></CardConsolidado>
                  </SwiperSlide>
                ))}
              </SwiperContacto>
            </div>

            {/* CARDS CONSOLIDADO OPCION 2 */}
            {/* <div className='row pt-3 m-0 w-100'>
            <div
              className='ctos-scroll d-flex ctos-tag-card-contactos'
             >
              <div className='col-lg-2 me-3'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>
                        Clientes (física)
                      </p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border  card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>
                        Clientes (moral)
                      </p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>Candidatos</p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>Contactos</p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>
                        Colaboradores
                      </p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>Filiales</p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 me-2'>
                <div className='card card-custom card-border ctos-card-border card-stretch h-100'>
                  <div className='card-header  h-100'>
                    <div className='card-title d-block w-100'>
                      <p className='w-100 text-ui-slate card-label fw-bold p-0 mb-3'>
                        Colaboradores
                      </p>
                      <div className=' text-center d-flex'>
                        <span className='fs-6 mx-4 p-4 badge text-wh badge-ui-turquoise mb-3'>
                          {consolidadoContactos.totalClientesFisica}
                        </span>
                        <Icon icon='fa-user' size='fs-3x' className='w-100 mb-2'></Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>

          <div className='card-body py-3'>
            <div className='container-fluid'>
              <div className='row'>
                {/*----OPCIÓN PRINCIPAL------ */}
                {paginadoContactos?.contactos.map((contacto, index) => (
                  <div className='col-xl-3 col-md-4 mb-4 flex-nowrap' key={index}>
                    <CardContacto
                      index={index}
                      contacto={contacto}
                      idContactoSeleccionado={idContactoSeleccionado}
                      setIdContactosSeleccionado={setIdContactosSeleccionado}
                      setTextoTooltip={enviarTextoTooltip}
                      dataTip={textoTooltip!}></CardContacto>
                  </div>
                ))}
                <div className='col-12'>
                  <Pagination
                    currentPage={page}
                    perPage={perPage}
                    total={60}
                    totalPages={5}
                    setPageSize={setPerPage}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BodyPagina>
      <ReactTooltip
        afterHide={(dataTip) => setTextoTooltip(dataTip)}
        getContent={(dataTip) => (
          <div>
            {textoTooltip === AppConstantes.DESC_TEXTO_COPIADO
              ? AppConstantes.DESC_TEXTO_COPIADO
              : dataTip}
          </div>
        )}
        effect='solid'
        delayHide={200}
        delayShow={200}
        delayUpdate={200}
        backgroundColor='#EAEAEA'
        className='tooltip  text-dark'
      />
    </>
  )
}

export default Contactos
