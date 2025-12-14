import { createSlice } from "@reduxjs/toolkit";

let searchProduct = createSlice({
    name : "Product Searching",
    initialState : {
        value : ""
    },
    reducers : {
        productSearchHandler(state , action){
            state.value = action.payload
        }
    }
})

export const {productSearchHandler} = searchProduct.actions
export default searchProduct.reducer