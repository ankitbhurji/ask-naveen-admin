import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { UserModel } from '../models';
import { ChannelModel } from '../models';
import { VideoModel } from '../models';
import { AdminVideoModel } from '../models';
import { SettingModel } from '../models';
import { TagModel } from '../models';
// import axios from 'axios';
// import external from '../Config/Config';
 
//Quries on Login.
class LoginQuries{
   async findAdminUser(adminEmail){
    try{
        const allAdmin = await DataStore.query(UserModel, (user)=>user.and(user=>[
            user.email.eq(adminEmail)
        ]))
        return allAdmin
    }catch(err){
        throw err
    }
   }
   async updateAdminOtp(user, otp){
    try{
        const updateOtp = await DataStore.save(
            UserModel.copyOf(user, update=>{
                update.otp = +otp
            })
        )
        console.log(user, otp);
        return updateOtp
    }catch(err){
        throw err
    }
    // const updateOtp = await DataStore.query(UserModel,)
   }
   async validatingAdmin(token){
    try{
        const validateAdmin = await DataStore.query(UserModel, token)
        return validateAdmin
    }catch(err){
        throw err
    }
   }
}


// Quries on UserModel.
class Quries{   
    async findUser(email, userType, userId){
        try{
            const allAdmin  = await DataStore.query(UserModel, (user)=>user.or(user=>[
                user.email.eq(email),
                user.id.eq(userId)
            ]))
            return allAdmin
        }catch(err){
            throw err
        }
    }
    async updateUserOtp(users, otp){
        try{
            const updateUser = await DataStore.save(
                UserModel.copyOf(...users, (update)=>{
                    update.otp = +otp
                })
            )
            return updateUser
        }catch(err){
            throw err
        }
    }
    async sendOtpApi(email, otp){
        const payload = {
            email:email,
            otp:otp
        }
        // const postData = await axios({
        //     method:external.sendOtpConfig.method,
        //     url:external.sendOtpConfig.url,
        //     data:payload
        // })
        // return postData
    }
    async findUserByLimit(pageLimit, page){
        try{
            const allUser = await DataStore.query(UserModel, (data)=>
                data.status.eq('Y'),
                {
                    page:page,
                    limit:pageLimit
                }
            );
            return allUser
        }catch(err){
            throw err
        }
    }
    async findAllUserDataLength(){
        try{
            const allUserDataLength =(await DataStore.query(UserModel, (data)=>
            data.status.eq('Y')
            )).length
            return allUserDataLength
        }catch(err){
            throw err
        }
    }
    async searchUser(searchField){
        try{
            const searchUser = await DataStore.query(UserModel, (user)=>
            user.or(user=>[
                user.name.contains(searchField),
                user.email.contains(searchField),
                user.mobileNumber.contains(searchField)
            ]))
            return searchUser
        }catch(err){
            throw err
        }
    }
    async updateUserDetails(editedUserDetails){
        const original = await DataStore.query(UserModel, editedUserDetails.id);
        try{
            const updateUserDetails = await DataStore.save(
                UserModel.copyOf(original, updated => {
                  updated.name = editedUserDetails.name
                  updated.gender = editedUserDetails.gender
                  updated.email = editedUserDetails.email
                  updated.mobileNumber = editedUserDetails.mobileNumber
                  updated.cityName = editedUserDetails.cityName
                  updated.status =editedUserDetails.status
                  updated.stateName = editedUserDetails.stateName
                  updated.countryName = editedUserDetails.countryName
                  updated.userType = editedUserDetails.userType
                  updated.job = editedUserDetails.job
                })
              );
              return updateUserDetails
        }catch(error){
            throw error;
        }
    }
    async deleteUser(id){
        const toDeleteUser = await DataStore.query(UserModel, id);
        try{
            const deleteUser = await DataStore.save(
                UserModel.copyOf(toDeleteUser, update => {
                    update.status = 'N'
                })
            )
            return deleteUser
        }catch(err){
            throw err
        }
    }
}


// Quries on Channel Model.
class ChannelQuries{
    async findChannelByLimit(page, pageLimit){
        try{
            const allChannel = await DataStore.query(ChannelModel, (data)=>
            data.status.eq('Y'),
            {
                page:page,
                limit:pageLimit
            }
            )
            return allChannel
        }catch(err){
            throw err
        }
    }
    async findAllChannelDataLength(){
        try{
            const channelDataLength = (await DataStore.query(ChannelModel, (data)=>
            data.status.eq('Y')
            )).length
            return channelDataLength
        }catch(err){
            throw err
        }
    }
    async searchChannel(searchField){
        try{
            const searchChannel = await DataStore.query(ChannelModel, (channel)=>
            channel.and(channel=>[
                channel.status.contains('Y'),
                channel.search.contains(searchField)
                // channel.handleName.contains(searchField),
                // channel.email.contains(searchField),
                // channel.channelName.contains(searchField),
                // channel.channelCategory.contains(searchField)
            ]))
            return searchChannel
        }catch(err){
            throw err
        }
    }
    async channelDetails(channelId){
        try{
            const details = await DataStore.query(ChannelModel, channelId)
            return details

        }catch(err){
            throw err
        }
    }
    async updateChannelDetails(editedChannelDetails){
        const original = await DataStore.query(ChannelModel, editedChannelDetails.id)
        let isChannelMonetize; 
        let isChannelVerified;
        if(editedChannelDetails.isChannelMonetize==='false' || editedChannelDetails.isChannelMonetize===false){
            isChannelMonetize=false
        }
        if(editedChannelDetails.isChannelMonetize==='true' || editedChannelDetails.isChannelMonetize===true){
            isChannelMonetize=true
        }
        if(editedChannelDetails.isChannelVerified==='false' || editedChannelDetails.isChannelVerified===false){
            isChannelVerified=false
        }
        if(editedChannelDetails.isChannelVerified==='true' || editedChannelDetails.isChannelVerified===true){
            isChannelVerified=true
        }
        if(original){
            try{
                const updateChannelDetails = await DataStore.save(
                    ChannelModel.copyOf(original, updated => {
                        updated.rollNumber = parseInt(editedChannelDetails.rollNumber)
                        updated.channelName = editedChannelDetails.channelName
                        updated.handleName = editedChannelDetails.handleName
                        updated.totalSubscribers = editedChannelDetails.totalSubscribers
                        updated.totalVideos = editedChannelDetails.totalVideos
                        updated.totalViews = editedChannelDetails.totalViews
                        updated.level = editedChannelDetails.level
                        updated.membership = editedChannelDetails.membership
                        updated.isChannelMonetize = isChannelMonetize
                        updated.isChannelVerified = isChannelVerified
                    })
                  );
                  return updateChannelDetails
            }catch(error){
                throw error;
            }
        }
    }
    async deleteChannel(channelId){
        const toDeleteChannel = await DataStore.query(ChannelModel, channelId);
        try{
            const deleteChannel = await DataStore.save(
                ChannelModel.copyOf(toDeleteChannel, update => {
                    update.status = 'N'
                })
            )
            return deleteChannel
        }catch(error){
            console.log(error);
        }
    }
    // async insertdata(){
    //     await DataStore.save(
    //         new ChannelModel({
    //             ChannleCategory:'xyz',
    //             ChannleDiscription: 'fldsakfjasldfj',
    //             ChannleId: 'fldsakfjasldfj',
    //             ChannleLink: 'fldsakfjasldfj',
    //             ChannleName: 'fldsakfjasldfj',
    //             ChannleSubCategory: 'fldsakfjasldfj',
    //             DailyVideoLimit: 'fldsakfjasldfj',
    //             email: 'fldsakfjasldfj',
    //             facebookUrl: 'fldsakfjasldfj',
    //             HandleName: 'fldsakfjasldfj',
    //             InstagramUrl: 'fldsakfjasldfj',
    //             IsChannelMonitize: 'fldsakfjasldfj',
    //             isChannleVerified: 'fldsakfjasldfj',
    //             LastUpdateTime: 'fldsakfjasldfj',
    //             LastVideoDateTime: 'fldsakfjasldfj',
    //             Level: 'fldsakfjasldfj',
    //             membership: 'fldsakfjasldfj',
    //             RollNO: '1123446',
    //             usermodelID:'11656546544645',
    //             totalSubscriber: 'fldsakfjasldfj',
    //             totalSubscriberJOin: 'fldsakfjasldfj',
    //             TotalVideos: 'fldsakfjasldfj',
    //             TotalViews: 'fldsakfjasldfj',
    //             UserModelId: 'fldsakfjasldfj',
    //             VerifyStatus: 'fldsakfjasldfj',
    //             VideoType: 'fldsakfjasldfj',
    //             ViralGuessScore: 'fldsakfjasldfj',
    //             ViralVideoScore: 'fldsakfjasldfj',
    //             LastChangedAt: 'fldsakfjasldfj',
    //             Version: 'fldsakfjasldfj',
    //             Action: 'fldsakfjasldfj',
    //             status:'Y'
    //         })
    //     )
    // }
}


// Quries on Video Model.
class VideoQuries{
    async findVideoModelDataByLimit(page, pageLimit, sortBy){
        if(!(page==undefined) && !(pageLimit==undefined) && !(sortBy==undefined)){
            let sortVideoModel;
            switch(true){
                case (sortBy.toSort==='views'):
                    if(sortBy.isSortByView){
                        sortVideoModel = {sort:(s)=>s.videoViews(SortDirection.ASCENDING)}
                    }else{
                        sortVideoModel = {sort:(s)=>s.videoViews(SortDirection.DESCENDING)}   
                    }
                    break;
                case (sortBy.toSort==='like'):
                    if(sortBy.isSortByLike){
                        sortVideoModel = {sort:(s)=>s.videoLikeCount(SortDirection.ASCENDING)}
                    }else{
                        sortVideoModel = {sort:(s)=>s.videoLikeCount(SortDirection.DESCENDING)}   
                    }
                    break
                case (sortBy.toSort==='rating'):
                    if(sortBy.isSortByRating){
                        sortVideoModel = {sort:(s)=>s.ratingCount(SortDirection.ASCENDING)}
    
                    }else{
                        sortVideoModel = {sort:(s)=>s.ratingCount(SortDirection.DESCENDING)}   
                    }
                    break
                default:
                    console.log('showing data without sorting.');
            }
            try{
                const allVideos = await DataStore.query(VideoModel, (data)=>
                data.status.eq('Y'),
                {
                    ...sortVideoModel,
                    page:page,
                    limit:pageLimit
                }
                )
                return allVideos
            }catch(err){
                throw err
            }
        }
    }
    async findVideoModelDataLength(){
        const videoModelDataLength = (await DataStore.query(VideoModel, (data)=>
        data.status.eq('Y')
        )).length
        return videoModelDataLength
    }
    async searchInVideoModelData(searchField){
        const searchedVideoModel = await DataStore.query(VideoModel, (user)=>
        user.and(user=>[
            user.status.contains('Y'),
            user.search.contains(searchField)
        ])
        )
        return searchedVideoModel
    }
    async videoModelDetails(videoModelId){
        if(videoModelId){
            const details = await DataStore.query(VideoModel, videoModelId)
            return details
        }
    }
    async deleteVideoModelData(videoModelDataId){
        try{
            const toDelete = await DataStore.query(VideoModel, videoModelDataId)
            const deleteModelData = await DataStore.save(
                VideoModel.copyOf(toDelete, update=>{
                    update.status = 'N'
                })
            )
            return deleteModelData
        }catch(err){
            throw err
        }
    }
    // async insertdata(){
    //     await DataStore.save(
    //         new VideoModel({
    //             videoID:'1000',
    //             videoTitle:'kusti championship',
    //             videoViews:Math.floor(Math.random() * 90000) + 1000,
    //             videoLikeCount:Math.floor(Math.random() * 90000) + 100,
    //             ratingCount:Math.floor(Math.random() * 90000) + 10,
    //             ratingYes:'yes',
    //             ratingNo:'no',
    //             channelmodelID:'123456789',
    //             videoUrl:'https://youtube.com/shorts/fPRsX3pBgwk?feature=share',
    //             status:'Y'
    //         })
    //     )
    // }
}

//Quries on admin video model.
class AdminVideoQuries{
    async findAdminVideoModelDataByLimit(page, pageLimit){
        const videoModelData = await DataStore.query(AdminVideoModel, (data)=>
        data.status.eq('Y'),
        {
            page:page,
            limit:pageLimit
        }
        )
        return videoModelData
    }
    async findAdminVideoModelDataLength(){
        const adminVideoModelDataLength = (await DataStore.query(AdminVideoModel, (data)=>
        data.status.eq('Y')
        )).length
        return adminVideoModelDataLength
    }
    async searchInAdminVideoModelData(searchField){
        const searchedAdminVideoModelData = await DataStore.query(AdminVideoModel, (data)=>
        data.and(data=>[
            data.status.contains('Y'),
            data.search.contains(searchField)
        ])
        )
        return searchedAdminVideoModelData
    }
    async adminVideoModeDetails(adminVideoModelId){
        if(adminVideoModelId){
            const details = await DataStore.query(AdminVideoModel, adminVideoModelId)
            return details
        }
    } 
    async updateAdminVideoModelDetails(details){
        const original = await DataStore.query(AdminVideoModel, details.id)
        if(original){
            const updateDetails = await DataStore.save(
                AdminVideoModel.copyOf(original, updated=>{
                    updated.videoTitle = details.videoTitle
                    updated.videoCategory = details.videoCategory
                })
            );
            return updateDetails 
        }
    }
    async deleteAdminVideoModelData(adminVideoModelID){
        const toDelete = await DataStore.query(AdminVideoModel,adminVideoModelID )
        if(toDelete){
            const deleteModelData = await DataStore.save(
                AdminVideoModel.copyOf(toDelete, updete => {
                    updete.status = 'N'
                })
            )
            return deleteModelData
        }
    }
}

//Quries on setting Model.
class SettingQueries{
    async findSettingModelDataByLimit(page, pageLimit){
        const settingModelData = await DataStore.query(SettingModel,
            Predicates.ALL, 
            {
                page:page,
                limit:pageLimit
            }
            )
        return settingModelData
    }
    async findSettingModelDataLength(){
        const settingModelDataLength = (await DataStore.query(SettingModel)).length
        return settingModelDataLength
    }
    async searchInsettingModelData(searchField){
        const searchSettingModelData = await DataStore.query(SettingModel, (data)=>
        data.and(data=>[
            data.settingKey.contains(searchField)
        ])
        )
        return searchSettingModelData
    }
    async settingModelDetails(settingModelId){
        if(settingModelId){
            const details = await DataStore.query(SettingModel, settingModelId)
            return details
        }
    }
    async updateSettingModelDetails(details){
        const original = await DataStore.query(SettingModel, details.id)
        if(original){
            const updateDetails = await DataStore.save(
                SettingModel.copyOf(original, update=>{
                    update.displayName = details.displayName
                    update.settingKey = details.settingKey
                    update.settingValue = details.settingValue
                })
            )
            return updateDetails
        }
    }
}

// Quries on  Tag Model.
class TagQueries{
    async findTagModelDataByLimit(page, pageLimit){
        const tagModelData = await DataStore.query(TagModel, (data)=>
        data.status.eq('Y'),
        {
            page:page,
            limit:pageLimit
        }
        )
        return tagModelData
    }
    async findTagModelDataLength(){
        const tagModelDataLength = (await DataStore.query(TagModel, (data)=>
        data.status.eq('Y')
        )).length
        return tagModelDataLength
    }
    async searchInTagModelData(searchField){
        const searchedTagModelData = await DataStore.query(TagModel, (data)=>
        data.and(data=>[
            data.status.contains('Y'),
            data.search.contains(searchField)
        ])
        )
        return searchedTagModelData
    }
    async addNewTagModelData(addFields){
        if(addFields){
            const addNewData = await DataStore.save(
                new TagModel({
                    status:'Y',
                    title:addFields.title,
                    tags:addFields.tags,
                    link:addFields.link,
                    search:(addFields.title + " " + addFields.tags).toLowerCase()
                })
                )
            return addNewData
        }
    }
    async tagModelDetails(tagModelId){
        if(tagModelId){
            const details = await DataStore.query(TagModel, tagModelId)
            return details
        }
    }
    async updateTagModelDetails(updatedDetails){
        const original = await DataStore.query(TagModel, updatedDetails.id)
        if(original){
            const updateDetails = await DataStore.save(
                TagModel.copyOf(original, update=>{
                    update.title = updatedDetails.title
                    update.tags = updatedDetails.tags
                    update.link = updatedDetails.link
                    update.search = (updatedDetails.title + " " + updatedDetails.tags).toLowerCase()
                })
            );
            return updateDetails
        }
        console.log(updatedDetails);
    }
    async deleteTagModelData(tagModelId){
        const toDelete = await DataStore.query(TagModel, tagModelId)
        if(toDelete){
            const deleteModelData = await DataStore.save(
                TagModel.copyOf(toDelete, update=>{
                    update.status = 'N'
                })
            )
            return deleteModelData
        }
    }
}

export {
    LoginQuries, 
    Quries, 
    ChannelQuries, 
    VideoQuries, 
    AdminVideoQuries, 
    SettingQueries, 
    TagQueries
}

