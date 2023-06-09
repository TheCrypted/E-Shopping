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
            }
    }
    }
)
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;