/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoModelCreateFormInputValues = {
    videoUrl?: string;
    videoDateTime?: string;
    videoTitle?: string;
    videoType?: string;
    status?: string;
    addDateTime?: string;
    otherData?: string;
    addIpAddress?: string;
    videoViews?: number;
    videoID?: string;
    videoCategory?: string;
    videoDescription?: string;
    ratingNo?: string;
    ratingCount?: number;
    commentCount?: string;
    channelmodelID?: string;
    videoCategoryId?: string;
    videoTags?: string;
    videoLikeCount?: number;
    ratingYes?: string;
    viralCheckEndDateTime?: string;
    viralFinalScore?: string;
    viralViewsRquired?: string;
    search?: string;
    videoClickCount?: number;
};
export declare type VideoModelCreateFormValidationValues = {
    videoUrl?: ValidationFunction<string>;
    videoDateTime?: ValidationFunction<string>;
    videoTitle?: ValidationFunction<string>;
    videoType?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    addDateTime?: ValidationFunction<string>;
    otherData?: ValidationFunction<string>;
    addIpAddress?: ValidationFunction<string>;
    videoViews?: ValidationFunction<number>;
    videoID?: ValidationFunction<string>;
    videoCategory?: ValidationFunction<string>;
    videoDescription?: ValidationFunction<string>;
    ratingNo?: ValidationFunction<string>;
    ratingCount?: ValidationFunction<number>;
    commentCount?: ValidationFunction<string>;
    channelmodelID?: ValidationFunction<string>;
    videoCategoryId?: ValidationFunction<string>;
    videoTags?: ValidationFunction<string>;
    videoLikeCount?: ValidationFunction<number>;
    ratingYes?: ValidationFunction<string>;
    viralCheckEndDateTime?: ValidationFunction<string>;
    viralFinalScore?: ValidationFunction<string>;
    viralViewsRquired?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    videoClickCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoModelCreateFormOverridesProps = {
    VideoModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    videoDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    videoTitle?: PrimitiveOverrideProps<TextFieldProps>;
    videoType?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    otherData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    addIpAddress?: PrimitiveOverrideProps<TextFieldProps>;
    videoViews?: PrimitiveOverrideProps<TextFieldProps>;
    videoID?: PrimitiveOverrideProps<TextFieldProps>;
    videoCategory?: PrimitiveOverrideProps<TextFieldProps>;
    videoDescription?: PrimitiveOverrideProps<TextFieldProps>;
    ratingNo?: PrimitiveOverrideProps<TextFieldProps>;
    ratingCount?: PrimitiveOverrideProps<TextFieldProps>;
    commentCount?: PrimitiveOverrideProps<TextFieldProps>;
    channelmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    videoCategoryId?: PrimitiveOverrideProps<TextFieldProps>;
    videoTags?: PrimitiveOverrideProps<TextFieldProps>;
    videoLikeCount?: PrimitiveOverrideProps<TextFieldProps>;
    ratingYes?: PrimitiveOverrideProps<TextFieldProps>;
    viralCheckEndDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    viralFinalScore?: PrimitiveOverrideProps<TextFieldProps>;
    viralViewsRquired?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    videoClickCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoModelCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoModelCreateFormInputValues) => VideoModelCreateFormInputValues;
    onSuccess?: (fields: VideoModelCreateFormInputValues) => void;
    onError?: (fields: VideoModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoModelCreateFormInputValues) => VideoModelCreateFormInputValues;
    onValidate?: VideoModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoModelCreateForm(props: VideoModelCreateFormProps): React.ReactElement;
