import React, { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
// cartReducer = reducerFunction
import Cart from './components/Cart';

function App() {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProduct = () => {
    const newItem = {
      id: Date.now(),
      name: 'Produit ' + Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 100),
    };
    dispatch({ type: 'addItem', payload: newItem });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ Gestion du Panier avec Immer</h1>
      <button onClick={addProduct}>Ajouter un produit</button>
      <Cart cart={state.cart} dispatch={dispatch} />
    </div>
  );
}

export default App;
