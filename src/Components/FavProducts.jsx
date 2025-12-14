// import { useState } from "react"
import style from "../Components Style/FavProduct.module.css"
import { useDispatch, useSelector } from "react-redux"
import { handlerRemoveproduct } from "../Redux/Slices Folder/FavoriteProducts"

function FavProducts() {
    let dispatch = useDispatch()
    let favProduct = useSelector(state => state.favoriteProducts.favProducts)

  return (
    <div className={style.container} >

        <div className={style["product-container"]}>
           { favProduct.length === 0 ? 
           ( <h1>Favorite List Is EMPTY!</h1> ) :
           ( favProduct.map(product => (
            <div className={style["fav-item-card"]} key={product.id}>
                    <h1 className={style["product-title"]}>{product.name}</h1>
                    <button className={style["remove-btn"]}
                     onClick={()=> dispatch(handlerRemoveproduct(product.id))}>Remove
                     </button>
            </div>
            ))  )}
        </div>

    </div>
  )
}

export default FavProducts
