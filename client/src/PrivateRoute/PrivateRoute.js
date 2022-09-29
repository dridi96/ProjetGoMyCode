import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({props}) => {
    const isAuth = useSelector(state=>state.User.isAuth)
    return isAuth ? props : <Navigate to ='/Signin'/>

}

