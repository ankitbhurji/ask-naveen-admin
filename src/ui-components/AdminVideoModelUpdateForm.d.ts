/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AdminVideoModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdminVideoModelUpdateFormInputValues = {
    videoID?: string;
    videoUrl?: string;
    videoTitle?: string;
    videoDescription?: string;
    videoType?: string;
    status?: string;
    addDateTime?: string;
    addIpAddress?: string;
    otherData?: string;
    videoCategory?: string;
    viewsCount?: string;
    likesCount?: string;
    videoCategoryId?: string;
    videoTags?: string;
    videoPublishDateTime?: string;
    search?: string;
};
export declare type AdminVideoModelUpdateFormValidationValues = {
    videoID?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
    videoTitle?: ValidationFunction<string>;
    videoDescription?: ValidationFunction<string>;
    videoType?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    addDateTime?: ValidationFunction<string>;
    addIpAddress?: ValidationFunction<string>;
    otherData?: ValidationFunction<string>;
    videoCategory?: ValidationFunction<string>;
    viewsCount?: ValidationFunction<string>;
    likesCount?: ValidationFunction<string>;
    videoCategoryId?: ValidationFunction<string>;
    videoTags?: ValidationFunction<string>;
    videoPublishDateTime?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminVideoModelUpdateFormOverridesProps = {
    AdminVideoModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    videoID?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    videoTitle?: PrimitiveOverrideProps<TextFieldProps>;
    videoDescription?: PrimitiveOverrideProps<TextFieldProps>;
    videoType?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    addIpAddress?: PrimitiveOverrideProps<TextFieldProps>;
    otherData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    videoCategory?: PrimitiveOverrideProps<TextFieldProps>;
    viewsCount?: PrimitiveOverrideProps<TextFieldProps>;
    likesCount?: PrimitiveOverrideProps<TextFieldProps>;
    videoCategoryId?: PrimitiveOverrideProps<TextFieldProps>;
    videoTags?: PrimitiveOverrideProps<TextFieldProps>;
    videoPublishDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminVideoModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdminVideoModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    adminVideoModel?: AdminVideoModel;
    onSubmit?: (fields: AdminVideoModelUpdateFormInputValues) => AdminVideoModelUpdateFormInputValues;
    onSuccess?: (fields: AdminVideoModelUpdateFormInputValues) => void;
    onError?: (fields: AdminVideoModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdminVideoModelUpdateFormInputValues) => AdminVideoModelUpdateFormInputValues;
    onValidate?: AdminVideoModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdminVideoModelUpdateForm(props: AdminVideoModelUpdateFormProps): React.ReactElement;
