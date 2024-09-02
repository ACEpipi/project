// src/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItems: 0,
        totalCost: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            
            state.totalItems += 1;
            state.totalCost += product.price;
        },
        increment: (state, action) => {
            const productId = action.payload;
            const item = state.items.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                state.totalItems += 1;
                state.totalCost += item.price;
            }
        },
        decrement: (state, action) => {
            const productId = action.payload;
            const item = state.items.find(item => item.id === productId);
            if (item && item.quantity > 0) {
                item.quantity -= 1;
                state.totalItems -= 1;
                state.totalCost -= item.price;
            }
        },
        remove: (state, action) => {
            const productId = action.payload;
            const item = state.items.find(item => item.id === productId);
            if (item) {
                state.totalItems -= item.quantity;
                state.totalCost -= item.price * item.quantity;
                state.items = state.items.filter(item => item.id !== productId);
            }
        },
    },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
