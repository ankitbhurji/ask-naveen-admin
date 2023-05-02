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
export declare type VideoClickHistoryModelCreateFormInputValues = {
    videoId?: string;
    videoModelID?: string;
    videoClickTime?: string;
    userModelID?: string;
    channelModelID?: string;
};
export declare type VideoClickHistoryModelCreateFormValidationValues = {
    videoId?: ValidationFunction<string>;
    videoModelID?: ValidationFunction<string>;
    videoClickTime?: ValidationFunction<string>;
    userModelID?: ValidationFunction<string>;
    channelModelID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoClickHistoryModelCreateFormOverridesProps = {
    VideoClickHistoryModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    videoId?: PrimitiveOverrideProps<TextFieldProps>;
    videoModelID?: PrimitiveOverrideProps<TextFieldProps>;
    videoClickTime?: PrimitiveOverrideProps<TextFieldProps>;
    userModelID?: PrimitiveOverrideProps<TextFieldProps>;
    channelModelID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoClickHistoryModelCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoClickHistoryModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoClickHistoryModelCreateFormInputValues) => VideoClickHistoryModelCreateFormInputValues;
    onSuccess?: (fields: VideoClickHistoryModelCreateFormInputValues) => void;
    onError?: (fields: VideoClickHistoryModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoClickHistoryModelCreateFormInputValues) => VideoClickHistoryModelCreateFormInputValues;
    onValidate?: VideoClickHistoryModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoClickHistoryModelCreateForm(props: VideoClickHistoryModelCreateFormProps): React.ReactElement;
