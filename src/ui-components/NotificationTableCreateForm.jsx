/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { NotificationTable } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NotificationTableCreateForm(props) {
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
    userModelId: "",
    channelModelId: "",
    firebaseId: "",
  };
  const [userModelId, setUserModelId] = React.useState(
    initialValues.userModelId
  );
  const [channelModelId, setChannelModelId] = React.useState(
    initialValues.channelModelId
  );
  const [firebaseId, setFirebaseId] = React.useState(initialValues.firebaseId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserModelId(initialValues.userModelId);
    setChannelModelId(initialValues.channelModelId);
    setFirebaseId(initialValues.firebaseId);
    setErrors({});
  };
  const validations = {
    userModelId: [],
    channelModelId: [],
    firebaseId: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userModelId,
          channelModelId,
          firebaseId,
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
          await DataStore.save(new NotificationTable(modelFields));
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
      {...getOverrideProps(overrides, "NotificationTableCreateForm")}
      {...rest}
    >
      <TextField
        label="User model id"
        isRequired={false}
        isReadOnly={false}
        value={userModelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userModelId: value,
              channelModelId,
              firebaseId,
            };
            const result = onChange(modelFields);
            value = result?.userModelId ?? value;
          }
          if (errors.userModelId?.hasError) {
            runValidationTasks("userModelId", value);
          }
          setUserModelId(value);
        }}
        onBlur={() => runValidationTasks("userModelId", userModelId)}
        errorMessage={errors.userModelId?.errorMessage}
        hasError={errors.userModelId?.hasError}
        {...getOverrideProps(overrides, "userModelId")}
      ></TextField>
      <TextField
        label="Channel model id"
        isRequired={false}
        isReadOnly={false}
        value={channelModelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userModelId,
              channelModelId: value,
              firebaseId,
            };
            const result = onChange(modelFields);
            value = result?.channelModelId ?? value;
          }
          if (errors.channelModelId?.hasError) {
            runValidationTasks("channelModelId", value);
          }
          setChannelModelId(value);
        }}
        onBlur={() => runValidationTasks("channelModelId", channelModelId)}
        errorMessage={errors.channelModelId?.errorMessage}
        hasError={errors.channelModelId?.hasError}
        {...getOverrideProps(overrides, "channelModelId")}
      ></TextField>
      <TextField
        label="Firebase id"
        isRequired={false}
        isReadOnly={false}
        value={firebaseId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userModelId,
              channelModelId,
              firebaseId: value,
            };
            const result = onChange(modelFields);
            value = result?.firebaseId ?? value;
          }
          if (errors.firebaseId?.hasError) {
            runValidationTasks("firebaseId", value);
          }
          setFirebaseId(value);
        }}
        onBlur={() => runValidationTasks("firebaseId", firebaseId)}
        errorMessage={errors.firebaseId?.errorMessage}
        hasError={errors.firebaseId?.hasError}
        {...getOverrideProps(overrides, "firebaseId")}
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
