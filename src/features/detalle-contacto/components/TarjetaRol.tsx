export const TarjetaRol: React.FC<Props> = ({ titulo, descripcion, icono }) => {
  return (
    <div className='border border-gray-300 border-dashed rounded w-125px py-3 px-4 mb-3 me-3 border'>
      <div className='d-flex flex-column align-items-start'>
        <div>
          <i className={`fa-solid ${icono} fs-3 text-ui-slate`}></i>
        </div>
        <div className='d-flex align-items-center fs-6 fw-bolder'>{titulo}</div>
      </div>
      {descripcion ? <div className='fw-bold fs-7 text-gray-500'>{descripcion}</div> : null}
    </div>
  )
}

interface Props {
  titulo: string
  descripcion?: string
  icono: string
}

export const MAPA_ROLES_ICONO: Map<string, string> = new Map([
  ['Colaborador', 'fa-user-tie'],
  ['Cliente', 'fa-user-group'],
  ['Proveedor', 'fa-people-carry-box'],
  ['Usuario de sistema', 'fa-user-gear'],
  ['Candidato', 'fa-person-circle-question'],
  ['Empresa administrada', 'fa-building'],
  ['Representante Legal', 'fa-user-tie'],
])
