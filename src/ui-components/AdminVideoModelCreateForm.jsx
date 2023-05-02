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
import { AdminVideoModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AdminVideoModelCreateForm(props) {
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
    videoID: "",
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
    videoType: "",
    status: "",
    addDateTime: "",
    addIpAddress: "",
    otherData: "",
    videoCategory: "",
    viewsCount: "",
    likesCount: "",
    videoCategoryId: "",
    videoTags: "",
    videoPublishDateTime: "",
    search: "",
  };
  const [videoID, setVideoID] = React.useState(initialValues.videoID);
  const [videoUrl, setVideoUrl] = React.useState(initialValues.videoUrl);
  const [videoTitle, setVideoTitle] = React.useState(initialValues.videoTitle);
  const [videoDescription, setVideoDescription] = React.useState(
    initialValues.videoDescription
  );
  const [videoType, setVideoType] = React.useState(initialValues.videoType);
  const [status, setStatus] = React.useState(initialValues.status);
  const [addDateTime, setAddDateTime] = React.useState(
    initialValues.addDateTime
  );
  const [addIpAddress, setAddIpAddress] = React.useState(
    initialValues.addIpAddress
  );
  const [otherData, setOtherData] = React.useState(initialValues.otherData);
  const [videoCategory, setVideoCategory] = React.useState(
    initialValues.videoCategory
  );
  const [viewsCount, setViewsCount] = React.useState(initialValues.viewsCount);
  const [likesCount, setLikesCount] = React.useState(initialValues.likesCount);
  const [videoCategoryId, setVideoCategoryId] = React.useState(
    initialValues.videoCategoryId
  );
  const [videoTags, setVideoTags] = React.useState(initialValues.videoTags);
  const [videoPublishDateTime, setVideoPublishDateTime] = React.useState(
    initialValues.videoPublishDateTime
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVideoID(initialValues.videoID);
    setVideoUrl(initialValues.videoUrl);
    setVideoTitle(initialValues.videoTitle);
    setVideoDescription(initialValues.videoDescription);
    setVideoType(initialValues.videoType);
    setStatus(initialValues.status);
    setAddDateTime(initialValues.addDateTime);
    setAddIpAddress(initialValues.addIpAddress);
    setOtherData(initialValues.otherData);
    setVideoCategory(initialValues.videoCategory);
    setViewsCount(initialValues.viewsCount);
    setLikesCount(initialValues.likesCount);
    setVideoCategoryId(initialValues.videoCategoryId);
    setVideoTags(initialValues.videoTags);
    setVideoPublishDateTime(initialValues.videoPublishDateTime);
    setSearch(initialValues.search);
    setErrors({});
  };
  const validations = {
    videoID: [],
    videoUrl: [],
    videoTitle: [],
    videoDescription: [],
    videoType: [],
    status: [],
    addDateTime: [],
    addIpAddress: [],
    otherData: [{ type: "JSON" }],
    videoCategory: [],
    viewsCount: [],
    likesCount: [],
    videoCategoryId: [],
    videoTags: [],
    videoPublishDateTime: [],
    search: [],
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
          videoID,
          videoUrl,
          videoTitle,
          videoDescription,
          videoType,
          status,
          addDateTime,
          addIpAddress,
          otherData,
          videoCategory,
          viewsCount,
          likesCount,
          videoCategoryId,
          videoTags,
          videoPublishDateTime,
          search,
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
          await DataStore.save(new AdminVideoModel(modelFields));
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
      {...getOverrideProps(overrides, "AdminVideoModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Video id"
        isRequired={false}
        isReadOnly={false}
        value={videoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID: value,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl: value,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Video title"
        isRequired={false}
        isReadOnly={false}
        value={videoTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle: value,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Video description"
        isRequired={false}
        isReadOnly={false}
        value={videoDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription: value,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Video type"
        isRequired={false}
        isReadOnly={false}
        value={videoType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType: value,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status: value,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime: value,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
      <TextField
        label="Add ip address"
        isRequired={false}
        isReadOnly={false}
        value={addIpAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress: value,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
      <TextAreaField
        label="Other data"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData: value,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Video category"
        isRequired={false}
        isReadOnly={false}
        value={videoCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory: value,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
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
        label="Views count"
        isRequired={false}
        isReadOnly={false}
        value={viewsCount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount: value,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
            };
            const result = onChange(modelFields);
            value = result?.viewsCount ?? value;
          }
          if (errors.viewsCount?.hasError) {
            runValidationTasks("viewsCount", value);
          }
          setViewsCount(value);
        }}
        onBlur={() => runValidationTasks("viewsCount", viewsCount)}
        errorMessage={errors.viewsCount?.errorMessage}
        hasError={errors.viewsCount?.hasError}
        {...getOverrideProps(overrides, "viewsCount")}
      ></TextField>
      <TextField
        label="Likes count"
        isRequired={false}
        isReadOnly={false}
        value={likesCount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount: value,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search,
            };
            const result = onChange(modelFields);
            value = result?.likesCount ?? value;
          }
          if (errors.likesCount?.hasError) {
            runValidationTasks("likesCount", value);
          }
          setLikesCount(value);
        }}
        onBlur={() => runValidationTasks("likesCount", likesCount)}
        errorMessage={errors.likesCount?.errorMessage}
        hasError={errors.likesCount?.hasError}
        {...getOverrideProps(overrides, "likesCount")}
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
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId: value,
              videoTags,
              videoPublishDateTime,
              search,
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
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags: value,
              videoPublishDateTime,
              search,
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
        label="Video publish date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          videoPublishDateTime && convertToLocal(new Date(videoPublishDateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime: value,
              search,
            };
            const result = onChange(modelFields);
            value = result?.videoPublishDateTime ?? value;
          }
          if (errors.videoPublishDateTime?.hasError) {
            runValidationTasks("videoPublishDateTime", value);
          }
          setVideoPublishDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("videoPublishDateTime", videoPublishDateTime)
        }
        errorMessage={errors.videoPublishDateTime?.errorMessage}
        hasError={errors.videoPublishDateTime?.hasError}
        {...getOverrideProps(overrides, "videoPublishDateTime")}
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
              videoID,
              videoUrl,
              videoTitle,
              videoDescription,
              videoType,
              status,
              addDateTime,
              addIpAddress,
              otherData,
              videoCategory,
              viewsCount,
              likesCount,
              videoCategoryId,
              videoTags,
              videoPublishDateTime,
              search: value,
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
