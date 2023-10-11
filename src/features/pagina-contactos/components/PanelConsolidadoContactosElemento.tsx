import { Icon } from 'ui-react-components-ui'

export const PanelConsolidadoContactosElemento = ({
  className = '',
  icon = 'fa-user',
  total,
  texto,
}: Props) => {
  return (
    <div className={`col-6 text-center mb-10 ${className}`}>
      <span className='fs-6 mx-2 badge text-wh badge-ui-turquoise mb-3'>{total}</span>
      <Icon icon={icon} size='fs-3x' className='w-100 mb-2'></Icon>
      <label className='w-100 text-ui-slate'>{texto}</label>
    </div>
  )
}

type Props = {
  className?: string
  icon?: string
  total: number
  texto: string
}
