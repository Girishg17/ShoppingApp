// actions.js
export function fetchProducts() {
    return {
        type: 'FETCH_PRODUCTS',
    };
}

export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
}

export function removeFromCart(product) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    };
}

export function incrementQuantity(product) {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: product,
    };
}

export function decrementQuantity(product) {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: product,
    };
}
