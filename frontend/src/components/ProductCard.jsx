import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { _id, name, description, price, imageUrl } = product;
  return (
    <div className="card">
      <img src={imageUrl} alt={name} loading="lazy" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-meta">
          <span className="price">${price.toFixed(2)}</span>
          <div className="row">
            <Link to={`/product/${_id}`} className="btn small ghost">
              View
            </Link>
            <button className="btn small" onClick={() => addToCart(product)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


