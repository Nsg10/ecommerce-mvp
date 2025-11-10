import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await api.get(`/api/products/${id}`);
        if (mounted) setProduct(data);
      } catch (err) {
        setError('Product not found');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <p className="muted">Loading product…</p>;
  if (error) return <p className="muted">{error}</p>;
  if (!product) return null;

  return (
    <section className="section product-detail">
      <img className="detail-image" src={product.imageUrl} alt={product.name} />
      <div className="panel stack">
        <h2>{product.name}</h2>
        <p className="muted">{product.description}</p>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <strong className="price">${product.price.toFixed(2)}</strong>
          <span className="muted">{product.inStock ? 'In stock' : 'Out of stock'}</span>
        </div>
        <button className="btn primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}


