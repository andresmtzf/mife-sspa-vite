import { Modal as ModalReact } from 'react-bootstrap'
import React from 'react'

type Props = {
  titulo: string
  children?: React.ReactNode
  mostrar: boolean
}

export const ModalArchivarContacto = ({ titulo, children, mostrar }: Props) => {
  return (
    <ModalReact show={mostrar} size={undefined} keyboard={false} backdrop='static'>
      <ModalReact.Header>
        <div className='align-items-center d-flex flex-grow-1 '>
          <h4>{titulo}</h4>
        </div>
      </ModalReact.Header>
      <ModalReact.Body>{children}</ModalReact.Body>
    </ModalReact>
  )
}
