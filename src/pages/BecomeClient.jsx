import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import PageHead from '../components/PageHead'
import ContactDetails from '../components/ContactDetails'
import MapEmbed from '../components/MapEmbed'
import Icon from '../components/Icon'
import { clientFiles } from '../data/site'

export default function BecomeClient() {
  useSeo({
    title: 'Devenir client',
    description:
      'Documents à fournir pour ouvrir un compte client chez Alpha Cristo : entreprises de réalisation, entreprises de transformation et revendeurs.',
    path: '/devenir-client',
  })

  return (
    <>
      <PageHead
        title="Devenir client"
        lede="Pour ouvrir un compte chez Alpha Cristo, préparez le dossier qui correspond à votre activité."
      />

      <section className="section">
        <div className="wrap">
          <div className="files">
            {clientFiles.map((group) => (
              <div className="files__group" key={group.title}>
                <h2>{group.title}</h2>
                <ul className="checklist">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--chalk">
        <div className="wrap contact-split">
          <div>
            <h2>Une question sur votre dossier ?</h2>
            <p>Contactez-nous pour recevoir des informations ou des précisions sur notre entreprise et sur la constitution du dossier.</p>
            <ContactDetails />
            <Link className="btn btn--primary" to="/nous-contacter">
              Écrire à l'équipe
            </Link>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
