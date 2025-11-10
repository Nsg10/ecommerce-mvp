import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <section className="section">
      <div className="panel stack" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #22c55e, #34d399)',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.35)'
            }}
          />
          <h2 style={{ margin: 0 }}>Thank you for your order!</h2>
        </div>
        <p className="muted" style={{ marginTop: '0.4rem' }}>
          Your order was placed successfully. A confirmation has been generated.
        </p>
        <div style={{ marginTop: '0.6rem' }}>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}


