const customStyles = {
  maxWidth: '1400px',
}

export const HeaderPagina: React.FunctionComponent<{
  titulo: string
  children: React.ReactNode
}> = ({ titulo, children }) => {
  return (
    <div className='my-4 container d-flex flex-stack' style={customStyles}>
      <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
        <h1 className='page-heading d-flex text-dark fw-bold fs-2 flex-column justify-content-center my-0'>
          {titulo}
        </h1>
      </div>
      <div className='d-flex align-items-center gap-2 gap-lg-3'>{children}</div>
    </div>
  )
}

export const BodyPagina: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='my-6 container p-0' style={customStyles}>
      {children}
    </div>
  )
}
