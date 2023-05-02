/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoRatingModelCreateFormInputValues = {
    feedback?: string;
    isViral?: boolean;
    channelmodelID?: string;
    videomodelID?: string;
    point?: number;
    addDateTime?: string;
    viralViews?: string;
    videoActualViews?: string;
    viralCheckDateTime?: string;
};
export declare type VideoRatingModelCreateFormValidationValues = {
    feedback?: ValidationFunction<string>;
    isViral?: ValidationFunction<boolean>;
    channelmodelID?: ValidationFunction<string>;
    videomodelID?: ValidationFunction<string>;
    point?: ValidationFunction<number>;
    addDateTime?: ValidationFunction<string>;
    viralViews?: ValidationFunction<string>;
    videoActualViews?: ValidationFunction<string>;
    viralCheckDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoRatingModelCreateFormOverridesProps = {
    VideoRatingModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    feedback?: PrimitiveOverrideProps<TextFieldProps>;
    isViral?: PrimitiveOverrideProps<SwitchFieldProps>;
    channelmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    videomodelID?: PrimitiveOverrideProps<TextFieldProps>;
    point?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    viralViews?: PrimitiveOverrideProps<TextFieldProps>;
    videoActualViews?: PrimitiveOverrideProps<TextFieldProps>;
    viralCheckDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoRatingModelCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoRatingModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoRatingModelCreateFormInputValues) => VideoRatingModelCreateFormInputValues;
    onSuccess?: (fields: VideoRatingModelCreateFormInputValues) => void;
    onError?: (fields: VideoRatingModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoRatingModelCreateFormInputValues) => VideoRatingModelCreateFormInputValues;
    onValidate?: VideoRatingModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoRatingModelCreateForm(props: VideoRatingModelCreateFormProps): React.ReactElement;
