export const Tag: React.FC<Props> = ({ titulo }) => {
  return (
    <span className='badge rounded-pill badge-light-ui-slate text-wrap mb-1 mx-1'>{titulo}</span>
  )
}

interface Props {
  titulo: string
}
