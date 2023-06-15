import { RowDataPacket } from "mysql2"

export interface IAdminVideoType extends RowDataPacket {

}

export interface IAdminVideoDataType {
    videoId: string,
    searchUrl:string,
    videoTitle:string,
    videoTags:string,
    videoCategory:string,
    videoType:string,
    viewsCount:number,
    likesCount:number,
    videoDescription:string,
    publishDateTime:string,
    search:string,

    sortBy:string,
    page:number,
    pageLimit:number,
    paginationCount:number,
    adminVideoModelDataLength:0,
    tableStatus:string,
    searchFieldInAdminVideoModel:string

    id?:number,
}