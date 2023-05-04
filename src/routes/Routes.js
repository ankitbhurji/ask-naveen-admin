import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"
import { LoginQuries } from "../utils/utils";

const AuthMiddleware = (props) =>{

    const [flag, setFlag] = useState('')

    async function validatingAdmin(){
        const getToken = JSON.parse(localStorage.getItem('token'));
        const loginQuries = new LoginQuries
        const validateAdmin = await loginQuries.validatingAdmin(getToken)

        if(validateAdmin){
            if(validateAdmin.id==getToken && validateAdmin.userType=="ADMIN"){
                setFlag(false)
            }
        }else{
            setFlag(true)
        }
    }
    validatingAdmin()


    if(flag){
        return(
            <Navigate to={{pathname:'/login'}} />
        );
    }
    


    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )

}

export default AuthMiddleware