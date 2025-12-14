import { createSlice } from "@reduxjs/toolkit";

let cartItem = JSON.parse(localStorage.getItem("myCart")) ?? []

let cartitem = createSlice({
    name : "Cart Item",
    initialState : {
        items : cartItem,
    },
    reducers : {
        handleCartItem(state , action){
           let itemId = action.payload.id
           let ifExist = state.items.find(id => id.productId === itemId)
           if(ifExist){
            ifExist.productQnty += 1
           }
           else{
               let newItem = {
                   productId : action.payload.id,
                   productTitle : action.payload.title,
                   productImg : action.payload.thumbnail,
                   productPrice : action.payload.price,
                   productBrand : action.payload.brand,
                   productQnty : 1,
               }
               state.items.push(newItem)
            }
            localStorage.setItem("myCart" , JSON.stringify(state.items))
        },
        removeCartItem(state , action){
            let productToRemove = action.payload.productId
            state.items = state.items.filter(item => item.productId !== productToRemove)
            localStorage.setItem("myCart" , JSON.stringify(state.items))
        },
        updateQnty(state , action){
            let { type , id } = action.payload
            let sameIdProduct = state.items.find(i=>i.productId === id)
            if(type === "increment"){
                sameIdProduct.productQnty += 1
            }
            else if(type === "decrement"){
                if(sameIdProduct.productQnty > 1){
                    sameIdProduct.productQnty -=1
                }
                else{
                    state.items = state.items.filter(i => i.productId !== id);
                }
            }
            localStorage.setItem("myCart" , JSON.stringify(state.items))
        }
    }
})

export const {handleCartItem , removeCartItem , updateQnty} = cartitem.actions
export default cartitem.reducer