import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1} className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
