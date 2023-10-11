export const Symbol = ({
  tamanio = '50px',
  backgroundColor,
  children,
  colorTexto = 'text-success',
  isCircular,
  className,
}: Props) => {
  const label = backgroundColor ? `text-inverse-${backgroundColor}` : colorTexto

  return (
    <>
      <div
        className={`symbol symbol-${tamanio}${isCircular ? ' symbol-circle' : ''}${
          className ? ` ${className}` : ''
        }`}>
        <div
          className={`symbol-label fs-2 fw-semibold${
            backgroundColor ? ` bg-${backgroundColor}` : ''
          } ${label}`}>
          {children}
        </div>
      </div>
    </>
  )
}

type Props = {
  /**Define tamaño del symbol */
  tamanio?: string
  /**Define el color de fondo del symbol*/
  backgroundColor?: string
  children?: React.ReactNode
  /**Define el color del label, si no se define el color del fondo*/
  colorTexto?: string
  /**Determina si el symbol será redondo*/
  isCircular?: boolean
  className?: string
}
