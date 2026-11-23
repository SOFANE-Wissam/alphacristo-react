import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import ProductTile from '../components/ProductTile'
import { asset } from '../data/assets'
import { products } from '../data/site'

function Sheet({ product }) {
  const { id, name, intro, usage, usageTitle, application, specs, onRequest, image } = product
  return (
    <article className="sheet" id={id}>
      <header className="sheet__head">
        <div className="sheet__img">
          <img src={asset(image)} alt={name} loading="lazy" />
        </div>
        <div>
          <h3>{name}</h3>
          <p className="lead">{intro}</p>
        </div>
      </header>

      <div className="sheet__body">
        <div>
          <h4>{usageTitle || "Domaine d'utilisation"}</h4>
          <p>{usage}</p>
        </div>
        {application && (
          <div>
            <h4>Application et stockage</h4>
            <p>{application}</p>
          </div>
        )}
      </div>

      {specs ? (
        <table className="specs">
          <caption className="sr-only">Caractéristiques techniques : {name}</caption>
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="on-request">{onRequest}</p>
      )}

      <div className="actions">
        <a className="btn btn--ghost" href={asset('catalogue')} target="_blank" rel="noreferrer">
          <Icon name="download" size={18} /> Télécharger le catalogue
        </a>
        <Link className="btn btn--primary" to="/nous-contacter">
          {specs ? 'Demander un devis' : 'Contacter le service technique'}
        </Link>
      </div>
    </article>
  )
}

export default function Products() {
  useSeo({
    title: 'Nos produits et fiches techniques',
    description:
      "Plâtre Crystal Plus, plâtre de moulage, plâtre de construction, PRO, Extra Fin et gypse agricole : caractéristiques techniques, consommation et conseils d'application.",
    path: '/nos-produits-fiches-techniques',
    image: asset('crystalPlus'),
  })

  return (
    <>
      <section className="page-head page-head--products">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Nos produits</span>
          </nav>
          <h1>Nos produits en plâtre et gypse</h1>
          <p className="lede">
            Des solutions fabriquées à partir d'un gypse naturel de haute pureté, conçues pour la construction, la
            décoration, le moulage et l'agriculture.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="#gamme">
              Découvrir la gamme
            </a>
            <a className="btn btn--ghost" href={asset('catalogue')} target="_blank" rel="noreferrer">
              <Icon name="download" size={18} /> Catalogue PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="gamme">
        <div className="wrap">
          <div className="section-head">
            <h2>Une gamme adaptée à chaque application</h2>
            <p className="lede">
              Sélectionnez un produit pour consulter ses domaines d'utilisation, ses conseils d'application et ses
              caractéristiques techniques.
            </p>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <ProductTile key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--chalk" id="fiches">
        <div className="wrap catalog">
          <aside className="catalog__index" aria-label="Fiches techniques">
            <p className="catalog__index-title">Fiches techniques</p>
            <ul>
              {products.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>{p.name}</a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="catalog__sheets">
            {products.map((p) => (
              <Sheet key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta__inner">
          <div>
            <h2>Besoin d'aide pour choisir un produit ?</h2>
            <p>Notre équipe vous accompagne dans le choix de la solution adaptée à votre chantier ou à vos besoins agricoles.</p>
          </div>
          <div className="actions">
            <Link className="btn btn--light" to="/nous-contacter">
              Contacter Alpha Cristo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
