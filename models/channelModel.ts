import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";
import{IChannelType,IChannelDataType} from '../interfaces/channelType'

export class channelModel{
  create = (channleData:IChannelDataType): Promise<number | undefined>=> {
      const sql = "INSERT INTO nj_channel SET ?";
      const params = {
        channelID: channleData.channelID,
        channelName: channleData.channelName
      };
      return new Promise((resolve, reject) => {
        db.query(sql, params, (err: any, result: OkPacket) => {
            if (err) {
                return reject(err);
            }
            let insertId = (<OkPacket> result).insertId;
            resolve(insertId);
        });
      });
  };

  findOne = (channelID: string): Promise<IChannelType | undefined> =>{
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM nj_channel WHERE channelID = ?",
        [channelID],
        (err: any, res: (IChannelType | PromiseLike<IChannelType | undefined> | undefined)[]) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      ) as IChannelType[];
    })
  }

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
  update(channleData: IChannelType): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE nj_channel SET channelName = ?, handle = ? WHERE id = ?",
        [channleData.channelName, channleData.handle,channleData.channelID],
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

  remove(channelID: number): Promise<number> {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM nj_channel WHERE id = ?",
        [channelID],
        (err: any, res: { affectedRows: number | PromiseLike<number>; }) => {
          if (err) reject(err)
          else resolve(res.affectedRows)
        }
      )
    })
  }
}
 