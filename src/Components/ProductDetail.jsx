import { IoStar } from "react-icons/io5"
import style from "../Components Style/ProductDetail.module.css"
import { GoHeart } from "react-icons/go"
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { handlerFavItems } from "../Redux/Slices Folder/FavoriteProducts";

function ProductDetail() {
  let { id } = useParams();
let dispatch = useDispatch()
let favProducts = useSelector(state => state.favoriteProducts.favProducts);
let getAllProduct = useSelector(state => state.fetchedProduct.items);
let product = getAllProduct.find(i => i.id == id); 
let isFav = favProducts.some(i => i.id === product?.id); 

  return (
    <div className={style["product-container"]}>
      { product && (
    <div className={style["product-detail"]}>
      <div className={style["img-wrapper"]}>
        <img src={product.thumbnail} />
      </div>
      <div className={style.details}>
        <div className={style["product-summary"]}>
            <h1 className={style["product-name"]}>{product.title}</h1>
            <span className={style["rating"]}>
              {(()=> {
                let stars = []
                for(let i = 0 ; i < Math.floor(product.rating) ; i++ ){
                  stars.push(<IoStar key={i}/>)
                }
                return stars
              })()}
              </span>
            <span 
            className={style["favorite-icon"]}
            onClick={() => dispatch(handlerFavItems({ itemId: product.id, itemName: product.title }))}>
            {isFav ? <FaHeart style={{color: "red"}} /> : <GoHeart />}
          </span>

        </div>
        <div className={style["price-wrapper"]}>
          <h1>{product.price}</h1>
        </div>
        <div className={style["category-wrapper"]}>
          <p>Category</p>
          <div className={style.category}>
              <span>{product.category}</span>
          </div>
        </div>
        <div className={style["tag-wrapper"]}>
          <p>Tags</p>
          <div className={style.tag}>
              { product.tags.map(tags => (
                <span key={tags}>{tags}</span>
              )) }
          </div>
        </div>
        <div className={style["description"]}>{product.description}</div>
      </div>
    </div>
  )}

    </div>
  )
}

export default ProductDetail
