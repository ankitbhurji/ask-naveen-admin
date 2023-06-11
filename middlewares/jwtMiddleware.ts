import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express'
import config from '../config/index';


const authorize = (req:Request,res:Response,next:NextFunction)=>{
    try{
        const token = req.headers.authorization!.split(" ")[1];
        const decode = jwt.verify(token,config.jwt.secret);
        req.body.user = decode;
    }catch{
        res.status(401).send({message:"Invalid request!"});
    }
}

// syntax for create token;
//const token = await jwt.sign({id:3443,email:'gdfgfd'},config.jwt.secret);


export {authorize};