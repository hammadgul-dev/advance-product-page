import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthWrapper({children}) {
    let navigate = useNavigate()
    
     useEffect(() => {
        if(!localStorage.getItem("isLogin")){
            navigate("/form")
        }
        }, [])

        return(
            <>{children}</>
        )
}

export default AuthWrapper