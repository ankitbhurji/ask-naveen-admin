/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TagModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TagModelUpdateFormInputValues = {
    title?: string;
    tags?: string;
    link?: string;
    status?: string;
    search?: string;
    addDateTime?: string;
};
export declare type TagModelUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    addDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagModelUpdateFormOverridesProps = {
    TagModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    addDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TagModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TagModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tagModel?: TagModel;
    onSubmit?: (fields: TagModelUpdateFormInputValues) => TagModelUpdateFormInputValues;
    onSuccess?: (fields: TagModelUpdateFormInputValues) => void;
    onError?: (fields: TagModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagModelUpdateFormInputValues) => TagModelUpdateFormInputValues;
    onValidate?: TagModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TagModelUpdateForm(props: TagModelUpdateFormProps): React.ReactElement;
