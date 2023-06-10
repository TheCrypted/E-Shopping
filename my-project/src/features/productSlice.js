import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getAll", async()=>{
	const response = await fetch('https://fakestoreapi.com/products').catch(error => {
		console.log(error)})
	return await response.json()
})


const productSlice = createSlice({
	name: "products",
	initialState: {
		value: [],
		loading: false
	},
	extraReducers:(builder)=>{
		builder.addCase(getProducts.pending, (state)=>{
			state.loading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, action)=>{
			state.value = action.payload
			state.loading = false;
		})
	}
})

export default productSlice.reducer