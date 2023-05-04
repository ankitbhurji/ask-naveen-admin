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
export declare type TagModelCreateFormInputValues = {
    title?: string;
    tags?: string;
    link?: string;
    status?: string;
    search?: string;
    addDateTime?: string;
};
export declare type TagModelCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    addDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagModelCreateFormOverridesProps = {
    TagModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TagModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TagModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TagModelCreateFormInputValues) => TagModelCreateFormInputValues;
    onSuccess?: (fields: TagModelCreateFormInputValues) => void;
    onError?: (fields: TagModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagModelCreateFormInputValues) => TagModelCreateFormInputValues;
    onValidate?: TagModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TagModelCreateForm(props: TagModelCreateFormProps): React.ReactElement;
