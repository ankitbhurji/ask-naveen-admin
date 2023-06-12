import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";
import{IUserType,IUserPutPostDataType} from '../interfaces/IUserType';
import config from '../config/index';
export class userModel{
  create = (userData:IUserPutPostDataType): Promise<number | undefined>=> {
    const {email,name,mobile,city='',state='',country='',job='',gender='',userType='',status='Y',addIpAddress,addDateTime,userScore='0'}=userData;
    const sql = `INSERT INTO ${config.tablenames.user} (email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const params = [email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore];
    return new Promise((resolve, reject) => {
      db.query(sql, params, (err: any, result: OkPacket) => {
          if (err) { console.log(err);
              return reject(err);
          }
          let insertId = (<OkPacket> result).insertId;
          return resolve(insertId);
      });
    });
  };

  login = (email: string,otp:string): Promise<IUserType | undefined> =>{
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${config.tablenames.user} WHERE email = ? and otp=?`,
        [email,otp],
        (err: any, res: (IUserType | PromiseLike<IUserType | undefined> | undefined)[]) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      ) as IUserType;
    })
  }

  findOne = (userId: string): Promise<IUserType | undefined> =>{
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${config.tablenames.user} WHERE channelID = ?`,
        [userId],
        (err: any, res: (IUserType | PromiseLike<IUserType | undefined> | undefined)[]) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      ) as IUserType;
    })
  }

  findAll = ():Promise<IUserType[] | undefined> => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${config.tablenames.user}`,
        [],
        (err: any, res: IUserType[] | PromiseLike<IUserType[] | undefined> | undefined) => {
          if (err) reject(err)
          else resolve(res)
        }
      )as IUserType[];
    })
  }
  update(userData: IUserType): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const {email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore}=userData;
      db.query(
        `UPDATE  ${config.tablenames.user} (email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE id = ?`,
        [email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore],
        (err: any, res: { affectedRows: number | PromiseLike<number | undefined> | undefined; }) => {
          if (err){ 
            reject(err)
          }else{
            resolve(res.affectedRows);
          }
        }
      )
    })
  }

  statusUpdate(userId: number,status:string): Promise<number> {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE  ${config.tablenames.user} SET status = ? WHERE id = ?`,
        [status,userId],
        (err: any, res: { affectedRows: number | PromiseLike<number>; }) => {
          if (err) reject(err)
          else resolve(res.affectedRows)
        }
      )
    })
  }
}
 