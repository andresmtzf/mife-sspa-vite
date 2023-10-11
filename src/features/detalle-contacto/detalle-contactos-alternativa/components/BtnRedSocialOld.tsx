export const BtnRedSocial: React.FC<{
  href?: string
  redSocial: 'facebook' | 'google' | 'twitter' | 'instagram' | 'youtube' | 'linkedin'
}> = ({ href, redSocial }) => {
  return (
    <a
      href={href ? `${href}` : '#'}
      className={`btn btn-icon btn-sm btn-light-${redSocial} mb-2 me-5 `}
      style={{ width: '30px', height: '30px' }}>
      <i
        className={`fab fa-${
          redSocial === 'facebook' ? `${redSocial}-f` : `${redSocial}`
        } fs-4`}></i>
    </a>
  )
}
