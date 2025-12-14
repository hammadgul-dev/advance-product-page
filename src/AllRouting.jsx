import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import App from "./Pages/App"
import UserForm from "./Components/UserForm";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
const CartPage = lazy(()=> import("./Components/CartPage"))
const FavProducts = lazy(()=> import("./Components/FavProducts"))
const ProductDetail = lazy(()=> import("./Components/ProductDetail"))
import AuthWrapper from "./Components/AuthWrapper";


let routes = createHashRouter([
    { path: "/", element : 
        <AuthWrapper>
            <App />
        </AuthWrapper>
    },

    { path : "/favorite-products" , element : 
        <AuthWrapper>
        <Suspense fallback={<h2 style={{textAlign: "center"}}>Loading...</h2>}>
            <div>
                <Navbar />
                <div style={{display: "flex"}}><Sidebar /><FavProducts /></div>
                <Footer />
            </div> 
            </Suspense>
        </AuthWrapper>
     },

    { path: "/form", element: <UserForm /> },

    { path: "/cart-page" , element : 
        <AuthWrapper>
        <Suspense fallback={<h2 style={{textAlign: "center"}}>Loading...</h2>}>
            <div>
                <Navbar />
                <div style={{display : "flex"}}><Sidebar /><CartPage /></div>
                <Footer />
            </div> 
            </Suspense>
        </AuthWrapper>
    },

    { path: "/product-detail" , element: 
        <AuthWrapper>
            <Suspense fallback={<h2 style={{textAlign: "center"}}>Loading...</h2>}>
            <div>
                <Navbar />
                <div style={{display : "flex"}}><Sidebar /> <ProductDetail /></div>
                <Footer />
            </div> 
            </Suspense>
        </AuthWrapper>,
        children : [
            { path:":id" , element : <ProductDetail /> }
        ]
    },

    { path: "/about-us" , element: 
        <AuthWrapper>
            <div>
                <Navbar />
                <div style={{display : "flex"}}>
                    <Sidebar />
                    <div style={{width : "100%"}}><AboutUs /></div>
                </div>
                <Footer />
            </div> 
        </AuthWrapper>
    },

    { path: "/contact-us" , element: 
        <AuthWrapper>
            <div>
                <Navbar />
                <div style={{display : "flex"}}>
                    <Sidebar />
                    <div style={{width : "100%"}}><ContactUs /></div>
                </div>
                <Footer />
            </div> 
        </AuthWrapper>
    },

    { path: "/*" , element : <NotFound /> }
])




export default routes