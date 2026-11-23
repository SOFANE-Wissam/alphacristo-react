import { useState } from 'react'
import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import PageHead from '../components/PageHead'
import ContactDetails from '../components/ContactDetails'
import MapEmbed from '../components/MapEmbed'
import { company } from '../data/site'

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const SUBJECTS = ['Demande de devis', 'Information sur un produit', 'Devenir client', 'Partenariat ou export', 'Autre']

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot: real visitors never fill this in

    // No backend configured yet: open the visitor's mail app with the message pre-filled.
    if (!ENDPOINT) {
      const body = [
        `Nom : ${data.name}`,
        data.company && `Société : ${data.company}`,
        `E-mail : ${data.email}`,
        data.phone && `Téléphone : ${data.phone}`,
        '',
        data.message,
      ]
        .filter((line) => line !== undefined && line !== false)
        .join('\n')
      window.location.href = `mailto:${company.emails[1]}?subject=${encodeURIComponent(
        `${data.subject} – ${data.name}`,
      )}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          Nom complet
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Société <span className="optional">(facultatif)</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
      </div>

      <div className="form__row">
        <label>
          E-mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Téléphone <span className="optional">(facultatif)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <label>
        Objet de votre demande
        <select name="subject" defaultValue={SUBJECTS[0]}>
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label>
        Message
        <textarea name="message" rows="6" required />
      </label>

      {/* Honeypot field, hidden from people */}
      <div className="hp" aria-hidden="true">
        <label>
          Ne pas remplir
          <input name="website" type="text" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <label className="check">
        <input name="consent" type="checkbox" required />
        <span>
          J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la{' '}
          <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
        </span>
      </label>

      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      <div role="status" aria-live="polite">
        {status === 'sent' && (
          <p className="notice notice--ok">Message envoyé. Nous vous répondons pendant nos horaires d'ouverture.</p>
        )}
        {status === 'mailto' && (
          <p className="notice notice--ok">
            Votre application e-mail s'ouvre avec le message prêt à envoyer. Sinon, écrivez-nous à{' '}
            <a href={`mailto:${company.emails[1]}`}>{company.emails[1]}</a>.
          </p>
        )}
        {status === 'error' && (
          <p className="notice notice--error">
            L'envoi a échoué. Réessayez, ou contactez-nous sur WhatsApp au{' '}
            <a href={`tel:${company.whatsapp.tel}`}>{company.whatsapp.label}</a>.
          </p>
        )}
      </div>
    </form>
  )
}

export default function Contact() {
  useSeo({
    title: 'Nous contacter',
    description:
      'Contactez Alpha Cristo à Ouled Djellal, Biskra : téléphone, WhatsApp, e-mail, horaires d\'ouverture et formulaire de contact.',
    path: '/nous-contacter',
  })

  return (
    <>
      <PageHead title="Nous contacter" lede="Devis, informations produit, ouverture de compte : écrivez-nous ou appelez-nous." />

      <section className="section">
        <div className="wrap contact-split">
          <div>
            <h2>Nos coordonnées</h2>
            <ContactDetails />
          </div>
          <div>
            <h2>Formulaire de contact</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map-band">
        <MapEmbed />
      </section>
    </>
  )
}
