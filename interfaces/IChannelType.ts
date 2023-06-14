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
  id:number,
  channelID: string,
  userID:string,
  channelName?: string,
  rollNumber?:number,
  level?:number,
  handle?: string,
  subscriber?: number,
  membership?:string,
  isChannelVerified?:boolean,
  isChannelMonetize?:boolean,
  membershipExpiryDate?:string,
  videos?:number,
  views?:number,
  dailyViews?:number,
  dailyVideos?:number,
  dailySubscribers?:number,
  updateDateTime?:string,
  addDateTime?:string,
  status?:string,
  dataJson?:string

  page:number,
  pageLimit:number,
  paginationCount:string,
  totalChannel:number,
  tableStatus:string,
  sort:boolean,
  searchChannnel:string
}