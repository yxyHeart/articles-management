import { getToken } from "@/utils"
import React from "react"
import { Navigate } from "react-router-dom"

const Authcomponents =({children})=>{
    const isToken = getToken()
    if(isToken){
        return <React.Fragment>{children}</React.Fragment>
    }else {
        return <Navigate to="/login" replace />
    }
}
export {
    Authcomponents
}