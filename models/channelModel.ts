import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";
import{IChannelType,IChannelDataType} from '../interfaces/IChannelType'

export class channelModel{

  findByLimit = (pageInfo:IChannelDataType) =>{
    const status = pageInfo.tableStatus
    const limit  = pageInfo.pageLimit
    const page = pageInfo.page
    const sortBy = pageInfo.sort
    let order = 'DESC'
    if(sortBy){
      order = 'ASC'
    }
    const sql = `SELECT * FROM nj_channel 
    WHERE status='${status}' ORDER BY rollNumber ${order} LIMIT ${limit} OFFSET ${limit*page}`
    return new Promise((resolve, reject)=>{
      db.query(sql, (err:any, result:(IChannelType | PromiseLike<IChannelType | undefined> | undefined)[])=>{
        if(err) return reject(err)
        resolve(result)
      }) as IChannelType[];
    })
  }
  findOne = (id:number) => {
    return new Promise((resolve, reject)=>{
      db.query(
        'SELECT * FROM nj_channel WHERE id = ?',
        [id],
        (err:any, res:unknown)=>{
          if(err) reject(err)
          resolve(res)
        }
      )
    })
  }
  updateOne = (channelDetails:IChannelDataType) => {
    const sql = `UPDATE nj_channel SET ? WHERE id = ?`
    // const date = new Date(channelDetails.membershipExpiryDate).toISOString()
    const search =  channelDetails.handle?.toLowerCase()+' '+channelDetails.channelName?.toLowerCase()+' '+ channelDetails.rollNumber
    const id = channelDetails.id

    const params = {
      rollNumber :channelDetails.rollNumber,
      channelName :channelDetails.channelName,
      handle  :channelDetails.handle,
      subscribers :channelDetails.subscriber,
      videos :channelDetails.videos,
      views :channelDetails.views,
      level :channelDetails.level,
      membership :channelDetails.membership,
      userID :channelDetails.userID,
      search :search,
      isChannelMonetize :channelDetails.isChannelMonetize,
      isChannelVerified :channelDetails.isChannelVerified,
      membershipExpiryDate:channelDetails.membershipExpiryDate,
    }
    return new Promise((resolve, reject)=>{
      db.query(
        sql,
        [params, id],
        (err:any, res:{ affectedRows: number | PromiseLike<number | undefined> | undefined; }) => {
          if(err) reject(err)
          resolve(res.affectedRows)
        }
      )
    })
  }
  findSearch = (search:string) => {
    const sql = `SELECT * FROM nj_channel 
    WHERE search LIKE '%${search}%' AND status='Y'`
    return new Promise((resolve, reject)=>{
      db.query(sql, (err:any, res:unknown)=>{
        if(err) reject(err)
        resolve(res)
      })
    })
  }
  findDataLength = (status:string) => {
    const sql = `SELECT COUNT(*) FROM nj_channel
    WHERE status='${status}'`
    return new Promise((resolve, reject)=>{
      db.query(sql, (err:any, res:unknown)=>{
        if(err) reject(err)
        resolve(res)
      })
    })
  }

  // create = (channleData:IChannelDataType): Promise<number | undefined>=> {
  //     const sql = "INSERT INTO nj_channel SET ?";
  //     const params = {
  //       channelID: channleData.channelID,
  //       channelName: channleData.channelName
  //     };
  //     return new Promise((resolve, reject) => {
  //       db.query(sql, params, (err: any, result: OkPacket) => {
  //           if (err) {
  //               return reject(err);
  //           }
  //           let insertId = (<OkPacket> result).insertId;
  //           resolve(insertId);
  //       });
  //     });
  // };

  // findOne = (channelID: string): Promise<IChannelType | undefined> =>{
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       "SELECT * FROM nj_channel WHERE channelID = ?",
  //       [channelID],
  //       (err: any, res: (IChannelType | PromiseLike<IChannelType | undefined> | undefined)[]) => {
  //         if (err) reject(err)
  //         else resolve(res?.[0])
  //       }
  //     ) as IChannelType[];
  //   })
  // }

  findAll = ():Promise<IChannelType[] | undefined> => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM nj_channel",
        [],
        (err: any, res: IChannelType[] | PromiseLike<IChannelType[] | undefined> | undefined) => {
          if (err) reject(err)
          else resolve(res)
        }
      )as IChannelType[];
    })
  }
  // update(channleData: IChannelType): Promise<number | undefined> {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       "UPDATE nj_channel SET channelName = ?, handle = ? WHERE id = ?",
  //       [channleData.channelName, channleData.handle,channleData.channelID],
  //       (err: any, res: { affectedRows: number | PromiseLike<number | undefined> | undefined; }) => {
  //         if (err){ 
  //           reject(err)
  //         }else{
  //           resolve(res.affectedRows);
  //         }
  //       }
  //     )
  //   })
  // }

//   remove(channelID: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "DELETE FROM nj_channel WHERE id = ?",
//         [channelID],
//         (err: any, res: { affectedRows: number | PromiseLike<number>; }) => {
//           if (err) reject(err)
//           else resolve(res.affectedRows)
//         }
//       )
//     })
//   }
}
 