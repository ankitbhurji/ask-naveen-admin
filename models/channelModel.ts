import {db} from "../services/db";
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
        db.query(sql, params, (err, result) => {
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
      db.query<IChannelType[]>(
        "SELECT * FROM nj_channel WHERE channelID = ?",
        [channelID],
        (err, res) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      )
    })
  }

  findAll = ():Promise<IChannelType[] | undefined> => {
    return new Promise((resolve, reject) => {
      db.query<IChannelType[]>(
        "SELECT * FROM nj_channel",
        [],
        (err, res) => {
          if (err) reject(err)
          else resolve(res)
        }
      )
    })
  }
  update(channleData: IChannelType): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      db.query<OkPacket>(
        "UPDATE nj_channel SET channelName = ?, handle = ? WHERE id = ?",
        [channleData.channelName, channleData.handle,channleData.channelID],
        (err, res) => {
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
      db.query<OkPacket>(
        "DELETE FROM nj_channel WHERE id = ?",
        [channelID],
        (err, res) => {
          if (err) reject(err)
          else resolve(res.affectedRows)
        }
      )
    })
  }
}
 