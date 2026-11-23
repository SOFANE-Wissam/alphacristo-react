import { Link } from 'react-router-dom'

export default function PageHead({ title, lede, crumb }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <nav className="crumbs" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  )
}
