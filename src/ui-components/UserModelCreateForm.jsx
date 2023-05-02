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
import { UserModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserModelCreateForm(props) {
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
    email: "",
    name: "",
    mobileNumber: "",
    cityName: "",
    job: "",
    otp: "",
    addDateTime: "",
    gender: "",
    countryName: "",
    stateName: "",
    userType: "",
    status: "",
    lastLoginDateTime: "",
    addIpAddress: "",
    otherData: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [name, setName] = React.useState(initialValues.name);
  const [mobileNumber, setMobileNumber] = React.useState(
    initialValues.mobileNumber
  );
  const [cityName, setCityName] = React.useState(initialValues.cityName);
  const [job, setJob] = React.useState(initialValues.job);
  const [otp, setOtp] = React.useState(initialValues.otp);
  const [addDateTime, setAddDateTime] = React.useState(
    initialValues.addDateTime
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [countryName, setCountryName] = React.useState(
    initialValues.countryName
  );
  const [stateName, setStateName] = React.useState(initialValues.stateName);
  const [userType, setUserType] = React.useState(initialValues.userType);
  const [status, setStatus] = React.useState(initialValues.status);
  const [lastLoginDateTime, setLastLoginDateTime] = React.useState(
    initialValues.lastLoginDateTime
  );
  const [addIpAddress, setAddIpAddress] = React.useState(
    initialValues.addIpAddress
  );
  const [otherData, setOtherData] = React.useState(initialValues.otherData);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setName(initialValues.name);
    setMobileNumber(initialValues.mobileNumber);
    setCityName(initialValues.cityName);
    setJob(initialValues.job);
    setOtp(initialValues.otp);
    setAddDateTime(initialValues.addDateTime);
    setGender(initialValues.gender);
    setCountryName(initialValues.countryName);
    setStateName(initialValues.stateName);
    setUserType(initialValues.userType);
    setStatus(initialValues.status);
    setLastLoginDateTime(initialValues.lastLoginDateTime);
    setAddIpAddress(initialValues.addIpAddress);
    setOtherData(initialValues.otherData);
    setErrors({});
  };
  const validations = {
    email: [{ type: "Email" }],
    name: [],
    mobileNumber: [],
    cityName: [],
    job: [],
    otp: [],
    addDateTime: [],
    gender: [],
    countryName: [],
    stateName: [],
    userType: [],
    status: [],
    lastLoginDateTime: [],
    addIpAddress: [{ type: "IpAddress" }],
    otherData: [{ type: "JSON" }],
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
          email,
          name,
          mobileNumber,
          cityName,
          job,
          otp,
          addDateTime,
          gender,
          countryName,
          stateName,
          userType,
          status,
          lastLoginDateTime,
          addIpAddress,
          otherData,
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
          await DataStore.save(new UserModel(modelFields));
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
      {...getOverrideProps(overrides, "UserModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name: value,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Mobile number"
        isRequired={false}
        isReadOnly={false}
        value={mobileNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber: value,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.mobileNumber ?? value;
          }
          if (errors.mobileNumber?.hasError) {
            runValidationTasks("mobileNumber", value);
          }
          setMobileNumber(value);
        }}
        onBlur={() => runValidationTasks("mobileNumber", mobileNumber)}
        errorMessage={errors.mobileNumber?.errorMessage}
        hasError={errors.mobileNumber?.hasError}
        {...getOverrideProps(overrides, "mobileNumber")}
      ></TextField>
      <TextField
        label="City name"
        isRequired={false}
        isReadOnly={false}
        value={cityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName: value,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.cityName ?? value;
          }
          if (errors.cityName?.hasError) {
            runValidationTasks("cityName", value);
          }
          setCityName(value);
        }}
        onBlur={() => runValidationTasks("cityName", cityName)}
        errorMessage={errors.cityName?.errorMessage}
        hasError={errors.cityName?.hasError}
        {...getOverrideProps(overrides, "cityName")}
      ></TextField>
      <TextField
        label="Job"
        isRequired={false}
        isReadOnly={false}
        value={job}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job: value,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.job ?? value;
          }
          if (errors.job?.hasError) {
            runValidationTasks("job", value);
          }
          setJob(value);
        }}
        onBlur={() => runValidationTasks("job", job)}
        errorMessage={errors.job?.errorMessage}
        hasError={errors.job?.hasError}
        {...getOverrideProps(overrides, "job")}
      ></TextField>
      <TextField
        label="Otp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={otp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp: value,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.otp ?? value;
          }
          if (errors.otp?.hasError) {
            runValidationTasks("otp", value);
          }
          setOtp(value);
        }}
        onBlur={() => runValidationTasks("otp", otp)}
        errorMessage={errors.otp?.errorMessage}
        hasError={errors.otp?.hasError}
        {...getOverrideProps(overrides, "otp")}
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
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime: value,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
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
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender: value,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Country name"
        isRequired={false}
        isReadOnly={false}
        value={countryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName: value,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.countryName ?? value;
          }
          if (errors.countryName?.hasError) {
            runValidationTasks("countryName", value);
          }
          setCountryName(value);
        }}
        onBlur={() => runValidationTasks("countryName", countryName)}
        errorMessage={errors.countryName?.errorMessage}
        hasError={errors.countryName?.hasError}
        {...getOverrideProps(overrides, "countryName")}
      ></TextField>
      <TextField
        label="State name"
        isRequired={false}
        isReadOnly={false}
        value={stateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName: value,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.stateName ?? value;
          }
          if (errors.stateName?.hasError) {
            runValidationTasks("stateName", value);
          }
          setStateName(value);
        }}
        onBlur={() => runValidationTasks("stateName", stateName)}
        errorMessage={errors.stateName?.errorMessage}
        hasError={errors.stateName?.hasError}
        {...getOverrideProps(overrides, "stateName")}
      ></TextField>
      <SelectField
        label="User type"
        placeholder="Please select an option"
        isDisabled={false}
        value={userType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType: value,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.userType ?? value;
          }
          if (errors.userType?.hasError) {
            runValidationTasks("userType", value);
          }
          setUserType(value);
        }}
        onBlur={() => runValidationTasks("userType", userType)}
        errorMessage={errors.userType?.errorMessage}
        hasError={errors.userType?.hasError}
        {...getOverrideProps(overrides, "userType")}
      >
        <option
          children="User"
          value="USER"
          {...getOverrideProps(overrides, "userTypeoption0")}
        ></option>
        <option
          children="Superadmin"
          value="SUPERADMIN"
          {...getOverrideProps(overrides, "userTypeoption1")}
        ></option>
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "userTypeoption2")}
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
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status: value,
              lastLoginDateTime,
              addIpAddress,
              otherData,
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
        label="Last login date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastLoginDateTime && convertToLocal(new Date(lastLoginDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime: value,
              addIpAddress,
              otherData,
            };
            const result = onChange(modelFields);
            value = result?.lastLoginDateTime ?? value;
          }
          if (errors.lastLoginDateTime?.hasError) {
            runValidationTasks("lastLoginDateTime", value);
          }
          setLastLoginDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("lastLoginDateTime", lastLoginDateTime)
        }
        errorMessage={errors.lastLoginDateTime?.errorMessage}
        hasError={errors.lastLoginDateTime?.hasError}
        {...getOverrideProps(overrides, "lastLoginDateTime")}
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
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress: value,
              otherData,
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
              email,
              name,
              mobileNumber,
              cityName,
              job,
              otp,
              addDateTime,
              gender,
              countryName,
              stateName,
              userType,
              status,
              lastLoginDateTime,
              addIpAddress,
              otherData: value,
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
