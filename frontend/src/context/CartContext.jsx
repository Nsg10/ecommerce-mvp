import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find((i) => i._id === action.payload._id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i._id === action.payload._id ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ONE': {
      const updated = state.items
        .map((i) => (i._id === action.payload ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);
      return { ...state, items: updated };
    }
    case 'REMOVE_ITEM': {
      return { ...state, items: state.items.filter((i) => i._id !== action.payload) };
    }
    case 'CLEAR': {
      return { items: [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );
  const count = useMemo(() => state.items.reduce((sum, i) => sum + i.quantity, 0), [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      count,
      total,
      addToCart: (product) => dispatch({ type: 'ADD', payload: product }),
      removeOne: (id) => dispatch({ type: 'REMOVE_ONE', payload: id }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
      checkout: () => dispatch({ type: 'CLEAR' })
    }),
    [state.items, count, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}


