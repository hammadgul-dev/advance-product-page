import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ProductList from "../Components/ProductList"
import Sidebar from "../Components/Sidebar"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

function App() {

  return (
    <>
     <Navbar />
    <div style={{display : "flex"}}>
    <Sidebar /> 
    <ProductList />
    </div>
    <Footer />
    </>
  )
}

export default App