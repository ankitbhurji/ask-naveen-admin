import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum UpdateChannelEnum {
  APP = "APP",
  ADMIN = "ADMIN",
  CRON = "CRON"
}

export enum CommentTypeEnum {
  TEXT = "TEXT",
  LINK = "LINK",
  IMAGE = "IMAGE",
  VOICE = "VOICE"
}

export enum UserTypeEnum {
  USER = "USER",
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN"
}



type EagerTagModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TagModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly tags?: string | null;
  readonly link?: string | null;
  readonly status?: string | null;
  readonly search?: string | null;
  readonly addDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTagModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TagModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly tags?: string | null;
  readonly link?: string | null;
  readonly status?: string | null;
  readonly search?: string | null;
  readonly addDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TagModel = LazyLoading extends LazyLoadingDisabled ? EagerTagModel : LazyTagModel

export declare const TagModel: (new (init: ModelInit<TagModel>) => TagModel) & {
  copyOf(source: TagModel, mutator: (draft: MutableModel<TagModel>) => MutableModel<TagModel> | void): TagModel;
}

type EagerNotificationTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NotificationTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userModelId?: string | null;
  readonly channelModelId?: string | null;
  readonly firebaseId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotificationTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NotificationTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userModelId?: string | null;
  readonly channelModelId?: string | null;
  readonly firebaseId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NotificationTable = LazyLoading extends LazyLoadingDisabled ? EagerNotificationTable : LazyNotificationTable

export declare const NotificationTable: (new (init: ModelInit<NotificationTable>) => NotificationTable) & {
  copyOf(source: NotificationTable, mutator: (draft: MutableModel<NotificationTable>) => MutableModel<NotificationTable> | void): NotificationTable;
}

type EagerVideoClickHistoryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoClickHistoryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoId?: string | null;
  readonly videoModelID?: string | null;
  readonly videoClickTime?: string | null;
  readonly userModelID?: string | null;
  readonly channelModelID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoClickHistoryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoClickHistoryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoId?: string | null;
  readonly videoModelID?: string | null;
  readonly videoClickTime?: string | null;
  readonly userModelID?: string | null;
  readonly channelModelID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoClickHistoryModel = LazyLoading extends LazyLoadingDisabled ? EagerVideoClickHistoryModel : LazyVideoClickHistoryModel

export declare const VideoClickHistoryModel: (new (init: ModelInit<VideoClickHistoryModel>) => VideoClickHistoryModel) & {
  copyOf(source: VideoClickHistoryModel, mutator: (draft: MutableModel<VideoClickHistoryModel>) => MutableModel<VideoClickHistoryModel> | void): VideoClickHistoryModel;
}

type EagerChannelHistoryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelHistoryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly totalViews?: string | null;
  readonly channelmodelID: string;
  readonly totalVideos?: string | null;
  readonly totalSubscribers?: string | null;
  readonly addDateTime?: string | null;
  readonly updatedBy?: UpdateChannelEnum | keyof typeof UpdateChannelEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannelHistoryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelHistoryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly totalViews?: string | null;
  readonly channelmodelID: string;
  readonly totalVideos?: string | null;
  readonly totalSubscribers?: string | null;
  readonly addDateTime?: string | null;
  readonly updatedBy?: UpdateChannelEnum | keyof typeof UpdateChannelEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChannelHistoryModel = LazyLoading extends LazyLoadingDisabled ? EagerChannelHistoryModel : LazyChannelHistoryModel

export declare const ChannelHistoryModel: (new (init: ModelInit<ChannelHistoryModel>) => ChannelHistoryModel) & {
  copyOf(source: ChannelHistoryModel, mutator: (draft: MutableModel<ChannelHistoryModel>) => MutableModel<ChannelHistoryModel> | void): ChannelHistoryModel;
}

type EagerRollNumberModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RollNumberModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rollNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRollNumberModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RollNumberModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rollNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RollNumberModel = LazyLoading extends LazyLoadingDisabled ? EagerRollNumberModel : LazyRollNumberModel

export declare const RollNumberModel: (new (init: ModelInit<RollNumberModel>) => RollNumberModel) & {
  copyOf(source: RollNumberModel, mutator: (draft: MutableModel<RollNumberModel>) => MutableModel<RollNumberModel> | void): RollNumberModel;
}

type EagerVideoCommentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCommentModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly status?: string | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoCommentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCommentModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly status?: string | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoCommentModel = LazyLoading extends LazyLoadingDisabled ? EagerVideoCommentModel : LazyVideoCommentModel

export declare const VideoCommentModel: (new (init: ModelInit<VideoCommentModel>) => VideoCommentModel) & {
  copyOf(source: VideoCommentModel, mutator: (draft: MutableModel<VideoCommentModel>) => MutableModel<VideoCommentModel> | void): VideoCommentModel;
}

type EagerVideoRatingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoRatingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly feedback?: string | null;
  readonly isViral?: boolean | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly point?: number | null;
  readonly addDateTime?: string | null;
  readonly viralViews?: string | null;
  readonly videoActualViews?: string | null;
  readonly viralCheckDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoRatingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoRatingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly feedback?: string | null;
  readonly isViral?: boolean | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly point?: number | null;
  readonly addDateTime?: string | null;
  readonly viralViews?: string | null;
  readonly videoActualViews?: string | null;
  readonly viralCheckDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoRatingModel = LazyLoading extends LazyLoadingDisabled ? EagerVideoRatingModel : LazyVideoRatingModel

export declare const VideoRatingModel: (new (init: ModelInit<VideoRatingModel>) => VideoRatingModel) & {
  copyOf(source: VideoRatingModel, mutator: (draft: MutableModel<VideoRatingModel>) => MutableModel<VideoRatingModel> | void): VideoRatingModel;
}

type EagerAdminVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminVideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoID?: string | null;
  readonly videoUrl?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly videoCategory?: string | null;
  readonly viewsCount?: string | null;
  readonly likesCount?: string | null;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoPublishDateTime?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminVideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoID?: string | null;
  readonly videoUrl?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly videoCategory?: string | null;
  readonly viewsCount?: string | null;
  readonly likesCount?: string | null;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoPublishDateTime?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminVideoModel = LazyLoading extends LazyLoadingDisabled ? EagerAdminVideoModel : LazyAdminVideoModel

export declare const AdminVideoModel: (new (init: ModelInit<AdminVideoModel>) => AdminVideoModel) & {
  copyOf(source: AdminVideoModel, mutator: (draft: MutableModel<AdminVideoModel>) => MutableModel<AdminVideoModel> | void): AdminVideoModel;
}

type EagerChannelModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly channelLink?: string | null;
  readonly channelId?: string | null;
  readonly totalSubscribersJoin?: number | null;
  readonly totalSubscribers?: string | null;
  readonly subscriberUpdateDate?: string | null;
  readonly channelCategory?: string | null;
  readonly isChannelMonetize?: boolean | null;
  readonly channelImage?: string | null;
  readonly channelBanner?: string | null;
  readonly channelDescription?: string | null;
  readonly handleName?: string | null;
  readonly totalViews?: string | null;
  readonly totalVideos?: string | null;
  readonly lastVideoDateTime?: string | null;
  readonly rollNumber?: number | null;
  readonly dailyVideoLimit?: number | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly status?: string | null;
  readonly membership?: string | null;
  readonly level?: string | null;
  readonly verifystatus?: string | null;
  readonly membershipExpiryDate?: string | null;
  readonly membershipDate?: string | null;
  readonly channelSubCategory?: string | null;
  readonly videoType?: string | null;
  readonly otherData?: string | null;
  readonly instagramUrl?: string | null;
  readonly facebookUrl?: string | null;
  readonly email?: string | null;
  readonly VideoRatings?: (ChannelHistoryModel | null)[] | null;
  readonly VideoComments?: (ChannelHistoryModel | null)[] | null;
  readonly VideoModels?: (ChannelHistoryModel | null)[] | null;
  readonly DiscussionChannelRelation?: (ChannelHistoryModel | null)[] | null;
  readonly usermodelID: string;
  readonly isChannelVerified?: boolean | null;
  readonly ChannelHistories?: (ChannelHistoryModel | null)[] | null;
  readonly viralGuessScore?: string | null;
  readonly viralVideoScore?: string | null;
  readonly lastUpdateTime?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannelModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly channelLink?: string | null;
  readonly channelId?: string | null;
  readonly totalSubscribersJoin?: number | null;
  readonly totalSubscribers?: string | null;
  readonly subscriberUpdateDate?: string | null;
  readonly channelCategory?: string | null;
  readonly isChannelMonetize?: boolean | null;
  readonly channelImage?: string | null;
  readonly channelBanner?: string | null;
  readonly channelDescription?: string | null;
  readonly handleName?: string | null;
  readonly totalViews?: string | null;
  readonly totalVideos?: string | null;
  readonly lastVideoDateTime?: string | null;
  readonly rollNumber?: number | null;
  readonly dailyVideoLimit?: number | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly status?: string | null;
  readonly membership?: string | null;
  readonly level?: string | null;
  readonly verifystatus?: string | null;
  readonly membershipExpiryDate?: string | null;
  readonly membershipDate?: string | null;
  readonly channelSubCategory?: string | null;
  readonly videoType?: string | null;
  readonly otherData?: string | null;
  readonly instagramUrl?: string | null;
  readonly facebookUrl?: string | null;
  readonly email?: string | null;
  readonly VideoRatings: AsyncCollection<ChannelHistoryModel>;
  readonly VideoComments: AsyncCollection<ChannelHistoryModel>;
  readonly VideoModels: AsyncCollection<ChannelHistoryModel>;
  readonly DiscussionChannelRelation: AsyncCollection<ChannelHistoryModel>;
  readonly usermodelID: string;
  readonly isChannelVerified?: boolean | null;
  readonly ChannelHistories: AsyncCollection<ChannelHistoryModel>;
  readonly viralGuessScore?: string | null;
  readonly viralVideoScore?: string | null;
  readonly lastUpdateTime?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChannelModel = LazyLoading extends LazyLoadingDisabled ? EagerChannelModel : LazyChannelModel

export declare const ChannelModel: (new (init: ModelInit<ChannelModel>) => ChannelModel) & {
  copyOf(source: ChannelModel, mutator: (draft: MutableModel<ChannelModel>) => MutableModel<ChannelModel> | void): ChannelModel;
}

type EagerDiscussionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscussionModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly commentType?: CommentTypeEnum | keyof typeof CommentTypeEnum | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly userHandle?: string | null;
  readonly otherData?: string | null;
  readonly toID?: string | null;
  readonly channelmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscussionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscussionModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly commentType?: CommentTypeEnum | keyof typeof CommentTypeEnum | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly userHandle?: string | null;
  readonly otherData?: string | null;
  readonly toID?: string | null;
  readonly channelmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiscussionModel = LazyLoading extends LazyLoadingDisabled ? EagerDiscussionModel : LazyDiscussionModel

export declare const DiscussionModel: (new (init: ModelInit<DiscussionModel>) => DiscussionModel) & {
  copyOf(source: DiscussionModel, mutator: (draft: MutableModel<DiscussionModel>) => MutableModel<DiscussionModel> | void): DiscussionModel;
}

type EagerSettingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SettingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settingKey?: string | null;
  readonly settingValue?: string | null;
  readonly displayName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySettingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SettingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settingKey?: string | null;
  readonly settingValue?: string | null;
  readonly displayName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SettingModel = LazyLoading extends LazyLoadingDisabled ? EagerSettingModel : LazySettingModel

export declare const SettingModel: (new (init: ModelInit<SettingModel>) => SettingModel) & {
  copyOf(source: SettingModel, mutator: (draft: MutableModel<SettingModel>) => MutableModel<SettingModel> | void): SettingModel;
}

type EagerVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUrl?: string | null;
  readonly videoDateTime?: string | null;
  readonly videoTitle?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly otherData?: string | null;
  readonly addIpAddress?: string | null;
  readonly videoViews?: number | null;
  readonly videoID?: string | null;
  readonly videoCategory?: string | null;
  readonly videoDescription?: string | null;
  readonly ratingNo?: string | null;
  readonly ratingCount?: number | null;
  readonly commentCount?: string | null;
  readonly VideoRatings?: (VideoCommentModel | null)[] | null;
  readonly VideoComments?: (VideoCommentModel | null)[] | null;
  readonly channelmodelID: string;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoLikeCount?: number | null;
  readonly ratingYes?: string | null;
  readonly viralCheckEndDateTime?: string | null;
  readonly viralFinalScore?: string | null;
  readonly viralViewsRquired?: string | null;
  readonly search?: string | null;
  readonly videoClickCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUrl?: string | null;
  readonly videoDateTime?: string | null;
  readonly videoTitle?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly otherData?: string | null;
  readonly addIpAddress?: string | null;
  readonly videoViews?: number | null;
  readonly videoID?: string | null;
  readonly videoCategory?: string | null;
  readonly videoDescription?: string | null;
  readonly ratingNo?: string | null;
  readonly ratingCount?: number | null;
  readonly commentCount?: string | null;
  readonly VideoRatings: AsyncCollection<VideoCommentModel>;
  readonly VideoComments: AsyncCollection<VideoCommentModel>;
  readonly channelmodelID: string;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoLikeCount?: number | null;
  readonly ratingYes?: string | null;
  readonly viralCheckEndDateTime?: string | null;
  readonly viralFinalScore?: string | null;
  readonly viralViewsRquired?: string | null;
  readonly search?: string | null;
  readonly videoClickCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoModel = LazyLoading extends LazyLoadingDisabled ? EagerVideoModel : LazyVideoModel

export declare const VideoModel: (new (init: ModelInit<VideoModel>) => VideoModel) & {
  copyOf(source: VideoModel, mutator: (draft: MutableModel<VideoModel>) => MutableModel<VideoModel> | void): VideoModel;
}

type EagerUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly mobileNumber?: string | null;
  readonly cityName?: string | null;
  readonly job?: string | null;
  readonly otp?: number | null;
  readonly addDateTime?: string | null;
  readonly gender?: string | null;
  readonly countryName?: string | null;
  readonly stateName?: string | null;
  readonly userType?: UserTypeEnum | keyof typeof UserTypeEnum | null;
  readonly status?: string | null;
  readonly lastLoginDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly UserChannelModelRelation?: (ChannelModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly mobileNumber?: string | null;
  readonly cityName?: string | null;
  readonly job?: string | null;
  readonly otp?: number | null;
  readonly addDateTime?: string | null;
  readonly gender?: string | null;
  readonly countryName?: string | null;
  readonly stateName?: string | null;
  readonly userType?: UserTypeEnum | keyof typeof UserTypeEnum | null;
  readonly status?: string | null;
  readonly lastLoginDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly UserChannelModelRelation: AsyncCollection<ChannelModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}