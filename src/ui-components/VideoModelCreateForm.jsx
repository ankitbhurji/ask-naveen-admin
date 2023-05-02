/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VideoModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VideoModelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    videoUrl: "",
    videoDateTime: "",
    videoTitle: "",
    videoType: "",
    status: "",
    addDateTime: "",
    otherData: "",
    addIpAddress: "",
    videoViews: "",
    videoID: "",
    videoCategory: "",
    videoDescription: "",
    ratingNo: "",
    ratingCount: "",
    commentCount: "",
    channelmodelID: "",
    videoCategoryId: "",
    videoTags: "",
    videoLikeCount: "",
    ratingYes: "",
    viralCheckEndDateTime: "",
    viralFinalScore: "",
    viralViewsRquired: "",
    search: "",
    videoClickCount: "",
  };
  const [videoUrl, setVideoUrl] = React.useState(initialValues.videoUrl);
  const [videoDateTime, setVideoDateTime] = React.useState(
    initialValues.videoDateTime
  );
  const [videoTitle, setVideoTitle] = React.useState(initialValues.videoTitle);
  const [videoType, setVideoType] = React.useState(initialValues.videoType);
  const [status, setStatus] = React.useState(initialValues.status);
  const [addDateTime, setAddDateTime] = React.useState(
    initialValues.addDateTime
  );
  const [otherData, setOtherData] = React.useState(initialValues.otherData);
  const [addIpAddress, setAddIpAddress] = React.useState(
    initialValues.addIpAddress
  );
  const [videoViews, setVideoViews] = React.useState(initialValues.videoViews);
  const [videoID, setVideoID] = React.useState(initialValues.videoID);
  const [videoCategory, setVideoCategory] = React.useState(
    initialValues.videoCategory
  );
  const [videoDescription, setVideoDescription] = React.useState(
    initialValues.videoDescription
  );
  const [ratingNo, setRatingNo] = React.useState(initialValues.ratingNo);
  const [ratingCount, setRatingCount] = React.useState(
    initialValues.ratingCount
  );
  const [commentCount, setCommentCount] = React.useState(
    initialValues.commentCount
  );
  const [channelmodelID, setChannelmodelID] = React.useState(
    initialValues.channelmodelID
  );
  const [videoCategoryId, setVideoCategoryId] = React.useState(
    initialValues.videoCategoryId
  );
  const [videoTags, setVideoTags] = React.useState(initialValues.videoTags);
  const [videoLikeCount, setVideoLikeCount] = React.useState(
    initialValues.videoLikeCount
  );
  const [ratingYes, setRatingYes] = React.useState(initialValues.ratingYes);
  const [viralCheckEndDateTime, setViralCheckEndDateTime] = React.useState(
    initialValues.viralCheckEndDateTime
  );
  const [viralFinalScore, setViralFinalScore] = React.useState(
    initialValues.viralFinalScore
  );
  const [viralViewsRquired, setViralViewsRquired] = React.useState(
    initialValues.viralViewsRquired
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [videoClickCount, setVideoClickCount] = React.useState(
    initialValues.videoClickCount
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVideoUrl(initialValues.videoUrl);
    setVideoDateTime(initialValues.videoDateTime);
    setVideoTitle(initialValues.videoTitle);
    setVideoType(initialValues.videoType);
    setStatus(initialValues.status);
    setAddDateTime(initialValues.addDateTime);
    setOtherData(initialValues.otherData);
    setAddIpAddress(initialValues.addIpAddress);
    setVideoViews(initialValues.videoViews);
    setVideoID(initialValues.videoID);
    setVideoCategory(initialValues.videoCategory);
    setVideoDescription(initialValues.videoDescription);
    setRatingNo(initialValues.ratingNo);
    setRatingCount(initialValues.ratingCount);
    setCommentCount(initialValues.commentCount);
    setChannelmodelID(initialValues.channelmodelID);
    setVideoCategoryId(initialValues.videoCategoryId);
    setVideoTags(initialValues.videoTags);
    setVideoLikeCount(initialValues.videoLikeCount);
    setRatingYes(initialValues.ratingYes);
    setViralCheckEndDateTime(initialValues.viralCheckEndDateTime);
    setViralFinalScore(initialValues.viralFinalScore);
    setViralViewsRquired(initialValues.viralViewsRquired);
    setSearch(initialValues.search);
    setVideoClickCount(initialValues.videoClickCount);
    setErrors({});
  };
  const validations = {
    videoUrl: [],
    videoDateTime: [],
    videoTitle: [],
    videoType: [],
    status: [],
    addDateTime: [],
    otherData: [{ type: "JSON" }],
    addIpAddress: [{ type: "IpAddress" }],
    videoViews: [],
    videoID: [],
    videoCategory: [],
    videoDescription: [],
    ratingNo: [],
    ratingCount: [],
    commentCount: [],
    channelmodelID: [{ type: "Required" }],
    videoCategoryId: [],
    videoTags: [],
    videoLikeCount: [],
    ratingYes: [],
    viralCheckEndDateTime: [],
    viralFinalScore: [],
    viralViewsRquired: [],
    search: [],
    videoClickCount: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          videoUrl,
          videoDateTime,
          videoTitle,
          videoType,
          status,
          addDateTime,
          otherData,
          addIpAddress,
          videoViews,
          videoID,
          videoCategory,
          videoDescription,
          ratingNo,
          ratingCount,
          commentCount,
          channelmodelID,
          videoCategoryId,
          videoTags,
          videoLikeCount,
          ratingYes,
          viralCheckEndDateTime,
          viralFinalScore,
          viralViewsRquired,
          search,
          videoClickCount,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new VideoModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VideoModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl: value,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoUrl ?? value;
          }
          if (errors.videoUrl?.hasError) {
            runValidationTasks("videoUrl", value);
          }
          setVideoUrl(value);
        }}
        onBlur={() => runValidationTasks("videoUrl", videoUrl)}
        errorMessage={errors.videoUrl?.errorMessage}
        hasError={errors.videoUrl?.hasError}
        {...getOverrideProps(overrides, "videoUrl")}
      ></TextField>
      <TextField
        label="Video date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={videoDateTime && convertToLocal(new Date(videoDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime: value,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoDateTime ?? value;
          }
          if (errors.videoDateTime?.hasError) {
            runValidationTasks("videoDateTime", value);
          }
          setVideoDateTime(value);
        }}
        onBlur={() => runValidationTasks("videoDateTime", videoDateTime)}
        errorMessage={errors.videoDateTime?.errorMessage}
        hasError={errors.videoDateTime?.hasError}
        {...getOverrideProps(overrides, "videoDateTime")}
      ></TextField>
      <TextField
        label="Video title"
        isRequired={false}
        isReadOnly={false}
        value={videoTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle: value,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoTitle ?? value;
          }
          if (errors.videoTitle?.hasError) {
            runValidationTasks("videoTitle", value);
          }
          setVideoTitle(value);
        }}
        onBlur={() => runValidationTasks("videoTitle", videoTitle)}
        errorMessage={errors.videoTitle?.errorMessage}
        hasError={errors.videoTitle?.hasError}
        {...getOverrideProps(overrides, "videoTitle")}
      ></TextField>
      <TextField
        label="Video type"
        isRequired={false}
        isReadOnly={false}
        value={videoType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType: value,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoType ?? value;
          }
          if (errors.videoType?.hasError) {
            runValidationTasks("videoType", value);
          }
          setVideoType(value);
        }}
        onBlur={() => runValidationTasks("videoType", videoType)}
        errorMessage={errors.videoType?.errorMessage}
        hasError={errors.videoType?.hasError}
        {...getOverrideProps(overrides, "videoType")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status: value,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Add date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={addDateTime && convertToLocal(new Date(addDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime: value,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.addDateTime ?? value;
          }
          if (errors.addDateTime?.hasError) {
            runValidationTasks("addDateTime", value);
          }
          setAddDateTime(value);
        }}
        onBlur={() => runValidationTasks("addDateTime", addDateTime)}
        errorMessage={errors.addDateTime?.errorMessage}
        hasError={errors.addDateTime?.hasError}
        {...getOverrideProps(overrides, "addDateTime")}
      ></TextField>
      <TextAreaField
        label="Other data"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData: value,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.otherData ?? value;
          }
          if (errors.otherData?.hasError) {
            runValidationTasks("otherData", value);
          }
          setOtherData(value);
        }}
        onBlur={() => runValidationTasks("otherData", otherData)}
        errorMessage={errors.otherData?.errorMessage}
        hasError={errors.otherData?.hasError}
        {...getOverrideProps(overrides, "otherData")}
      ></TextAreaField>
      <TextField
        label="Add ip address"
        isRequired={false}
        isReadOnly={false}
        value={addIpAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress: value,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.addIpAddress ?? value;
          }
          if (errors.addIpAddress?.hasError) {
            runValidationTasks("addIpAddress", value);
          }
          setAddIpAddress(value);
        }}
        onBlur={() => runValidationTasks("addIpAddress", addIpAddress)}
        errorMessage={errors.addIpAddress?.errorMessage}
        hasError={errors.addIpAddress?.hasError}
        {...getOverrideProps(overrides, "addIpAddress")}
      ></TextField>
      <TextField
        label="Video views"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={videoViews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews: value,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoViews ?? value;
          }
          if (errors.videoViews?.hasError) {
            runValidationTasks("videoViews", value);
          }
          setVideoViews(value);
        }}
        onBlur={() => runValidationTasks("videoViews", videoViews)}
        errorMessage={errors.videoViews?.errorMessage}
        hasError={errors.videoViews?.hasError}
        {...getOverrideProps(overrides, "videoViews")}
      ></TextField>
      <TextField
        label="Video id"
        isRequired={false}
        isReadOnly={false}
        value={videoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID: value,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoID ?? value;
          }
          if (errors.videoID?.hasError) {
            runValidationTasks("videoID", value);
          }
          setVideoID(value);
        }}
        onBlur={() => runValidationTasks("videoID", videoID)}
        errorMessage={errors.videoID?.errorMessage}
        hasError={errors.videoID?.hasError}
        {...getOverrideProps(overrides, "videoID")}
      ></TextField>
      <TextField
        label="Video category"
        isRequired={false}
        isReadOnly={false}
        value={videoCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory: value,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoCategory ?? value;
          }
          if (errors.videoCategory?.hasError) {
            runValidationTasks("videoCategory", value);
          }
          setVideoCategory(value);
        }}
        onBlur={() => runValidationTasks("videoCategory", videoCategory)}
        errorMessage={errors.videoCategory?.errorMessage}
        hasError={errors.videoCategory?.hasError}
        {...getOverrideProps(overrides, "videoCategory")}
      ></TextField>
      <TextField
        label="Video description"
        isRequired={false}
        isReadOnly={false}
        value={videoDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription: value,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoDescription ?? value;
          }
          if (errors.videoDescription?.hasError) {
            runValidationTasks("videoDescription", value);
          }
          setVideoDescription(value);
        }}
        onBlur={() => runValidationTasks("videoDescription", videoDescription)}
        errorMessage={errors.videoDescription?.errorMessage}
        hasError={errors.videoDescription?.hasError}
        {...getOverrideProps(overrides, "videoDescription")}
      ></TextField>
      <TextField
        label="Rating no"
        isRequired={false}
        isReadOnly={false}
        value={ratingNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo: value,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.ratingNo ?? value;
          }
          if (errors.ratingNo?.hasError) {
            runValidationTasks("ratingNo", value);
          }
          setRatingNo(value);
        }}
        onBlur={() => runValidationTasks("ratingNo", ratingNo)}
        errorMessage={errors.ratingNo?.errorMessage}
        hasError={errors.ratingNo?.hasError}
        {...getOverrideProps(overrides, "ratingNo")}
      ></TextField>
      <TextField
        label="Rating count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ratingCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount: value,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.ratingCount ?? value;
          }
          if (errors.ratingCount?.hasError) {
            runValidationTasks("ratingCount", value);
          }
          setRatingCount(value);
        }}
        onBlur={() => runValidationTasks("ratingCount", ratingCount)}
        errorMessage={errors.ratingCount?.errorMessage}
        hasError={errors.ratingCount?.hasError}
        {...getOverrideProps(overrides, "ratingCount")}
      ></TextField>
      <TextField
        label="Comment count"
        isRequired={false}
        isReadOnly={false}
        value={commentCount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount: value,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.commentCount ?? value;
          }
          if (errors.commentCount?.hasError) {
            runValidationTasks("commentCount", value);
          }
          setCommentCount(value);
        }}
        onBlur={() => runValidationTasks("commentCount", commentCount)}
        errorMessage={errors.commentCount?.errorMessage}
        hasError={errors.commentCount?.hasError}
        {...getOverrideProps(overrides, "commentCount")}
      ></TextField>
      <TextField
        label="Channelmodel id"
        isRequired={true}
        isReadOnly={false}
        value={channelmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID: value,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.channelmodelID ?? value;
          }
          if (errors.channelmodelID?.hasError) {
            runValidationTasks("channelmodelID", value);
          }
          setChannelmodelID(value);
        }}
        onBlur={() => runValidationTasks("channelmodelID", channelmodelID)}
        errorMessage={errors.channelmodelID?.errorMessage}
        hasError={errors.channelmodelID?.hasError}
        {...getOverrideProps(overrides, "channelmodelID")}
      ></TextField>
      <TextField
        label="Video category id"
        isRequired={false}
        isReadOnly={false}
        value={videoCategoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId: value,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoCategoryId ?? value;
          }
          if (errors.videoCategoryId?.hasError) {
            runValidationTasks("videoCategoryId", value);
          }
          setVideoCategoryId(value);
        }}
        onBlur={() => runValidationTasks("videoCategoryId", videoCategoryId)}
        errorMessage={errors.videoCategoryId?.errorMessage}
        hasError={errors.videoCategoryId?.hasError}
        {...getOverrideProps(overrides, "videoCategoryId")}
      ></TextField>
      <TextField
        label="Video tags"
        isRequired={false}
        isReadOnly={false}
        value={videoTags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags: value,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoTags ?? value;
          }
          if (errors.videoTags?.hasError) {
            runValidationTasks("videoTags", value);
          }
          setVideoTags(value);
        }}
        onBlur={() => runValidationTasks("videoTags", videoTags)}
        errorMessage={errors.videoTags?.errorMessage}
        hasError={errors.videoTags?.hasError}
        {...getOverrideProps(overrides, "videoTags")}
      ></TextField>
      <TextField
        label="Video like count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={videoLikeCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount: value,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.videoLikeCount ?? value;
          }
          if (errors.videoLikeCount?.hasError) {
            runValidationTasks("videoLikeCount", value);
          }
          setVideoLikeCount(value);
        }}
        onBlur={() => runValidationTasks("videoLikeCount", videoLikeCount)}
        errorMessage={errors.videoLikeCount?.errorMessage}
        hasError={errors.videoLikeCount?.hasError}
        {...getOverrideProps(overrides, "videoLikeCount")}
      ></TextField>
      <TextField
        label="Rating yes"
        isRequired={false}
        isReadOnly={false}
        value={ratingYes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes: value,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.ratingYes ?? value;
          }
          if (errors.ratingYes?.hasError) {
            runValidationTasks("ratingYes", value);
          }
          setRatingYes(value);
        }}
        onBlur={() => runValidationTasks("ratingYes", ratingYes)}
        errorMessage={errors.ratingYes?.errorMessage}
        hasError={errors.ratingYes?.hasError}
        {...getOverrideProps(overrides, "ratingYes")}
      ></TextField>
      <TextField
        label="Viral check end date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          viralCheckEndDateTime &&
          convertToLocal(new Date(viralCheckEndDateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime: value,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.viralCheckEndDateTime ?? value;
          }
          if (errors.viralCheckEndDateTime?.hasError) {
            runValidationTasks("viralCheckEndDateTime", value);
          }
          setViralCheckEndDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("viralCheckEndDateTime", viralCheckEndDateTime)
        }
        errorMessage={errors.viralCheckEndDateTime?.errorMessage}
        hasError={errors.viralCheckEndDateTime?.hasError}
        {...getOverrideProps(overrides, "viralCheckEndDateTime")}
      ></TextField>
      <TextField
        label="Viral final score"
        isRequired={false}
        isReadOnly={false}
        value={viralFinalScore}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore: value,
              viralViewsRquired,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.viralFinalScore ?? value;
          }
          if (errors.viralFinalScore?.hasError) {
            runValidationTasks("viralFinalScore", value);
          }
          setViralFinalScore(value);
        }}
        onBlur={() => runValidationTasks("viralFinalScore", viralFinalScore)}
        errorMessage={errors.viralFinalScore?.errorMessage}
        hasError={errors.viralFinalScore?.hasError}
        {...getOverrideProps(overrides, "viralFinalScore")}
      ></TextField>
      <TextField
        label="Viral views rquired"
        isRequired={false}
        isReadOnly={false}
        value={viralViewsRquired}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired: value,
              search,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.viralViewsRquired ?? value;
          }
          if (errors.viralViewsRquired?.hasError) {
            runValidationTasks("viralViewsRquired", value);
          }
          setViralViewsRquired(value);
        }}
        onBlur={() =>
          runValidationTasks("viralViewsRquired", viralViewsRquired)
        }
        errorMessage={errors.viralViewsRquired?.errorMessage}
        hasError={errors.viralViewsRquired?.hasError}
        {...getOverrideProps(overrides, "viralViewsRquired")}
      ></TextField>
      <TextField
        label="Search"
        isRequired={false}
        isReadOnly={false}
        value={search}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search: value,
              videoClickCount,
            };
            const result = onChange(modelFields);
            value = result?.search ?? value;
          }
          if (errors.search?.hasError) {
            runValidationTasks("search", value);
          }
          setSearch(value);
        }}
        onBlur={() => runValidationTasks("search", search)}
        errorMessage={errors.search?.errorMessage}
        hasError={errors.search?.hasError}
        {...getOverrideProps(overrides, "search")}
      ></TextField>
      <TextField
        label="Video click count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={videoClickCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              videoUrl,
              videoDateTime,
              videoTitle,
              videoType,
              status,
              addDateTime,
              otherData,
              addIpAddress,
              videoViews,
              videoID,
              videoCategory,
              videoDescription,
              ratingNo,
              ratingCount,
              commentCount,
              channelmodelID,
              videoCategoryId,
              videoTags,
              videoLikeCount,
              ratingYes,
              viralCheckEndDateTime,
              viralFinalScore,
              viralViewsRquired,
              search,
              videoClickCount: value,
            };
            const result = onChange(modelFields);
            value = result?.videoClickCount ?? value;
          }
          if (errors.videoClickCount?.hasError) {
            runValidationTasks("videoClickCount", value);
          }
          setVideoClickCount(value);
        }}
        onBlur={() => runValidationTasks("videoClickCount", videoClickCount)}
        errorMessage={errors.videoClickCount?.errorMessage}
        hasError={errors.videoClickCount?.hasError}
        {...getOverrideProps(overrides, "videoClickCount")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
