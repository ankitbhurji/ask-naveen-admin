import { RowDataPacket } from "mysql2"

export interface IUserType extends RowDataPacket {
  id:number
  email: string,
  name: string,
  mobile: string,
  city: string,
  state:string,
  country:string,
  job:string,
  gender:string,
  userType:string,
  status:string,
  lastLoginDateTime:string,
  addIpAddress:string,
  addDateTime:string,
  userScore:string
}

export type IUserPutPostDataType ={
  email: string,
  name: string,
  mobile: string,
  city?: string,
  state?:string,
  country?:string,
  job?:string,
  gender?:string,
  userType?:string,
  status?:string,
  addIpAddress?:string,
  addDateTime?:string,
  userScore?:string
}

export type IUserLoginDataType={
  email: string,
  otp:string
}