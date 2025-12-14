import { useDispatch, useSelector } from "react-redux"
import style from "../Components Style/Sidebar.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchProducts } from "../Redux/Slices Folder/ProductApi"
import { setBrand , setProducts, setSortType } from "../Redux/Slices Folder/filterSlice"

function Sidebar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let sidebarToggle = useSelector(state => state.toggle.value)
    let savedUser = JSON.parse(localStorage.getItem("userInfo"))
    let {items} = useSelector(state=> state.fetchedProduct)

    let [filter , setFilter] = useState({
        brand : "",
        product : "",
        sortType : ""
    })

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    useEffect(()=>{
        dispatch(setBrand({ brand: filter.brand }));
        dispatch(setProducts({ productName: filter.product }));
        dispatch(setSortType({ type: filter.sortType }));
    },[filter])

  return(
    <>
    { sidebarToggle && (
    <div className={style.sidebar}>

        <div className={style["user-section"]}>
            <div className={style["user-profile"]}>
               <img src={savedUser.userImg || "https://avatar.iran.liara.run/public/49"} />
            </div>
           <h2 className={style["user-name"]}>{savedUser.userName}</h2>
        </div>

        <div className={style["menu-links"]}>
                <li onClick={()=> navigate("/")}><NavLink to="/" className={({isActive})=> isActive ? style.active : "" }>HOME</NavLink></li>
                <li onClick={()=> navigate("/about-us")}><NavLink to="/about-us" className={({isActive})=> isActive ? style.active : "" }>ABOUT US</NavLink></li>
                <li onClick={()=> navigate("/contact-us")}><NavLink to="/contact-us" className={({isActive})=> isActive ? style.active : "" }>CONTACT US</NavLink></li>
        </div>

        <div className={style.filter}>
            <select name="Brand" 
            onChange={(e)=>setFilter({...filter , brand : e.target.value.toLowerCase()})}>
                <option value="select-brand">Select Brand</option>
                { [...new Set(items.map(b=>b.brand))].map(brand=>(
                    <option key={brand || "no-brand"} value={brand}>{brand}</option>
                )) }
            </select>
            <select name="Product" 
            onChange={(e) => setFilter({...filter , product:e.target.value.toLowerCase()})}>
                <option value="select-product">Select Product</option>
                { items.map((product =>(
                    <option key={product.title } value={product.title}>{product.title}</option>
                ))) }
            </select>
            <select name="sort" onChange={(e)=> setFilter({...filter , sortType : e.target.value.toLowerCase()})}>
                <option value="select-sorting">Sorting Options</option>
                <option value="a-to-z">Alphabetical (A - Z)</option>
                <option value="z-to-a">Alphabetical (Z - A)</option>
                <option value="high-to-low">High Price &uarr; </option>
                <option value="low-to-high">Low Price &darr; </option>
            </select>
        </div>
                <button className={style["clear-all"]}
                onClick={()=>{
                    localStorage.clear()
                    location.reload()
                }}
                >CLEAR MY DATA</button>
    </div>
    ) }
    </>
  )
}

export default Sidebar