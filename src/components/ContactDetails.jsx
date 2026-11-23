import Icon from './Icon'
import { company } from '../data/site'

export default function ContactDetails() {
  return (
    <ul className="contact-list">
      <li>
        <Icon name="pin" />
        <div>
          <strong>Adresse</strong>
          <p>
            {company.address[0]}
            <br />
            {company.address[1]}
          </p>
        </div>
      </li>
      <li>
        <Icon name="phone" />
        <div>
          <strong>Téléphone</strong>
          <p>
            WhatsApp : <a href={`tel:${company.whatsapp.tel}`}>{company.whatsapp.label}</a>
            <br />
            Mobile : <a href={`tel:${company.mobile.tel}`}>{company.mobile.label}</a>
          </p>
        </div>
      </li>
      <li>
        <Icon name="mail" />
        <div>
          <strong>E-mail</strong>
          <p>
            {company.emails.map((mail, i) => (
              <span key={mail}>
                {i > 0 && <br />}
                <a href={`mailto:${mail}`}>{mail}</a>
              </span>
            ))}
          </p>
        </div>
      </li>
      <li>
        <Icon name="clock" />
        <div>
          <strong>Horaires d'ouverture</strong>
          <dl className="hours">
            {company.hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </li>
    </ul>
  )
}
