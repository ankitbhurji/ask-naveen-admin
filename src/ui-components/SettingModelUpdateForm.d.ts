/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SettingModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingModelUpdateFormInputValues = {
    settingKey?: string;
    settingValue?: string;
    displayName?: string;
};
export declare type SettingModelUpdateFormValidationValues = {
    settingKey?: ValidationFunction<string>;
    settingValue?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingModelUpdateFormOverridesProps = {
    SettingModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    settingKey?: PrimitiveOverrideProps<TextFieldProps>;
    settingValue?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: SettingModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    settingModel?: SettingModel;
    onSubmit?: (fields: SettingModelUpdateFormInputValues) => SettingModelUpdateFormInputValues;
    onSuccess?: (fields: SettingModelUpdateFormInputValues) => void;
    onError?: (fields: SettingModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingModelUpdateFormInputValues) => SettingModelUpdateFormInputValues;
    onValidate?: SettingModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SettingModelUpdateForm(props: SettingModelUpdateFormProps): React.ReactElement;
