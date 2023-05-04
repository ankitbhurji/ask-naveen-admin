/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NotificationTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationTableUpdateFormInputValues = {
    userModelId?: string;
    channelModelId?: string;
    firebaseId?: string;
};
export declare type NotificationTableUpdateFormValidationValues = {
    userModelId?: ValidationFunction<string>;
    channelModelId?: ValidationFunction<string>;
    firebaseId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationTableUpdateFormOverridesProps = {
    NotificationTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userModelId?: PrimitiveOverrideProps<TextFieldProps>;
    channelModelId?: PrimitiveOverrideProps<TextFieldProps>;
    firebaseId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notificationTable?: NotificationTable;
    onSubmit?: (fields: NotificationTableUpdateFormInputValues) => NotificationTableUpdateFormInputValues;
    onSuccess?: (fields: NotificationTableUpdateFormInputValues) => void;
    onError?: (fields: NotificationTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationTableUpdateFormInputValues) => NotificationTableUpdateFormInputValues;
    onValidate?: NotificationTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationTableUpdateForm(props: NotificationTableUpdateFormProps): React.ReactElement;
