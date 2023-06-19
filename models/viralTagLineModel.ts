import db from '../services/db'
import { IViralTagLineDataType, IViralTagLineType } from '../interfaces/IViralTagLineType'
import { OkPacket } from 'mysql2'


export class viralTagLineModel{

    createOne = (viralTagLineData:IViralTagLineDataType): Promise<number | undefined> => {
        const {title, tags, link, tableStatus, search, addDateTime} = viralTagLineData
        const sql = `INSERT INTO nj_viral_tag_line (title, tags, link, status, search, addDateTime) VALUES (?, ?, ?, ?, ?, ?)`
        const params = [title, tags, link, tableStatus, search, addDateTime];

        return new Promise((resolve, reject)=>{
            // console.log(title, tags, link, tableStatus, search, addDateTime);
            db.query(sql, params, (err:any, result:OkPacket)=>{
                if(err) return reject(err)
                let insertId = (<OkPacket>result).insertId
                return resolve(insertId)
            })
        })
    }

    findByLimit = (tableSetting:IViralTagLineDataType) => {
        console.log(tableSetting);
        const status = tableSetting.tableStatus
        const limit = tableSetting.pageLimit
        const page = tableSetting.page
        const search = tableSetting.search

        const statusStr = status=='Y'?status: status=='N'?status: 'Y'
        const limitStr = limit ? limit: 10
        const pageStr  = page ? page: 0 
        const searchStr = search!="" ? `and search like '%${search}%'` : ``

        const sql = `SELECT * FROM nj_viral_tag_line WHERE status='${statusStr}' ${searchStr} LIMIT ${limitStr} OFFSET ${limitStr*pageStr}`
        console.log(sql);
        return new Promise((resolve, reject) => {
            db.query(sql, (err: any, res:any)=>{
                if (err) reject(err)    
                else resolve(res)
            })
        })
    }
}



