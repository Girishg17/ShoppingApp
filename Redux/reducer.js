const initialState = {
    products: [],
    cart: [],
  };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case 'fetch_success':
            
        return {
            ...state,
            products: action.payload,
        };
        default:
        return state;
    }
    }