/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VideoModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoModelUpdateFormInputValues = {
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
export declare type VideoModelUpdateFormValidationValues = {
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
export declare type VideoModelUpdateFormOverridesProps = {
    VideoModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type VideoModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videoModel?: VideoModel;
    onSubmit?: (fields: VideoModelUpdateFormInputValues) => VideoModelUpdateFormInputValues;
    onSuccess?: (fields: VideoModelUpdateFormInputValues) => void;
    onError?: (fields: VideoModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoModelUpdateFormInputValues) => VideoModelUpdateFormInputValues;
    onValidate?: VideoModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoModelUpdateForm(props: VideoModelUpdateFormProps): React.ReactElement;
