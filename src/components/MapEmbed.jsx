import { company } from '../data/site'

export default function MapEmbed() {
  return (
    <div className="map">
      <iframe
        title="Carte : Alpha Cristo, Ouled Djellal, Biskra"
        src={company.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
