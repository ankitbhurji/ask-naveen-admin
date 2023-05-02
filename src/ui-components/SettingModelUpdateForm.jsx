/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SettingModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SettingModelUpdateForm(props) {
  const {
    id: idProp,
    settingModel: settingModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    settingKey: "",
    settingValue: "",
    displayName: "",
  };
  const [settingKey, setSettingKey] = React.useState(initialValues.settingKey);
  const [settingValue, setSettingValue] = React.useState(
    initialValues.settingValue
  );
  const [displayName, setDisplayName] = React.useState(
    initialValues.displayName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = settingModelRecord
      ? { ...initialValues, ...settingModelRecord }
      : initialValues;
    setSettingKey(cleanValues.settingKey);
    setSettingValue(cleanValues.settingValue);
    setDisplayName(cleanValues.displayName);
    setErrors({});
  };
  const [settingModelRecord, setSettingModelRecord] = React.useState(
    settingModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SettingModel, idProp)
        : settingModelModelProp;
      setSettingModelRecord(record);
    };
    queryData();
  }, [idProp, settingModelModelProp]);
  React.useEffect(resetStateValues, [settingModelRecord]);
  const validations = {
    settingKey: [],
    settingValue: [],
    displayName: [],
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
          settingKey,
          settingValue,
          displayName,
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
            SettingModel.copyOf(settingModelRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SettingModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Setting key"
        isRequired={false}
        isReadOnly={false}
        value={settingKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              settingKey: value,
              settingValue,
              displayName,
            };
            const result = onChange(modelFields);
            value = result?.settingKey ?? value;
          }
          if (errors.settingKey?.hasError) {
            runValidationTasks("settingKey", value);
          }
          setSettingKey(value);
        }}
        onBlur={() => runValidationTasks("settingKey", settingKey)}
        errorMessage={errors.settingKey?.errorMessage}
        hasError={errors.settingKey?.hasError}
        {...getOverrideProps(overrides, "settingKey")}
      ></TextField>
      <TextField
        label="Setting value"
        isRequired={false}
        isReadOnly={false}
        value={settingValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              settingKey,
              settingValue: value,
              displayName,
            };
            const result = onChange(modelFields);
            value = result?.settingValue ?? value;
          }
          if (errors.settingValue?.hasError) {
            runValidationTasks("settingValue", value);
          }
          setSettingValue(value);
        }}
        onBlur={() => runValidationTasks("settingValue", settingValue)}
        errorMessage={errors.settingValue?.errorMessage}
        hasError={errors.settingValue?.hasError}
        {...getOverrideProps(overrides, "settingValue")}
      ></TextField>
      <TextField
        label="Display name"
        isRequired={false}
        isReadOnly={false}
        value={displayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              settingKey,
              settingValue,
              displayName: value,
            };
            const result = onChange(modelFields);
            value = result?.displayName ?? value;
          }
          if (errors.displayName?.hasError) {
            runValidationTasks("displayName", value);
          }
          setDisplayName(value);
        }}
        onBlur={() => runValidationTasks("displayName", displayName)}
        errorMessage={errors.displayName?.errorMessage}
        hasError={errors.displayName?.hasError}
        {...getOverrideProps(overrides, "displayName")}
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
          isDisabled={!(idProp || settingModelModelProp)}
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
              !(idProp || settingModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
