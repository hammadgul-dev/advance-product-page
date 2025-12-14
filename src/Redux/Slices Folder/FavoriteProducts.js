import { createSlice } from "@reduxjs/toolkit";

let favoriteProduct = createSlice({
    name : "Favorite Products",
    initialState : {
        favProducts : JSON.parse(localStorage.getItem("favProducts")) ?? [],
    },
    reducers : {
        handlerFavItems(state , action){
            let productId = action.payload.itemId
            if(!state.favProducts.find(i => i.id === productId)){
                let newFavProductArr = { 
                    id : productId,
                    name : action.payload.itemName
                 }
                state.favProducts.push(newFavProductArr)
                localStorage.setItem("favProducts" , JSON.stringify(state.favProducts))
            }       
        },

        handlerRemoveproduct(state , action){
            state.favProducts = state.favProducts.filter(i=>i.id !== action.payload)
            localStorage.setItem("favProducts" , JSON.stringify(state.favProducts))
        }
    }
})

export const {handlerFavItems , handlerRemoveproduct} = favoriteProduct.actions
export default favoriteProduct.reducer