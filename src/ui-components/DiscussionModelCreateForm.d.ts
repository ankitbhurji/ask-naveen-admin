/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscussionModelCreateFormInputValues = {
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
export declare type DiscussionModelCreateFormValidationValues = {
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
export declare type DiscussionModelCreateFormOverridesProps = {
    DiscussionModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type DiscussionModelCreateFormProps = React.PropsWithChildren<{
    overrides?: DiscussionModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiscussionModelCreateFormInputValues) => DiscussionModelCreateFormInputValues;
    onSuccess?: (fields: DiscussionModelCreateFormInputValues) => void;
    onError?: (fields: DiscussionModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiscussionModelCreateFormInputValues) => DiscussionModelCreateFormInputValues;
    onValidate?: DiscussionModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiscussionModelCreateForm(props: DiscussionModelCreateFormProps): React.ReactElement;
