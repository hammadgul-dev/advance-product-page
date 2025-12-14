import { useDispatch } from "react-redux";
import style from "../Components Style/ProductCard.module.css"
import { IoStar } from "react-icons/io5"
import { handleCartItem } from "../Redux/Slices Folder/CartItem";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
    let dispatch = useDispatch()
    let navigate = useNavigate()
  return (
    <>
    <div className={style["product-card"]}>

        <div className={style["img-wrapper"]}>
            <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className={style["product-detail"]}>
            <div className={style["product-summary"]}>
                <h2>{product.title}</h2>
               <span className={style["rating"]}>
                    {(() => {
                        const stars = [];
                        for (let i = 0; i < Math.floor(product.rating); i++) {
                        stars.push(<IoStar key={i} />);
                        }
                        return stars;
                    })()}
                    </span>
                <h3 className={style["product-price"]}>{product.price.toFixed(2)}</h3>
            </div>
            <div className={style.brand}>
                <p>Brand: </p><span>{product.brand ? product.brand : "No Brand"}</span>
            </div>
        </div>

        <div className={style["product-actions"]}>
            <button onClick={()=> navigate(`/product-detail/${product.id}`)} className={style["detail-btn"]}>Product Details</button>
            <button onClick={()=> dispatch(handleCartItem(product)) } className={style["add-to-cart"]}>Add To Cart</button>
        </div>

    </div>
    </>
  )
}

export default ProductCard