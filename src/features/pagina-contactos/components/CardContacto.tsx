import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'ui-react-components-ui'
import { AppConstantes } from '../../../utils/Constantes'
import { useArchivoContactoForm } from '../models/archivadoContactos.type'
import { Contacto } from '../models/contacto.type'
import { ModalArchivarContacto } from './ModalArchivarContacto'

type TProps = {
  index: number
  contacto: Contacto
  idContactoSeleccionado: string
  setIdContactosSeleccionado: (arg: string) => void
  setTextoTooltip: (arg: string) => void
  dataTip: string
}

export const CardContacto = ({
  index,
  contacto,
  idContactoSeleccionado,
  setIdContactosSeleccionado,
  setTextoTooltip,
  dataTip,
}: TProps) => {
  const [cardArchivada, setCardArchivada] = useState(contacto.esArchivado)
  const [mostrarModal, setMostrarModal] = useState(false)
  const formContactoArchivado = useArchivoContactoForm()
  const { control } = formContactoArchivado

  useEffect(() => {}, [cardArchivada])

  const cerrarModal = (e: boolean) => {
    setMostrarModal(false)
    setCardArchivada(e)
  }

  return (
    <div className='card card-custom gutter-b card-border ctos-card-border p-0 h-100'>
      <ModalArchivarContacto
        titulo={cardArchivada ? '¿Desarchivar contacto?' : '¿Archivar contacto?'}
        mostrar={mostrarModal}>
        <>
          <Button
            className='btn btn-ui-slate'
            type='button'
            onClick={() => {
              cerrarModal(cardArchivada ? false : true)
            }}>
            Sí
          </Button>{' '}
          <Button
            className='btn btn-ui-slate'
            type='button'
            onClick={() => {
              cerrarModal(cardArchivada ? true : false)
            }}>
            No
          </Button>
        </>
      </ModalArchivarContacto>
      <div className='card-header'>
        <div className='w-100 d-flex'>
          <div className='p-0 col-2'>
            <div
              className='form-check form-switch p-0 pt-3 w-20'
              data-tip={`${cardArchivada ? 'Desarchivar' : 'Archivar'}`}>
              <Controller
                control={control}
                name={'esArchivado'}
                render={({ field: { onChange } }) => (
                  <input
                    className='form-check-input ms-0 switch-color-bg'
                    type='checkbox'
                    checked={cardArchivada}
                    onChange={() => {
                      onChange(true)
                    }}
                    onClick={() => setMostrarModal(true)}
                    name='esArchivado'></input>
                )}></Controller>
            </div>
          </div>
          <div
            className={`col-10 d-flex align-items-center justify-content-end ${
              cardArchivada ? 'ctos-card-disabled' : ''
            }`}>
            <Link to={`/contactos/detalle-contacto`}>
              <Button
                className='btn btn-outline-ui-turquoise btn-icon btn-circle btn-sm'
                type='button'
                onClick={() => {}}
                data-tip='Ver detalle'>
                <Icon icon='fa-address-card'></Icon>
              </Button>
            </Link>
            <Button
              className='btn btn-outline-ui-turquoise btn-icon btn-circle btn-sm'
              type='button'
              onClick={() => {}}
              data-tip='Editar'>
              <Icon icon='fa-solid fa-pen-to-square fs-3'></Icon>
            </Button>
          </div>
        </div>

        <div className={`d-block w-100 mt-5 ${cardArchivada ? 'ctos-card-disabled' : ''}`}>
          <div className='container m-0 p-0 mt-5 mb-5'>
            <div className='row m-0'>
              <div className='col-md-12 col-sm-6 col-lg-7 p-0 mb-10 me-10'>
                <span className='card-label fw-bold p-0 text-ui-slate text-start me-0 fs-5'>
                  {contacto.nombre}
                </span>
                <div className='row m-0'>
                  <span
                    data-tip={`${contacto.correo}`}
                    className=' m-0 text-gray-600 col-10 p-0'
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}>
                    <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
                  </span>

                  <div className='col-1'>
                    <i
                      data-tip={
                        dataTip === AppConstantes.DESC_TEXTO_COPIADO
                          ? AppConstantes.DESC_TEXTO_COPIADO
                          : AppConstantes.DESC_COPIAR_CORREO
                      }
                      className='fa-solid fa-copy cursor-pointer fa-lg'
                      onClick={() => {
                        setTextoTooltip(`${contacto.correo}`)
                      }}></i>
                  </div>
                </div>
              </div>

              <div className='col-md-12 col-sm-6 col-lg-3 justify-content-center d-flex p-0'>
                <a className='symbol symbol-75px flex-shrink-0 me-3'>
                  {contacto.imagen ? (
                    <img alt='Pic' className='ms-3' src={contacto.imagen} />
                  ) : (
                    <>
                      <i className='fa-solid fa-circle-user fa-6x ms-3'> </i>
                    </>
                  )}
                  <span className='symbol-badge badge badge-circle bg-danger start-100 ctos-badge-card-contactos'></span>
                </a>
              </div>
            </div>
          </div>

          <div className='w-100 mt-10'>
            {contacto.tiposContacto.length <= 2 ? (
              contacto.tiposContacto.map((tipo, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <span className='fw-normal text-gray-700 mb-0 d-flex' key={index}>
                      {tipo}
                      <div data-tip='Tipos del contacto'>
                        <Icon icon='fa-circle-question' className='ms-1' size='fa-sm'></Icon>
                      </div>
                    </span>
                  ) : (
                    <p className='fw-normal text-gray-700 mb-0' key={index}>
                      {tipo}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div key={index}>
                <span className='fw-normal text-gray-700 mb-0 d-flex'>
                  {contacto.tiposContacto[0]}
                  <div data-tip='Tipos del contacto'>
                    <Icon icon='fa-circle-question' className='ms-1' size='fa-sm'></Icon>
                  </div>
                </span>
                <div className='d-flex justify-content-between row'>
                  <p className='fw-normal text-gray-700 mb-0 col-6'>{contacto.tiposContacto[1]}</p>
                  <p
                    className={`${
                      idContactoSeleccionado === contacto.id ? 'd-none' : 'cursor-pointer'
                    } m-0 fw-bold text-ui-slate text-end fst-italic col-6 ctos-ver-mas`}
                    onClick={() => {
                      setIdContactosSeleccionado(contacto.id)
                    }}>
                    Ver más
                  </p>
                  <div
                    className={`${
                      idContactoSeleccionado === contacto.id ? ' ' : 'd-none'
                    } w-100 col-6`}>
                    {contacto.tiposContacto.map((tipo, index) => (
                      <div className='d-flex justify-content-between row' key={index}>
                        <p className='fw-normal text-gray-700 mb-0 col-6'>
                          {index > 1 && `${tipo}`}
                        </p>
                        {index === contacto.tiposContacto.length - 1 && (
                          <p
                            className={`${
                              idContactoSeleccionado === contacto.id ? 'cursor-pointer' : ''
                            } m-0 fw-bold text-ui-slate text-end fst-italic col-6 ctos-ver-menos`}
                            onClick={() => {
                              setIdContactosSeleccionado('')
                            }}>
                            Ver menos
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`card-body ${cardArchivada ? 'ctos-card-disabled' : ''}`}>
        <div className='text-gray-700 d-flex align-items-center mb-2'>
          <div>
            <i
              key={index}
              className='fa-solid fa-location-dot fa-lg text-ui-slate me-4'
              data-tip='Dirección'></i>
          </div>
          <div className='justify-content-between w-100 d-flex'>
            <p className='mb-0'>{contacto.direccion}</p>
          </div>
          <div>
            <i
              key={index}
              data-tip={
                dataTip === AppConstantes.DESC_TEXTO_COPIADO
                  ? AppConstantes.DESC_TEXTO_COPIADO
                  : AppConstantes.DESC_COPIAR_DIRECCION
              }
              className='fa-solid fa-copy cursor-pointer fa-lg ms-2'
              onClick={() => {
                setTextoTooltip(`${contacto.direccion}`)
              }}></i>
          </div>
        </div>
        <div className='text-gray-700 d-flex align-items-center mb-2'>
          <div>
            <i
              key={index}
              className='fa-solid fa-phone fa-lg me-3 text-ui-slate'
              data-tip='Número telefónico'></i>
          </div>
          <div className='justify-content-between w-100 d-flex'>
            <a
              className='mb-0 me-1'
              href={`tel:+${contacto.telefono.extension}${contacto.telefono.numero}`}>
              (+{contacto.telefono.extension}) {contacto.telefono.numero}
            </a>
          </div>
          <div>
            <i
              key={index}
              data-tip={'Copiar teléfono'}
              className='fa-solid fa-copy cursor-pointer fa-lg ms-2'
              onClick={() =>
                setTextoTooltip(`${contacto.telefono.extension}${contacto.telefono.numero}`)
              }></i>
          </div>
        </div>
        <div className='text-gray-700 d-flex mb-2'>
          <div>
            {contacto.tags && (
              <i
                key={index}
                className='fa-solid fa-tags fa-lg me-3 text-ui-slate mt-4'
                data-tip='Etiquetas'></i>
            )}
          </div>
          <div className='ctos-scroll ctos-tag-card-contactos d-flex'>
            {contacto.tags?.map((tag, index) => (
              <span key={index} className='badge badge-secondary me-2 p-2'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
