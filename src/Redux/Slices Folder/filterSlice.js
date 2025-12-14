import { createSlice } from "@reduxjs/toolkit";

let sortingSlice = createSlice({
    name : "Sorting",
    initialState : {
        sortType : "",
        brand : "",
        products : "",
    },
    reducers : {
        setSortType(state , action){ state.sortType = action.payload.type },
        setBrand(state , action){ state.brand = action.payload.brand },
        setProducts(state , action){ state.products = action.payload.productName }
    }
})

export const {setSortType , setBrand , setProducts} = sortingSlice.actions
export default sortingSlice.reducer