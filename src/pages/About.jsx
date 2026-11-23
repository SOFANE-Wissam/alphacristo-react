import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import PageHead from '../components/PageHead'
import CountUp from '../components/CountUp'
import { asset } from '../data/assets'
import { figures, gallery, mission, presentation } from '../data/site'

function Gallery() {
  const dialogRef = useRef(null)
  const [current, setCurrent] = useState(null)

  const open = (item) => {
    setCurrent(item)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <ul className="gallery">
        {gallery.map((item) => (
          <li key={item.key}>
            <button type="button" onClick={() => open(item)} aria-label={`Agrandir : ${item.alt}`}>
              <img src={asset(item.key)} alt={item.alt} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="lightbox" onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}>
        {current && <img src={asset(current.key)} alt={current.alt} />}
        <form method="dialog">
          <button className="btn btn--light">Fermer</button>
        </form>
      </dialog>
    </>
  )
}

export default function About() {
  useSeo({
    title: 'À propos de nous',
    description:
      "Alpha Cristo, société du groupe Amouri : 450 tonnes de gypse par jour, environ 100 employés, présence dans les 58 wilayas d'Algérie et export vers l'Afrique de l'Ouest et la Libye.",
    path: '/a-propos-de-nous',
    image: asset('gallery1'),
  })

  return (
    <>
      <PageHead
        title="À propos de nous"
        lede="Fièrement membre du groupe Amouri, Alpha Cristo est une société leader dans la production et la distribution de gypse et de ses dérivés en Algérie."
      />

      <section className="section">
        <div className="wrap about-grid">
          <div>
            <h2>Présentation de l'entreprise</h2>
            {presentation.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div>
            <h2>Notre mission</h2>
            {mission.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <blockquote className="pull">
              Alpha Cristo : votre source de plâtre haut de gamme pour des constructions durables et esthétiques.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--chalk">
        <div className="wrap">
          <div className="section-head">
            <h2>Chiffres clés</h2>
          </div>
          <div className="figures">
            {figures.map((f) => (
              <div className="figure" key={f.unit}>
                <p className="figure__value">
                  <CountUp to={f.value} prefix={f.prefix} />
                </p>
                <p className="figure__unit">{f.unit}</p>
                <p className="figure__text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Galerie</h2>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta__inner">
          <div>
            <h2>Travaillons ensemble</h2>
            <p>Découvrez la gamme ou contactez-nous pour un devis.</p>
          </div>
          <div className="actions">
            <Link className="btn btn--light" to="/nos-produits-fiches-techniques">
              Voir nos produits
            </Link>
            <Link className="btn btn--outline-light" to="/nous-contacter">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
