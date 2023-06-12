import { RowDataPacket } from "mysql2"

export interface IChannelType extends RowDataPacket {
  id:number
  channelID: string,
  channelName: string,
  handle: string,
  subscriber: number,
  videos:number,
  views:number,
  dailyViews:number,
  dailyVideos:number,
  dailySubscribers:number,
  updateDateTime:string,
  addDateTime:string,
  status:string,
  dataJson:string
}

export interface IChannelDataType {
  channelID: string,
  channelName?: string,
  handle?: string,
  subscriber?: number,
  videos?:number,
  views?:number,
  dailyViews?:number,
  dailyVideos?:number,
  dailySubscribers?:number,
  updateDateTime?:string,
  addDateTime?:string,
  status?:string,
  dataJson?:string
}