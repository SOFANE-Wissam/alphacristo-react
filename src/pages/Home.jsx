import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import ProductTile from '../components/ProductTile'
import HeroCarousel from '../components/HeroCarousel'
import { asset } from '../data/assets'
import { commitments, company, groupCompanies, presentation, products, strengths } from '../data/site'

export default function Home() {
  useSeo({
    description:
      'SARL Alpha Cristo Industrial, groupe Amouri : production et distribution de plâtre et de gypse en Algérie. 450 tonnes par jour, livraison dans les 58 wilayas.',
    path: '/',
    image: asset('homePhoto'),
  })

  // All products appear in the hero carousel
  const heroItems = products

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1>Le plâtre haut de gamme des constructions durables</h1>
            <p className="lede">
              {company.legalName} produit et distribue plâtre et gypse pour la construction, la décoration, le moulage et
              l'agriculture, dans les 58 wilayas d'Algérie.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" to="/nos-produits-fiches-techniques">
                Voir nos produits
              </Link>
              <Link className="btn btn--ghost" to="/nous-contacter">
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <HeroCarousel items={heroItems} />
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="section">
        <div className="wrap split">
          <div className="split__media">
            <img src={asset('homePhoto')} alt="Site de production Alpha Cristo à Ouled Djellal" loading="lazy" />
          </div>
          <div className="split__text">
            <h2>Un producteur algérien de gypse, membre du groupe Amouri</h2>
            <p className="lead">{presentation[0]}</p>
            <p>{presentation[1]}</p>
            <Link className="btn btn--ghost" to="/a-propos-de-nous">
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section section--chalk">
        <div className="wrap">
          <div className="section-head">
            <h2>La qualité au cœur de votre construction</h2>
          </div>
          <div className="features">
            {strengths.map((s) => (
              <div className="feature" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Nos produits</h2>
            <p className="lede">Six références pour la finition, le moulage, la construction et l'agriculture.</p>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <ProductTile key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="section-head">
            <h2>Notre engagement</h2>
          </div>
          <div className="commitments">
            {commitments.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Les entreprises du groupe Amouri</h2>
          </div>
          <ul className="group-grid">
            {groupCompanies.map((g) => (
              <li key={g.name}>
                <a href={g.href} target="_blank" rel="noreferrer">
                  <span className="group-grid__logo">
                    <img src={asset(g.img)} alt="" loading="lazy" />
                  </span>
                  <span className="group-grid__name">{g.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap cta__inner">
          <div>
            <h2>Un chantier ou un projet agricole ?</h2>
            <p>Notre équipe vous aide à choisir le produit adapté et vous répond du dimanche au jeudi.</p>
          </div>
          <div className="actions">
            <Link className="btn btn--light" to="/nous-contacter">
              Nous contacter
            </Link>
            <Link className="btn btn--outline-light" to="/devenir-client">
              Devenir client
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
