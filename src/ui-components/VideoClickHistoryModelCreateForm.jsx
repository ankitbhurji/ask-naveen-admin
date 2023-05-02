/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VideoClickHistoryModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VideoClickHistoryModelCreateForm(props) {
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
    videoId: "",
    videoModelID: "",
    videoClickTime: "",
    userModelID: "",
    channelModelID: "",
  };
  const [videoId, setVideoId] = React.useState(initialValues.videoId);
  const [videoModelID, setVideoModelID] = React.useState(
    initialValues.videoModelID
  );
  const [videoClickTime, setVideoClickTime] = React.useState(
    initialValues.videoClickTime
  );
  const [userModelID, setUserModelID] = React.useState(
    initialValues.userModelID
  );
  const [channelModelID, setChannelModelID] = React.useState(
    initialValues.channelModelID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVideoId(initialValues.videoId);
    setVideoModelID(initialValues.videoModelID);
    setVideoClickTime(initialValues.videoClickTime);
    setUserModelID(initialValues.userModelID);
    setChannelModelID(initialValues.channelModelID);
    setErrors({});
  };
  const validations = {
    videoId: [],
    videoModelID: [],
    videoClickTime: [],
    userModelID: [],
    channelModelID: [],
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
          videoId,
          videoModelID,
          videoClickTime,
          userModelID,
          channelModelID,
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
          await DataStore.save(new VideoClickHistoryModel(modelFields));
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
      {...getOverrideProps(overrides, "VideoClickHistoryModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Video id"
        isRequired={false}
        isReadOnly={false}
        value={videoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId: value,
              videoModelID,
              videoClickTime,
              userModelID,
              channelModelID,
            };
            const result = onChange(modelFields);
            value = result?.videoId ?? value;
          }
          if (errors.videoId?.hasError) {
            runValidationTasks("videoId", value);
          }
          setVideoId(value);
        }}
        onBlur={() => runValidationTasks("videoId", videoId)}
        errorMessage={errors.videoId?.errorMessage}
        hasError={errors.videoId?.hasError}
        {...getOverrideProps(overrides, "videoId")}
      ></TextField>
      <TextField
        label="Video model id"
        isRequired={false}
        isReadOnly={false}
        value={videoModelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              videoModelID: value,
              videoClickTime,
              userModelID,
              channelModelID,
            };
            const result = onChange(modelFields);
            value = result?.videoModelID ?? value;
          }
          if (errors.videoModelID?.hasError) {
            runValidationTasks("videoModelID", value);
          }
          setVideoModelID(value);
        }}
        onBlur={() => runValidationTasks("videoModelID", videoModelID)}
        errorMessage={errors.videoModelID?.errorMessage}
        hasError={errors.videoModelID?.hasError}
        {...getOverrideProps(overrides, "videoModelID")}
      ></TextField>
      <TextField
        label="Video click time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={videoClickTime && convertToLocal(new Date(videoClickTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              videoId,
              videoModelID,
              videoClickTime: value,
              userModelID,
              channelModelID,
            };
            const result = onChange(modelFields);
            value = result?.videoClickTime ?? value;
          }
          if (errors.videoClickTime?.hasError) {
            runValidationTasks("videoClickTime", value);
          }
          setVideoClickTime(value);
        }}
        onBlur={() => runValidationTasks("videoClickTime", videoClickTime)}
        errorMessage={errors.videoClickTime?.errorMessage}
        hasError={errors.videoClickTime?.hasError}
        {...getOverrideProps(overrides, "videoClickTime")}
      ></TextField>
      <TextField
        label="User model id"
        isRequired={false}
        isReadOnly={false}
        value={userModelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              videoModelID,
              videoClickTime,
              userModelID: value,
              channelModelID,
            };
            const result = onChange(modelFields);
            value = result?.userModelID ?? value;
          }
          if (errors.userModelID?.hasError) {
            runValidationTasks("userModelID", value);
          }
          setUserModelID(value);
        }}
        onBlur={() => runValidationTasks("userModelID", userModelID)}
        errorMessage={errors.userModelID?.errorMessage}
        hasError={errors.userModelID?.hasError}
        {...getOverrideProps(overrides, "userModelID")}
      ></TextField>
      <TextField
        label="Channel model id"
        isRequired={false}
        isReadOnly={false}
        value={channelModelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              videoModelID,
              videoClickTime,
              userModelID,
              channelModelID: value,
            };
            const result = onChange(modelFields);
            value = result?.channelModelID ?? value;
          }
          if (errors.channelModelID?.hasError) {
            runValidationTasks("channelModelID", value);
          }
          setChannelModelID(value);
        }}
        onBlur={() => runValidationTasks("channelModelID", channelModelID)}
        errorMessage={errors.channelModelID?.errorMessage}
        hasError={errors.channelModelID?.hasError}
        {...getOverrideProps(overrides, "channelModelID")}
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
