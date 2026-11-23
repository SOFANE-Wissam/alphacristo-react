import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { company, nav } from '../data/site'
import { asset } from '../data/assets'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to="/" className="brand" aria-label="Alpha Cristo, accueil">
          <img src={asset('logo')} alt="Alpha Cristo" width="150" height="60" />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>

        <nav id="main-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="nav__whatsapp" href={`https://wa.me/${company.whatsapp.wa}`} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={18} />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="footer-brand">Alpha Cristo</p>
          <p className="footer-blurb">
            {company.legalName}, {company.group} : production et distribution de gypse et de ses dérivés pour les
            industries de la construction et de l'agriculture.
          </p>
          <a className="footer-social" href={company.facebook} target="_blank" rel="noreferrer">
            <Icon name="facebook" size={18} /> Facebook
          </a>
        </div>

        <div>
          <h2 className="footer-title">Liens rapides</h2>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="whatsapp" size={18} />
              <span>
                WhatsApp : <a href={`tel:${company.whatsapp.tel}`}>{company.whatsapp.label}</a>
              </span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>
                Mobile : <a href={`tel:${company.mobile.tel}`}>{company.mobile.label}</a>
              </span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.emails[1]}`}>{company.emails[1]}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>
                {company.addressOneLine}
                <br />
                <a href={company.mapLink} target="_blank" rel="noreferrer">
                  Voir sur la carte
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Horaires d'ouverture</h2>
          <dl className="hours hours--footer">
            {company.hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="wrap footer-legal">
        <p>© {new Date().getFullYear()} Alpha Cristo. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to the #anchor if there is one, otherwise back to the top on every page change.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
