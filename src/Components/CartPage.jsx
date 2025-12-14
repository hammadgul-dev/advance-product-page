import style from "../Components Style/CartPage.module.css"
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateQnty } from "../Redux/Slices Folder/CartItem";
import { useEffect, useState } from "react";

function CartPage() {
  let dispatch = useDispatch()
  let [total , setTotal] = useState(0)
  let [discountAmount , setDiscount] = useState(0)
  let [error , setError] = useState('')
  let [inputValue , setValue] = useState('')
  let [isToggle , setToggle] = useState(false)
  let addedCartProduct = useSelector(state => state.cartitem.items)
 
  useEffect(()=>{
     let calculateTotal = addedCartProduct.reduce((prev,current)=> { return prev + Number(current.productPrice) * current.productQnty },0)
    setTotal(calculateTotal.toFixed(2))
  },[addedCartProduct])

  function handleDiscount(){
 if(inputValue === "SAVE10") {
    let discount = total * 0.9;   
    setDiscount(discount.toFixed(2));
  } 
  else{
    setError("Incorrect Discount CODE!");
    setTimeout(()=>{ setError("") },2000)
  }
}

  return (
    <div className={style["cart-container"]}>
  
      <div className={style["cart-item"]}>
        { 
        addedCartProduct.length === 0 ? 
        (<h1>Cart Is EMPTY!</h1>) 
        : (
          addedCartProduct.map(item  => (
      <div key={item.productId} className={style["product-card"]}>
        <div className={style["img-wrapper"]}>
          <img src={item.productImg} alt="" />
        </div>
        <div className={style["product-detail"]}>
            <h2 className={style.name}>{item.productTitle}</h2>
            <div className={style["priceQnty-wrapper"]}>
                <span>{item.productPrice}</span>
                <div className={style["qnty-ctrl"]}>
                <p>
                  <span onClick={()=>dispatch(updateQnty({ id : item.productId , type : "decrement"}))}>
                    <TiMinus />
                    </span>{item.productQnty}<span onClick={()=>dispatch(updateQnty({ id : item.productId , type : "increment"}))}>
                      <FaPlus />
                      </span>
                      </p>
                </div>
            </div>
            <div className={style["brand-name"]}>
            <p>Brand : <span>{item.productBrand || "No Brand"}</span></p>
            </div>
            <div className={style["remove-item"]}>
            <button onClick={()=> dispatch(removeCartItem(item))}>Remove</button>
            </div>
        </div>
      </div>
      ))
)}
        <div className={style["discount-wrapper"]}>
          <span onClick={()=> setToggle(!isToggle)} className={style["toggle-btn"]}>{ isToggle ? <FaAngleRight /> : <FaAngleLeft /> }</span>
          { isToggle && (
          <div className={style["discount-container"]}>
            <div className={style["prices-wrapper"]}>
              <div className={style.total}>
                <span>Total</span>
                <span>{total}</span>
              </div>
              <div className={style.discount}>
                <span>Discount</span>
                <span>{discountAmount}</span>
              </div>
            </div>
            <div>
            { error && <p  className={style["error-msg"]}>Incorrect CODE!</p> }
            </div>
            <div className={style["discount-input"]}>
              <input type="text" placeholder="Discount Code SAVE10"
                onChange={(e)=> setValue(e.target.value.trim())}
              />
              <button onClick={handleDiscount} className={style["apply-discount"]}>Apply Discount</button>
            </div>
          </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CartPage