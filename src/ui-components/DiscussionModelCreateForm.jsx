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
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DiscussionModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DiscussionModelCreateForm(props) {
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
    comment: "",
    commentType: "",
    status: "",
    addDateTime: "",
    addIpAddress: "",
    userHandle: "",
    otherData: "",
    toID: "",
    channelmodelID: "",
  };
  const [comment, setComment] = React.useState(initialValues.comment);
  const [commentType, setCommentType] = React.useState(
    initialValues.commentType
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [addDateTime, setAddDateTime] = React.useState(
    initialValues.addDateTime
  );
  const [addIpAddress, setAddIpAddress] = React.useState(
    initialValues.addIpAddress
  );
  const [userHandle, setUserHandle] = React.useState(initialValues.userHandle);
  const [otherData, setOtherData] = React.useState(initialValues.otherData);
  const [toID, setToID] = React.useState(initialValues.toID);
  const [channelmodelID, setChannelmodelID] = React.useState(
    initialValues.channelmodelID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setComment(initialValues.comment);
    setCommentType(initialValues.commentType);
    setStatus(initialValues.status);
    setAddDateTime(initialValues.addDateTime);
    setAddIpAddress(initialValues.addIpAddress);
    setUserHandle(initialValues.userHandle);
    setOtherData(initialValues.otherData);
    setToID(initialValues.toID);
    setChannelmodelID(initialValues.channelmodelID);
    setErrors({});
  };
  const validations = {
    comment: [],
    commentType: [],
    status: [],
    addDateTime: [],
    addIpAddress: [{ type: "IpAddress" }],
    userHandle: [],
    otherData: [{ type: "JSON" }],
    toID: [],
    channelmodelID: [{ type: "Required" }],
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
          comment,
          commentType,
          status,
          addDateTime,
          addIpAddress,
          userHandle,
          otherData,
          toID,
          channelmodelID,
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
          await DataStore.save(new DiscussionModel(modelFields));
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
      {...getOverrideProps(overrides, "DiscussionModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment: value,
              commentType,
              status,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData,
              toID,
              channelmodelID,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <SelectField
        label="Comment type"
        placeholder="Please select an option"
        isDisabled={false}
        value={commentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              commentType: value,
              status,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData,
              toID,
              channelmodelID,
            };
            const result = onChange(modelFields);
            value = result?.commentType ?? value;
          }
          if (errors.commentType?.hasError) {
            runValidationTasks("commentType", value);
          }
          setCommentType(value);
        }}
        onBlur={() => runValidationTasks("commentType", commentType)}
        errorMessage={errors.commentType?.errorMessage}
        hasError={errors.commentType?.hasError}
        {...getOverrideProps(overrides, "commentType")}
      >
        <option
          children="Text"
          value="TEXT"
          {...getOverrideProps(overrides, "commentTypeoption0")}
        ></option>
        <option
          children="Link"
          value="LINK"
          {...getOverrideProps(overrides, "commentTypeoption1")}
        ></option>
        <option
          children="Image"
          value="IMAGE"
          {...getOverrideProps(overrides, "commentTypeoption2")}
        ></option>
        <option
          children="Voice"
          value="VOICE"
          {...getOverrideProps(overrides, "commentTypeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              commentType,
              status: value,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData,
              toID,
              channelmodelID,
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
              comment,
              commentType,
              status,
              addDateTime: value,
              addIpAddress,
              userHandle,
              otherData,
              toID,
              channelmodelID,
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
              comment,
              commentType,
              status,
              addDateTime,
              addIpAddress: value,
              userHandle,
              otherData,
              toID,
              channelmodelID,
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
        label="User handle"
        isRequired={false}
        isReadOnly={false}
        value={userHandle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              commentType,
              status,
              addDateTime,
              addIpAddress,
              userHandle: value,
              otherData,
              toID,
              channelmodelID,
            };
            const result = onChange(modelFields);
            value = result?.userHandle ?? value;
          }
          if (errors.userHandle?.hasError) {
            runValidationTasks("userHandle", value);
          }
          setUserHandle(value);
        }}
        onBlur={() => runValidationTasks("userHandle", userHandle)}
        errorMessage={errors.userHandle?.errorMessage}
        hasError={errors.userHandle?.hasError}
        {...getOverrideProps(overrides, "userHandle")}
      ></TextField>
      <TextAreaField
        label="Other data"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              commentType,
              status,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData: value,
              toID,
              channelmodelID,
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
        label="To id"
        isRequired={false}
        isReadOnly={false}
        value={toID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              commentType,
              status,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData,
              toID: value,
              channelmodelID,
            };
            const result = onChange(modelFields);
            value = result?.toID ?? value;
          }
          if (errors.toID?.hasError) {
            runValidationTasks("toID", value);
          }
          setToID(value);
        }}
        onBlur={() => runValidationTasks("toID", toID)}
        errorMessage={errors.toID?.errorMessage}
        hasError={errors.toID?.hasError}
        {...getOverrideProps(overrides, "toID")}
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
              comment,
              commentType,
              status,
              addDateTime,
              addIpAddress,
              userHandle,
              otherData,
              toID,
              channelmodelID: value,
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
