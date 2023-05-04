// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UpdateChannelEnum = {
  "APP": "APP",
  "ADMIN": "ADMIN",
  "CRON": "CRON"
};

const CommentTypeEnum = {
  "TEXT": "TEXT",
  "LINK": "LINK",
  "IMAGE": "IMAGE",
  "VOICE": "VOICE"
};

const UserTypeEnum = {
  "USER": "USER",
  "SUPERADMIN": "SUPERADMIN",
  "ADMIN": "ADMIN"
};

const { TagModel, NotificationTable, VideoClickHistoryModel, ChannelHistoryModel, RollNumberModel, VideoCommentModel, VideoRatingModel, AdminVideoModel, ChannelModel, DiscussionModel, SettingModel, VideoModel, UserModel } = initSchema(schema);

export {
  TagModel,
  NotificationTable,
  VideoClickHistoryModel,
  ChannelHistoryModel,
  RollNumberModel,
  VideoCommentModel,
  VideoRatingModel,
  AdminVideoModel,
  ChannelModel,
  DiscussionModel,
  SettingModel,
  VideoModel,
  UserModel,
  UpdateChannelEnum,
  CommentTypeEnum,
  UserTypeEnum
};