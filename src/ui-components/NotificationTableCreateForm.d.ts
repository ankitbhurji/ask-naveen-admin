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
export declare type NotificationTableCreateFormInputValues = {
    userModelId?: string;
    channelModelId?: string;
    firebaseId?: string;
};
export declare type NotificationTableCreateFormValidationValues = {
    userModelId?: ValidationFunction<string>;
    channelModelId?: ValidationFunction<string>;
    firebaseId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationTableCreateFormOverridesProps = {
    NotificationTableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userModelId?: PrimitiveOverrideProps<TextFieldProps>;
    channelModelId?: PrimitiveOverrideProps<TextFieldProps>;
    firebaseId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationTableCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationTableCreateFormInputValues) => NotificationTableCreateFormInputValues;
    onSuccess?: (fields: NotificationTableCreateFormInputValues) => void;
    onError?: (fields: NotificationTableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationTableCreateFormInputValues) => NotificationTableCreateFormInputValues;
    onValidate?: NotificationTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationTableCreateForm(props: NotificationTableCreateFormProps): React.ReactElement;
