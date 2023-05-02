import React from "react";
import { Navigate } from "react-router-dom"

const AuthMiddleware = (props) =>{
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