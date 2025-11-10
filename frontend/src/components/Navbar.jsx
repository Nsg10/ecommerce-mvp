import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { count } = useCart();
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="brand">
          <div className="logo" />
          <span>E‑Shop</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart" className="cart-pill">
            <span>Cart</span>
            <strong>{count}</strong>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}


