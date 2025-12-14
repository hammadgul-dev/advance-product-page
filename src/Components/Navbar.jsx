import style from "../Components Style/Navbar.module.css"
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../Redux/Slices Folder/SideBarToggle";
import { productSearchHandler } from "../Redux/Slices Folder/ProductSearch";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

function Navbar(){
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let cartCount = useSelector(state=>state.cartitem.items)
  let favProductCount = useSelector(state => state.favoriteProducts.favProducts)

  return(
    <div className={style.navbar}>

    <div className={style["search-container"]}>
      <span className={style.hamburger}
      onClick={()=> dispatch(setToggle())} 
      ><FaBars />
      </span>
      <span className={style["search-icon"]}><FaMagnifyingGlass/></span>
      <input 
      type="text" 
      spellCheck="false" 
      placeholder="Search Products" 
      onChange={(e)=> {
      dispatch(productSearchHandler(e.target.value.toLowerCase()));
       navigate(`/?search=${encodeURIComponent(value)}`);
      navigate("/"); 
  }}
      />
    </div>

    <div className={style.actions}>
      <div className={style["action-icons"]}>
        <div className={style.wishlist}>
          <span className={style["wishlist-icon"]} onClick={()=> navigate("/favorite-products")}><GoHeart /></span>
          {favProductCount.length > 0 && <p onClick={()=> navigate("/favorite-products")}>{favProductCount.length}</p> }
        </div>
        <div className={style.cart}>
          <div className={style.cart}>
        <span onClick={()=> navigate("/cart-page")} className={style["cart-icon"]}><IoCartOutline /></span>
        {cartCount.length > 0 && (
          <p onClick={()=> navigate("/cart-page")}>{cartCount.length}</p>
        )}
      </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar