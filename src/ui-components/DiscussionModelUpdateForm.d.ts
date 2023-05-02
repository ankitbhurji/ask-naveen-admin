/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DiscussionModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscussionModelUpdateFormInputValues = {
    comment?: string;
    commentType?: string;
    status?: string;
    addDateTime?: string;
    addIpAddress?: string;
    userHandle?: string;
    otherData?: string;
    toID?: string;
    channelmodelID?: string;
};
export declare type DiscussionModelUpdateFormValidationValues = {
    comment?: ValidationFunction<string>;
    commentType?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    addDateTime?: ValidationFunction<string>;
    addIpAddress?: ValidationFunction<string>;
    userHandle?: ValidationFunction<string>;
    otherData?: ValidationFunction<string>;
    toID?: ValidationFunction<string>;
    channelmodelID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscussionModelUpdateFormOverridesProps = {
    DiscussionModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    commentType?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    addIpAddress?: PrimitiveOverrideProps<TextFieldProps>;
    userHandle?: PrimitiveOverrideProps<TextFieldProps>;
    otherData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    toID?: PrimitiveOverrideProps<TextFieldProps>;
    channelmodelID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscussionModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiscussionModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    discussionModel?: DiscussionModel;
    onSubmit?: (fields: DiscussionModelUpdateFormInputValues) => DiscussionModelUpdateFormInputValues;
    onSuccess?: (fields: DiscussionModelUpdateFormInputValues) => void;
    onError?: (fields: DiscussionModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiscussionModelUpdateFormInputValues) => DiscussionModelUpdateFormInputValues;
    onValidate?: DiscussionModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiscussionModelUpdateForm(props: DiscussionModelUpdateFormProps): React.ReactElement;
