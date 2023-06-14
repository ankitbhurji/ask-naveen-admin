"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminVideoModel = void 0;
const db_1 = __importDefault(require("../services/db"));
class adminVideoModel {
    constructor() {
        this.createOne = (adminVideoData) => {
            const sql = 'INSERT IGNORE INTO nj_admin_video SET ?';
            const search = adminVideoData.videoTitle.toLowerCase() + " " +
                adminVideoData.videoTags.toLowerCase() + " " +
                adminVideoData.videoCategory.toLowerCase();
            const d = new Date();
            const params = {
                status: 'Y',
                // videoUrl:adminVideoData.videoUrl, // pending
                videoId: adminVideoData.videoId,
                videoTitle: adminVideoData.videoTitle,
                videoCategory: adminVideoData.videoCategory,
                videoTags: adminVideoData.videoTags,
                videoType: adminVideoData.videoType,
                likesCount: adminVideoData.likesCount,
                viewsCount: adminVideoData.viewsCount,
                videoDescription: adminVideoData.videoDescription,
                search: search,
                videoUrl: adminVideoData.searchUrl,
                videoPublishDateTime: adminVideoData.publishDateTime,
                addDateTime: d.toISOString(),
            };
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, params, (err, result) => {
                    if (err)
                        return reject(err);
                    let insertId = result.insertId;
                    resolve(insertId);
                });
            });
        };
        this.findByLimit = (tableSetting) => {
            console.log(tableSetting);
            const status = tableSetting.tableStatus;
            const limit = tableSetting.pageLimit;
            const page = tableSetting.page;
            const sql = `SELECT * FROM nj_admin_video WHERE status='${status}' LIMIT ${limit} OFFSET ${limit * page}`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res);
                });
            });
        };
        this.findOne = (id) => {
            return new Promise((resolve, reject) => {
                db_1.default.query('SELECT * FROM nj_admin_video WHERE id = ?', [id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.findDataLength = (status) => {
            const sql = `SELECT COUNT(*) FROM nj_admin_video
         WHERE status='${status}'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.delete = (id) => {
            const sql = `UPDATE nj_admin_video SET status="N" 
        WHERE id=${id}`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
        this.remove = (id) => {
            const sql = `DELETE FROM nj_admin_video 
        WHERE id=${id} AND status="N"`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
        this.findSearch = (search) => {
            const sql = `SELECT * FROM nj_admin_video 
        WHERE search LIKE '%${search}%' AND status='Y'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.updateOne = (details) => {
            const sql = `UPDATE nj_admin_video SET ? 
        WHERE id = ?`;
            const id = details.id;
            const search = details.videoTitle.toLowerCase() + ' ' +
                details.videoTags.toLowerCase() + ' ' +
                details.videoCategory.toLowerCase();
            // details.videoId.toLowerCase()
            const params = {
                videoTitle: details.videoTitle,
                videoTags: details.videoTags,
                videoCategory: details.videoCategory,
                videoDescription: details.videoDescription,
                videoType: details.videoType,
                search: search
            };
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, [params, id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
    }
}
exports.adminVideoModel = adminVideoModel;
