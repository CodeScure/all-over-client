import { Link } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { Logo, PhoneIcon, MailIcon, PinIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Link to="/" className="brand" aria-label={`${site.name} home`}>
            <Logo />
            <span className="brand__name">{site.shortName}</span>
          </Link>
          <p>
            Study in person, online, or somewhere in between. Our classrooms
            reach wherever our students are.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__list">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Get in touch</h2>
          <ul className="footer__list footer__list--icons">
            <li>
              <PhoneIcon width={18} height={18} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <MailIcon width={18} height={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <PinIcon width={18} height={18} />
              <span>{site.address.join(', ')}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Demo site. Contact details and programs are placeholders.</p>
      </div>
    </footer>
  )
}
