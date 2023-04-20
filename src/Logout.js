import React, { Component } from 'react'
import app from './container/firebaseConfig'
import { getAuth,signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
const auth=getAuth()
class Logout extends React.Component{
    componentDidMount(){
        signOut(auth)
        .then(()=>console.log("Signed Out Successfully"))
        .catch((err)=>console.log(err))
    }
    render() {
        return auth?<Navigate to="/" />:<Navigate to="/login"/>
}
}
export default Logout   

