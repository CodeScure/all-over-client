import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'primary', icon, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button className={cls} {...rest}>{content}</button>
}
