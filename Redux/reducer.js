const initialState = {
    products: [],
    cart: [],
  };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart,{ ...action.payload, quantity: 1 }],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case 'FECTH_SUCCESS':
        return {
            ...state,
            products: action.payload,
        };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
            case 'DECREMENT_QUANTITY': {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                };
            }
            
        default:
        return state;
    }
    }