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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VideoRatingModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VideoRatingModelUpdateForm(props) {
  const {
    id: idProp,
    videoRatingModel: videoRatingModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    feedback: "",
    isViral: false,
    channelmodelID: "",
    videomodelID: "",
    point: "",
    addDateTime: "",
    viralViews: "",
    videoActualViews: "",
    viralCheckDateTime: "",
  };
  const [feedback, setFeedback] = React.useState(initialValues.feedback);
  const [isViral, setIsViral] = React.useState(initialValues.isViral);
  const [channelmodelID, setChannelmodelID] = React.useState(
    initialValues.channelmodelID
  );
  const [videomodelID, setVideomodelID] = React.useState(
    initialValues.videomodelID
  );
  const [point, setPoint] = React.useState(initialValues.point);
  const [addDateTime, setAddDateTime] = React.useState(
    initialValues.addDateTime
  );
  const [viralViews, setViralViews] = React.useState(initialValues.viralViews);
  const [videoActualViews, setVideoActualViews] = React.useState(
    initialValues.videoActualViews
  );
  const [viralCheckDateTime, setViralCheckDateTime] = React.useState(
    initialValues.viralCheckDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = videoRatingModelRecord
      ? { ...initialValues, ...videoRatingModelRecord }
      : initialValues;
    setFeedback(cleanValues.feedback);
    setIsViral(cleanValues.isViral);
    setChannelmodelID(cleanValues.channelmodelID);
    setVideomodelID(cleanValues.videomodelID);
    setPoint(cleanValues.point);
    setAddDateTime(cleanValues.addDateTime);
    setViralViews(cleanValues.viralViews);
    setVideoActualViews(cleanValues.videoActualViews);
    setViralCheckDateTime(cleanValues.viralCheckDateTime);
    setErrors({});
  };
  const [videoRatingModelRecord, setVideoRatingModelRecord] = React.useState(
    videoRatingModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(VideoRatingModel, idProp)
        : videoRatingModelModelProp;
      setVideoRatingModelRecord(record);
    };
    queryData();
  }, [idProp, videoRatingModelModelProp]);
  React.useEffect(resetStateValues, [videoRatingModelRecord]);
  const validations = {
    feedback: [],
    isViral: [],
    channelmodelID: [{ type: "Required" }],
    videomodelID: [{ type: "Required" }],
    point: [],
    addDateTime: [],
    viralViews: [],
    videoActualViews: [],
    viralCheckDateTime: [],
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
          feedback,
          isViral,
          channelmodelID,
          videomodelID,
          point,
          addDateTime,
          viralViews,
          videoActualViews,
          viralCheckDateTime,
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
          await DataStore.save(
            VideoRatingModel.copyOf(videoRatingModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VideoRatingModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Feedback"
        isRequired={false}
        isReadOnly={false}
        value={feedback}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              feedback: value,
              isViral,
              channelmodelID,
              videomodelID,
              point,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.feedback ?? value;
          }
          if (errors.feedback?.hasError) {
            runValidationTasks("feedback", value);
          }
          setFeedback(value);
        }}
        onBlur={() => runValidationTasks("feedback", feedback)}
        errorMessage={errors.feedback?.errorMessage}
        hasError={errors.feedback?.hasError}
        {...getOverrideProps(overrides, "feedback")}
      ></TextField>
      <SwitchField
        label="Is viral"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isViral}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              feedback,
              isViral: value,
              channelmodelID,
              videomodelID,
              point,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.isViral ?? value;
          }
          if (errors.isViral?.hasError) {
            runValidationTasks("isViral", value);
          }
          setIsViral(value);
        }}
        onBlur={() => runValidationTasks("isViral", isViral)}
        errorMessage={errors.isViral?.errorMessage}
        hasError={errors.isViral?.hasError}
        {...getOverrideProps(overrides, "isViral")}
      ></SwitchField>
      <TextField
        label="Channelmodel id"
        isRequired={true}
        isReadOnly={false}
        value={channelmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID: value,
              videomodelID,
              point,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
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
        label="Videomodel id"
        isRequired={true}
        isReadOnly={false}
        value={videomodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID,
              videomodelID: value,
              point,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.videomodelID ?? value;
          }
          if (errors.videomodelID?.hasError) {
            runValidationTasks("videomodelID", value);
          }
          setVideomodelID(value);
        }}
        onBlur={() => runValidationTasks("videomodelID", videomodelID)}
        errorMessage={errors.videomodelID?.errorMessage}
        hasError={errors.videomodelID?.hasError}
        {...getOverrideProps(overrides, "videomodelID")}
      ></TextField>
      <TextField
        label="Point"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={point}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID,
              videomodelID,
              point: value,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.point ?? value;
          }
          if (errors.point?.hasError) {
            runValidationTasks("point", value);
          }
          setPoint(value);
        }}
        onBlur={() => runValidationTasks("point", point)}
        errorMessage={errors.point?.errorMessage}
        hasError={errors.point?.hasError}
        {...getOverrideProps(overrides, "point")}
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
              feedback,
              isViral,
              channelmodelID,
              videomodelID,
              point,
              addDateTime: value,
              viralViews,
              videoActualViews,
              viralCheckDateTime,
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
        label="Viral views"
        isRequired={false}
        isReadOnly={false}
        value={viralViews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID,
              videomodelID,
              point,
              addDateTime,
              viralViews: value,
              videoActualViews,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.viralViews ?? value;
          }
          if (errors.viralViews?.hasError) {
            runValidationTasks("viralViews", value);
          }
          setViralViews(value);
        }}
        onBlur={() => runValidationTasks("viralViews", viralViews)}
        errorMessage={errors.viralViews?.errorMessage}
        hasError={errors.viralViews?.hasError}
        {...getOverrideProps(overrides, "viralViews")}
      ></TextField>
      <TextField
        label="Video actual views"
        isRequired={false}
        isReadOnly={false}
        value={videoActualViews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID,
              videomodelID,
              point,
              addDateTime,
              viralViews,
              videoActualViews: value,
              viralCheckDateTime,
            };
            const result = onChange(modelFields);
            value = result?.videoActualViews ?? value;
          }
          if (errors.videoActualViews?.hasError) {
            runValidationTasks("videoActualViews", value);
          }
          setVideoActualViews(value);
        }}
        onBlur={() => runValidationTasks("videoActualViews", videoActualViews)}
        errorMessage={errors.videoActualViews?.errorMessage}
        hasError={errors.videoActualViews?.hasError}
        {...getOverrideProps(overrides, "videoActualViews")}
      ></TextField>
      <TextField
        label="Viral check date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          viralCheckDateTime && convertToLocal(new Date(viralCheckDateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              feedback,
              isViral,
              channelmodelID,
              videomodelID,
              point,
              addDateTime,
              viralViews,
              videoActualViews,
              viralCheckDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.viralCheckDateTime ?? value;
          }
          if (errors.viralCheckDateTime?.hasError) {
            runValidationTasks("viralCheckDateTime", value);
          }
          setViralCheckDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("viralCheckDateTime", viralCheckDateTime)
        }
        errorMessage={errors.viralCheckDateTime?.errorMessage}
        hasError={errors.viralCheckDateTime?.hasError}
        {...getOverrideProps(overrides, "viralCheckDateTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || videoRatingModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || videoRatingModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
