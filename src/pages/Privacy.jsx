import useSeo from '../components/useSeo'
import PageHead from '../components/PageHead'
import { privacy } from '../data/site'

export default function Privacy() {
  useSeo({
    title: 'Politique de confidentialité',
    description: "Comment Alpha Cristo collecte, utilise et protège les données personnelles des visiteurs de son site.",
    path: '/politique-de-confidentialite',
  })

  return (
    <>
      <PageHead title="Politique de confidentialité" lede={privacy.intro} />
      <section className="section">
        <div className="wrap prose">
          <p className="muted">Mise à jour : {privacy.updated}</p>
          {privacy.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.text?.map((t) => (
                <p key={t.slice(0, 30)}>{t}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
