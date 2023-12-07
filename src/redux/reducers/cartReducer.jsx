
// // const initialState = {
// //     cartItems: [],
// // };

// // const cartReducer = (state = initialState, action) => {
// //     let existingItem; // Move the variable declaration outside the switch statement

// //     switch (action.type) {
// //         case 'ADD_TO_CART':
// //         existingItem = state.cartItems.find(item => item.id === action.payload.id);

// //         if (existingItem) {
// //             // If the item is already in the cart, update its quantity
// //             const updatedCartItems = state.cartItems.map(item =>
// //             item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
// //             );

// //             return {
// //             ...state,
// //             cartItems: updatedCartItems,
// //             };
// //         } else {
// //             // If the item is not in the cart, add it with quantity 1
// //             return {
// //             ...state,
// //             cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
// //             };
// //         }

// //         // Add other cases if needed
// //         default:
// //         return state;
// //     }
// // };

// // export default cartReducer;


// const initialState = {
//     cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//     let existingItem; // Move the variable declaration outside the switch statement

//     switch (action.type) {
//         case 'ADD_TO_CART':
//         existingItem = state.cartItems.find(item => item.id === action.payload.id);

//         if (existingItem) {
//             // If the item is already in the cart, update its quantity
//             const updatedCartItems = state.cartItems.map(item =>
//             item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
//             );

//             return {
//             ...state,
//             cartItems: updatedCartItems,
//             };
//         } else {
//             // If the item is not in the cart, add it with quantity 1
//             return {
//             ...state,
//             cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//             };
//         }

//         // Add other cases if needed
//         default:
//         return state;
//     }
// };



// export default cartReducer;

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    let existingItem; // Move the variable declaration outside the switch statement
    let itemIdToRemove; // Move the variable declaration outside the switch statement
    let updatedCartItems; // Move the variable declaration outside the switch statement

    switch (action.type) {
        case 'ADD_TO_CART':
        existingItem = state.cartItems.find(item => item.id === action.payload.id);

        if (existingItem) {
            // If the item is already in the cart, update its quantity
            const updatedCartItems = state.cartItems.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );

            return {
                ...state,
                cartItems: updatedCartItems,
            };
            } else {
                // If the item is not in the cart, add it with quantity 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            };
        }
    
        case 'REMOVE_FROM_CART':
            itemIdToRemove = action.payload.itemId;
            // Remove the item from the cartItems array based on the itemId
            updatedCartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
    
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        // Add other cases if needed
            default:
            return state;
    }
};

export default cartReducer;