import db from '../services/db'
import { IAdminVideoType, IAdminVideoDataType } from '../interfaces/adminVideoType'
import { OkPacket } from 'mysql2'

export class adminVideoModel{

    createOne = (adminVideoData:IAdminVideoDataType): Promise<number | undefined> => {
        const sql = 'INSERT IGNORE INTO nj_admin_video SET ?';
        const search = adminVideoData.videoTitle.toLowerCase()+" "+
        adminVideoData.videoTags.toLowerCase()+" "+ 
        adminVideoData.videoCategory.toLowerCase()
        const d = new Date()
        const params = {
            status:'Y',
            videoId:adminVideoData.videoId,
            videoTitle:adminVideoData.videoTitle,
            videoCategory:adminVideoData.videoCategory,
            videoTags:adminVideoData.videoTags,
            videoType:adminVideoData.videoType,
            likesCount:adminVideoData.likesCount,
            viewsCount:adminVideoData.viewsCount,
            videoDescription:adminVideoData.videoDescription,
            search:search,
            videoUrl:adminVideoData.searchUrl,
            videoPublishDateTime:adminVideoData.publishDateTime,
            addDateTime:d.toISOString(),
        }
        return new Promise((resolve, reject)=>{
            db.query(sql, params, (err: any, result: OkPacket)=>{
                if(err) return reject(err)
                let insertId = (<OkPacket> result).insertId
                resolve(insertId)
            })
        })
    }

    findByLimit = (tableSetting:IAdminVideoDataType) =>{
        const status = tableSetting.tableStatus
        const limit = tableSetting.pageLimit
        const page = tableSetting.page
        const sql = `SELECT * FROM nj_admin_video WHERE status='${status}' LIMIT ${limit} OFFSET ${limit*page}`
        return new Promise((resolve, reject) => {
            db.query(sql, (err: any, res: unknown)=>{
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
    findOne = (id:string) => {
        return new Promise((resolve, reject)=>{
            db.query(
                'SELECT * FROM nj_admin_video WHERE id = ?',
                [id],
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }
    findDataLength = (status:string) =>{
        const sql = `SELECT COUNT(*) FROM nj_admin_video WHERE status='${status}'`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: unknown)=>{
                if(err) reject(err)
                resolve(res)
            })
        })
    }
    delete = (id:string):Promise<number> => {
        const sql = `UPDATE nj_admin_video SET status="N" WHERE id=${id}`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: { affectedRows: number | PromiseLike<number>; })=>{
                if(err) reject(err)
                resolve(res.affectedRows)
            })
        })
    }
    remove = (id:string):Promise<number> => {
        const sql =  `DELETE FROM nj_admin_video WHERE id=${id} AND status="N"`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: { affectedRows: number | PromiseLike<number>; })=>{
                if(err) reject(err)
                resolve(res.affectedRows)
            })
        })
    }
    findSearch = (search:string) => {
        const sql = `SELECT * FROM nj_admin_video WHERE search LIKE '%${search}%' AND status='Y'`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: unknown)=>{
                if(err) reject(err)
                resolve(res)
            })
        })
        // return new Promise((resolve, reject)=>{
        //     db.query(
        //         "SELECT * FROM nj_admin_video WHERE search LIKE  ? AND status='Y'",
        //         [search],
        //         (err, res) => {
        //             if(err) reject(err)
        //             else resolve(res)
        //         }
        //     )
        // })
    }
    updateOne = (details:IAdminVideoDataType):Promise<number | undefined> => {
        const sql = `UPDATE nj_admin_video SET ? WHERE id = ?`
        const id = details.id
        const search = details.videoTitle.toLowerCase()+' '+
        details.videoTags.toLowerCase()+' '+
        details.videoCategory.toLowerCase() 
        // details.videoId.toLowerCase()
        
        const params = {
            videoTitle: details.videoTitle,
            videoTags:details.videoTags,
            videoCategory:details.videoCategory,
            videoDescription:details.videoDescription,
            videoType:details.videoType,
            search: search
        }
        return new Promise((resolve, reject)=>{
            db.query(sql,
                [params, id],
                (err: any, res: { affectedRows: number | PromiseLike<number | undefined> | undefined; })=>{
                    if(err) reject(err)
                    resolve(res.affectedRows)
                }
            )
        })
        
    }
}