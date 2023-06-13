import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();
import config from '../config/index';
const env = process.env.NODE_ENV || "dev";
let dbDetail:{
  "DB_HOST" : string,
  "DB_USER" : string,
  "DB_PWD" : string,
  "DB_NAME" : string
};
if(env === "prod"){
  dbDetail = config.dbDetail.prod;
}else if(env=='dev'){
  dbDetail = config.dbDetail.dev;
}else{
  dbDetail = config.dbDetail.local
}
let db:any;
function handleDisconnect(){
  db =  mysql.createConnection({
    host: dbDetail.DB_HOST,
    user: dbDetail.DB_USER,
    password: dbDetail.DB_PWD,
    database: dbDetail.DB_NAME
  }); // Recreate the connection, since
  // the old one cannot be reused.

  db.connect(function(err: any) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  db.on('error', function(err: any) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();
export default db;
// export const db = mysql.createConnection({
//   host: dbDetail.DB_HOST,
//   user: dbDetail.DB_USER,
//   password: dbDetail.DB_PWD,
//   database: dbDetail.DB_NAME
// });