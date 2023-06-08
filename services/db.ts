import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();
import config from '../config.json';
const env = process.env.NODE_ENV || "dev";
let dbDetail:{
  "DB_HOST" : string,
  "DB_USER" : string,
  "DB_PWD" : string,
  "DB_NAME" : string
};
if(env === "prod"){
  dbDetail = config.dbDetail.prod;
}else{
  dbDetail = config.dbDetail.dev;
}

export const db = mysql.createConnection({
  host: dbDetail.DB_HOST,
  user: dbDetail.DB_USER,
  password: dbDetail.DB_PWD,
  database: dbDetail.DB_NAME
});
db.connect(function(err){
  if(err) console.log('database not connected');
  else console.log('connected');
  // console.log('conected');
})