export const DatoGeneral: React.FC<Props> = ({ titulo, dato }) => {
  return (
    <div className='d-flex fs-6 fw-semibold align-items-center'>
      <div className='text-gray-600 flex-grow-1 me-4'>{titulo}</div>
      <div className='text-gray-800 text-xxl-end'>{dato}</div>
    </div>
  )
}

interface Props {
  titulo: string
  dato: string
}
