import Ajv,{ErrorObject,ValidateFunction} from "ajv";
import {userRequestPutPostSchema,userLoginRequestSchema} from "../schemas/userRequestPutPostSchema";
import{IUserPutPostDataType,IUserLoginDataType} from '../interfaces/IUserType';

export class ValidationHelper{
    private _ajv = new Ajv({ useDefaults:true, allErrors:true });
    private _userPostCompiledSchema: ValidateFunction<IUserPutPostDataType>;
    private _userLoginCompiledSchema: ValidateFunction<IUserLoginDataType>;
    

    constructor(){
        this._userPostCompiledSchema = this._ajv.compile(userRequestPutPostSchema);
        this._userLoginCompiledSchema = this._ajv.compile(userLoginRequestSchema)
    }
    public ifSpecialCharExist(str:string):boolean{
        const pattern = /[\!\@\#\$\%\^\&\*\(\)\+\=\}\{\]\[\\\|\:\;\?\/\>\.\<\~]/;
        return pattern.test(str);
    }

    userPostPutRequest(data:unknown,type:"query" | "body"):{invalid:false;reason:ErrorObject[];data:IUserPutPostDataType;}
    userPostPutRequest(data:unknown,type:"query" | "body"):{invalid:true;reason:ErrorObject[];data:undefined;}
    userPostPutRequest(data:unknown,type:"query" | "body"):{invalid:boolean;reason:ErrorObject[];data?:IUserPutPostDataType;}{
        return this._validateData(this._userPostCompiledSchema,data,type) ;
    }


    userloginRequest(data:unknown,type:"query" | "body"):{invalid:false;reason:ErrorObject[];data:IUserLoginDataType;}
    userloginRequest(data:unknown,type:"query" | "body"):{invalid:true;reason:ErrorObject[];data:undefined;}
    userloginRequest(data:unknown,type:"query" | "body"):{invalid:boolean;reason:ErrorObject[];data?:IUserLoginDataType;}{
        return this._validateData(this._userLoginCompiledSchema,data,type) ;
    }
    

    private _validateData<T>(validateFunction:ValidateFunction<T>,data:unknown,type:"query" | "body"){
       
        if(validateFunction(data)){
            return {
                invalid:false,
                reason:[],
                data:data
            }
        }else{
           // console.log(validateFunction.errors,type)
            if(!validateFunction.errors){
                return {
                    invalid:true,
                    reason:[]
                }
            }
            
            return {
                invalid:true,
                reason:validateFunction.errors.map((err)=>({
                    instancePath: err.instancePath,
                    params : err.params,
                    message : err.message,
                })) as ErrorObject[]
            }
        }

    }

    public static get singleton(){
        if(!st){
            st=new ValidationHelper();
        }
        return st;
    }

}
let st:ValidationHelper;