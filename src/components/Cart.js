import React from 'react';

const Cart = ({ cart, dispatch }) => {
    return (
        <div>
            <h2>🛒 Panier</h2>
            {cart.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price}€
                            <button onClick={() => dispatch({ type: 'removeItem', payload: item.id })}>
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => dispatch({ type: 'clearCart' })}>Vider le panier</button>
        </div>
    );
};

export default Cart;
