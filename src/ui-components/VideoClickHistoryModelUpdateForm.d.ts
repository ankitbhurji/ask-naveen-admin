/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VideoClickHistoryModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoClickHistoryModelUpdateFormInputValues = {
    videoId?: string;
    videoModelID?: string;
    videoClickTime?: string;
    userModelID?: string;
    channelModelID?: string;
};
export declare type VideoClickHistoryModelUpdateFormValidationValues = {
    videoId?: ValidationFunction<string>;
    videoModelID?: ValidationFunction<string>;
    videoClickTime?: ValidationFunction<string>;
    userModelID?: ValidationFunction<string>;
    channelModelID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoClickHistoryModelUpdateFormOverridesProps = {
    VideoClickHistoryModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    videoId?: PrimitiveOverrideProps<TextFieldProps>;
    videoModelID?: PrimitiveOverrideProps<TextFieldProps>;
    videoClickTime?: PrimitiveOverrideProps<TextFieldProps>;
    userModelID?: PrimitiveOverrideProps<TextFieldProps>;
    channelModelID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoClickHistoryModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoClickHistoryModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videoClickHistoryModel?: VideoClickHistoryModel;
    onSubmit?: (fields: VideoClickHistoryModelUpdateFormInputValues) => VideoClickHistoryModelUpdateFormInputValues;
    onSuccess?: (fields: VideoClickHistoryModelUpdateFormInputValues) => void;
    onError?: (fields: VideoClickHistoryModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoClickHistoryModelUpdateFormInputValues) => VideoClickHistoryModelUpdateFormInputValues;
    onValidate?: VideoClickHistoryModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoClickHistoryModelUpdateForm(props: VideoClickHistoryModelUpdateFormProps): React.ReactElement;
