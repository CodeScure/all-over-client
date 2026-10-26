import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { Logo, MenuIcon, CloseIcon } from './Icons.jsx'
import Button from './Button.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <Logo />
          <span className="brand__name">{site.shortName}</span>
        </Link>

        <nav
          id="primary-nav"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/admissions" className="nav__cta">Apply now</Button>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
    </header>
  )
}
