import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            value: []
        },
    reducers: {
            addToCart: (state, action)=>{
                let product = action.payload.product;
                const existingProduct = state.value.find(item => item.product.id === product.id)
                if(existingProduct){
                    existingProduct.quantity ++;
                } else {
                    state.value.push(action.payload);
                }
            },
            removeFromCart: (state, action)=>{
                let product = action.payload.product;
                const existingProduct = state.value.find(item => item.product.id === product.id)
                if(existingProduct && existingProduct.quantity > 1){
                    existingProduct.quantity --;
                } else {
                    state.value = state.value.filter(item => item.product.id !== product.id);
                }
            },
            clearCart: (state)=>{
                state.value=[]
            }
    }
    }
)
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;