import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"
import { LoginQuries } from "../utils/utils";

const AuthMiddleware = (props) =>{


    async function validatingAdmin(){
        let key;
        const getToken = JSON.parse(localStorage.getItem('token'));
        const loginQuries = new LoginQuries
        const validateAdmin = await loginQuries.validatingAdmin(getToken)
        if(validateAdmin && getToken){
            if(validateAdmin.id==getToken){
                key = true
            }else{
                key = false
            }
        }
        return key
    }

    validatingAdmin().then((value)=>{
        if(value){
            console.log(value);
        }
    })


   

    if(false){
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