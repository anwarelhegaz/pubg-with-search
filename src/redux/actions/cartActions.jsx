// actions/cartActions.js
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};

// Add a new action to remove an item from the cart
export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { itemId },
});