import { useDispatch, useSelector } from "react-redux"
import style from "../Components Style/ProductList.module.css"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { fetchProducts } from "../Redux/Slices Folder/ProductApi"
import { useNavigate } from "react-router-dom"

function ProductList() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let {items , status} = useSelector(state=> state.fetchedProduct)
  let {sortType , brand , products} = useSelector(state=>state.sorting)
  let searchedProduct = useSelector(state=> state.productSearching.value)
  let [item , saveItem] = useState([])
  let sortedProduct = [...items];

   useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  useEffect(()=>{
    navigate("/")
  },[sortType , brand , products])

  if(searchedProduct.length > 0){
    sortedProduct = sortedProduct.filter(t => t.title.toLowerCase().includes(searchedProduct))
  }
  if(brand && brand !== "select-brand") {
    sortedProduct = sortedProduct.filter(b => b.brand && b.brand.toLowerCase() === brand);
  }

  if(products && products !== "select-product"){
    sortedProduct = sortedProduct.filter(item =>item.title.toLowerCase() === products)
  }

  switch (sortType) {
  case "a-to-z":
    sortedProduct.sort((a,b)=> a.title.localeCompare(b.title));
  break;
  case "z-to-a":
    sortedProduct.sort((a,b)=> b.title.localeCompare(a.title));
  break;
  case "low-to-high":
    sortedProduct.sort((a,b)=> a.price - b.price);
  break;
  case "high-to-low":
    sortedProduct.sort((a,b)=> b.price - a.price);
  break;
  default:
  break;
}

 return (
  <div className={style["product-list"]}>
  {status === "failed" || items.length === 0 ? (
   <h2 style={{ color: "white" , textAlign : "center"}}>Product Not Available!</h2>
  ) : sortedProduct.length === 0 ? (
    <h2 style={{ color: "white" , textAlign : "center" }}>Product Not Found!</h2>
  ) : (
    sortedProduct.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  )}
</div>

)

}

export default ProductList