import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import PageHead from '../components/PageHead'

export default function NotFound() {
  useSeo({ title: 'Page introuvable', path: '/404' })
  return (
    <>
      <PageHead title="Page introuvable" lede="Cette page n'existe pas ou a été déplacée." />
      <section className="section">
        <div className="wrap">
          <div className="actions">
            <Link className="btn btn--primary" to="/">
              Retour à l'accueil
            </Link>
            <Link className="btn btn--ghost" to="/nos-produits-fiches-techniques">
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
