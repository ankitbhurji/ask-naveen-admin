/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserModelCreateFormInputValues = {
    email?: string;
    name?: string;
    mobileNumber?: string;
    cityName?: string;
    job?: string;
    otp?: number;
    addDateTime?: string;
    gender?: string;
    countryName?: string;
    stateName?: string;
    userType?: string;
    status?: string;
    lastLoginDateTime?: string;
    addIpAddress?: string;
    otherData?: string;
};
export declare type UserModelCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    mobileNumber?: ValidationFunction<string>;
    cityName?: ValidationFunction<string>;
    job?: ValidationFunction<string>;
    otp?: ValidationFunction<number>;
    addDateTime?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    countryName?: ValidationFunction<string>;
    stateName?: ValidationFunction<string>;
    userType?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    lastLoginDateTime?: ValidationFunction<string>;
    addIpAddress?: ValidationFunction<string>;
    otherData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserModelCreateFormOverridesProps = {
    UserModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    mobileNumber?: PrimitiveOverrideProps<TextFieldProps>;
    cityName?: PrimitiveOverrideProps<TextFieldProps>;
    job?: PrimitiveOverrideProps<TextFieldProps>;
    otp?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
    stateName?: PrimitiveOverrideProps<TextFieldProps>;
    userType?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    lastLoginDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    addIpAddress?: PrimitiveOverrideProps<TextFieldProps>;
    otherData?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UserModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UserModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onSuccess?: (fields: UserModelCreateFormInputValues) => void;
    onError?: (fields: UserModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onValidate?: UserModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserModelCreateForm(props: UserModelCreateFormProps): React.ReactElement;
