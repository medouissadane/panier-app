import { produce } from 'immer';

const initialState = {
    cart: [],
};


function cartReducer(state = initialState, action) {

    return produce(state, draft => {
        switch (action.type) {
            case 'addItem':
                draft.cart.push(action.payload);
                break;
            case 'removeItem':
                draft.cart = draft.cart.filter(item => item.id !== action.payload);
                break;
            case 'clearCart':
                draft.cart = [];
                break;
            default:
                break;
        }
    });
}

export default cartReducer;
