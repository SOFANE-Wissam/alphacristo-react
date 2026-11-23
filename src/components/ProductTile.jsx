import { Link } from 'react-router-dom'
import { asset } from '../data/assets'

export default function ProductTile({ product }) {
  return (
    <Link className="product-tile" to={`/nos-produits-fiches-techniques#${product.id}`}>
      <div className="product-tile__img">
        <img src={asset(product.image)} alt={product.name} loading="lazy" />
      </div>
      <div className="product-tile__body">
        <span className="product-tile__cat">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.short}</p>
      </div>
    </Link>
  )
}
