import { configureStore } from "@reduxjs/toolkit";
import sideBarToggle from "./Slices Folder/SideBarToggle"
import userInfo from "./Slices Folder/UserProfile"
import searchProduct from "./Slices Folder/ProductSearch"
import productApi from "./Slices Folder/ProductApi"
import sortingSlice from "./Slices Folder/filterSlice"
import cartItemReducer from "./Slices Folder/CartItem"
import favProducts from "./Slices Folder/FavoriteProducts"

let productStore = configureStore({
    reducer : {
        toggle : sideBarToggle,
        userProfile : userInfo,
        fetchedProduct : productApi,
        sorting : sortingSlice,
        productSearching : searchProduct,
        cartitem : cartItemReducer,
        favoriteProducts : favProducts,
    }
})

export default productStore