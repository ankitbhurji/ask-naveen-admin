/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingModelCreateFormInputValues = {
    settingKey?: string;
    settingValue?: string;
    displayName?: string;
};
export declare type SettingModelCreateFormValidationValues = {
    settingKey?: ValidationFunction<string>;
    settingValue?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingModelCreateFormOverridesProps = {
    SettingModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    settingKey?: PrimitiveOverrideProps<TextFieldProps>;
    settingValue?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingModelCreateFormProps = React.PropsWithChildren<{
    overrides?: SettingModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SettingModelCreateFormInputValues) => SettingModelCreateFormInputValues;
    onSuccess?: (fields: SettingModelCreateFormInputValues) => void;
    onError?: (fields: SettingModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingModelCreateFormInputValues) => SettingModelCreateFormInputValues;
    onValidate?: SettingModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function SettingModelCreateForm(props: SettingModelCreateFormProps): React.ReactElement;
