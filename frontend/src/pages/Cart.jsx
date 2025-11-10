import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, total, removeOne, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="section">
        <div className="panel stack">
          <h2>Your cart is empty</h2>
          <p className="muted">Browse products and add items to your cart.</p>
          <div>
            <Link to="/" className="btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="panel">
        {items.map((i) => (
          <div key={i._id} className="cart-item">
            <img src={i.imageUrl} alt={i.name} />
            <div>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <strong>{i.name}</strong>
                <span className="muted">${i.price.toFixed(2)}</span>
              </div>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <span className="muted">Qty: {i.quantity}</span>
                <div className="row">
                  <button className="btn small ghost" onClick={() => removeOne(i._id)}>
                    − Remove one
                  </button>
                  <button className="btn small" onClick={() => removeItem(i._id)}>
                    Remove item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <strong>Total: ${total.toFixed(2)}</strong>
          <div className="row">
            <button className="btn ghost" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="btn primary">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}


