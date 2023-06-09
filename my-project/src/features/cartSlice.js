import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            value: []
        },
    reducers: {
            addToCart: (state, action)=>{
                state.value.push(action)
            }
    }
    }
)
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer