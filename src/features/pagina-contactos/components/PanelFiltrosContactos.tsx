import { Input, Button, Icon } from 'ui-react-components-ui'
import { SelectForm } from 'ui-react-components-ui'
import { Filtro } from '../../../models/filtros.type'
import { AppCatalogos } from '../../../utils/Catalogos'
import { useBusquedaContactosForm } from '../models/filtroContactos.type'
import { SpanFiltroAplicado } from './SpanFiltroAplicado'

export const PanelFiltrosContactos = ({
  mostrarPanelBusqueda,
  setMostrarPanelBusqueda,
  setTipoContactosSeleccionado,
  handleBusqueda,
  filtrosAplicados,
  setFiltrosAplicados,
}: Props) => {
  const busquedaContactosForm = useBusquedaContactosForm()
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = busquedaContactosForm

  const quitarFiltros = () => {
    Object.keys(getValues()).forEach((k: any) => setValue(k, null))
    setFiltrosAplicados([])
    handleBusqueda(getValues())
  }

  return (
    <>
      {filtrosAplicados.length > 0 && (
        <div className={` my-3`}>
          <div className='d-flex flex-nowrap mb-2'>
            {filtrosAplicados.length > 1 && (
              <Button
                className='btn btn-sm btn-light-ui-slate me-2 btn-icon btn-sm mb-1 col-1'
                type='button'
                data-tip='Eliminar filtros'
                onClick={quitarFiltros}>
                <Icon icon='fa-trash-can' size='fs-7'></Icon>
              </Button>
            )}
            <div className=' flex-grow-1 ps-3 col-10'>
              {filtrosAplicados.map((filtro, index) => (
                <SpanFiltroAplicado
                  indice={index}
                  {...{
                    filtro,
                    getValues,
                    setValue,
                    handleBusqueda,
                    filtrosAplicados,
                    setFiltrosAplicados,
                  }}></SpanFiltroAplicado>
              ))}
            </div>
          </div>
        </div>
      )}
      <form
        className={`filters ${mostrarPanelBusqueda && 'open'}`}
        onSubmit={handleSubmit(handleBusqueda)}>
        <div className='p-5 border-bottom d-flex justify-content-between align-items-center '>
          <div className='d-flex flex-column'>
            <h1 className='text-ui-slate'>Filtros</h1>
          </div>
          <Button
            type='button'
            onClick={() => setMostrarPanelBusqueda(false)}
            variant='icon'
            className='btn btn-sm btn-light-ui-slate btn-circle'>
            <Icon icon='fa-xmark' size='fs-7'></Icon>
          </Button>
        </div>
        <div className='filter-container pt-6'>
          <div>
            <SelectForm
              control={control}
              errors={errors}
              refOptionLabel='etiqueta'
              refOptionValue='valor'
              name='Tipo/s del contacto'
              inputName='tipoContacto'
              elements={AppCatalogos.CAT_TIPOS_CONTACTO}
              placeholder='Ej. Cliente'
              isMulti={true}
              closeMenuOnSelect={false}
            />
          </div>
          <div>
            <SelectForm
              control={control}
              errors={errors}
              refOptionLabel='etiqueta'
              refOptionValue='valor'
              name='Persona moral'
              inputName='personaMoral'
              elements={AppCatalogos.CAT_PERSONA_MORAL}
              placeholder='Ej. Zurich'
              isMulti={true}
              closeMenuOnSelect={false}
            />
          </div>
          <div>
            <Input
              maxLength={100}
              name='Nombre'
              inputName='nombre'
              register={register}
              placeholder='Ej. Uno Siete'
              errors={errors}
            />
          </div>
          <div>
            <Input
              maxLength={100}
              name='Primer apellido'
              inputName='primerApellido'
              register={register}
              placeholder='Ej. Hernández'
              errors={errors}
            />
          </div>
          <div>
            <Input
              maxLength={100}
              name='Segundo apellido'
              inputName='segundoApellido'
              register={register}
              placeholder='Ej. Gómez'
              errors={errors}
            />
            <div className='mb-3'>
              <SelectForm
                control={control}
                errors={errors}
                refOptionLabel='etiqueta'
                refOptionValue='valor'
                name='Tags'
                inputName='tags'
                elements={AppCatalogos.CAT_ROLES_CONTACTO}
                placeholder='Ej. 2021'
                isMulti={true}
                closeMenuOnSelect={false}
              />
            </div>
          </div>

          <div className='d-flex justify-content-end mt-4'>
            <Button
              variant='outline'
              className='btn me-2 border border-1 border-ui-slate'
              type='button'
              onClick={() => setMostrarPanelBusqueda(false)}>
              Cancelar
            </Button>
            <Button
              className='btn btn-ui-slate'
              type='submit'
              onClick={() => {
                setTipoContactosSeleccionado('Total')
              }}>
              Buscar <i className='fa-solid fa-arrow-right-long ps-2'></i>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

type Props = {
  mostrarPanelBusqueda: boolean
  setMostrarPanelBusqueda: (p: boolean) => void
  handleBusqueda?: any
  filtrosAplicados: Filtro[]
  setFiltrosAplicados: any
  setTipoContactosSeleccionado: (arg: string) => void
}
