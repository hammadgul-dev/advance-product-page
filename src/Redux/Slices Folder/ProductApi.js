import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let fetchProducts = createAsyncThunk("Products" , async()=>{
    let resp = await fetch("https://dummyjson.com/products")
    let jsonResp = await resp.json()
    return jsonResp.products
})

let productSlice = createSlice({
    name : "Fetching Product Api",
    initialState : {
        items : [],
        error : null,
        status : undefined
    },
    extraReducers : (api)=>{
        api.addCase(fetchProducts.pending , (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProducts.rejected , (state)=>{
            state.status = "failed"
        })
        .addCase(fetchProducts.fulfilled , (state , action)=>{
            state.status = "succeeded"
            state.items = action.payload
        })
    }
})

export {fetchProducts}
export default productSlice.reducer