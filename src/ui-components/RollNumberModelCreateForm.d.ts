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
export declare type RollNumberModelCreateFormInputValues = {
    rollNumber?: number;
};
export declare type RollNumberModelCreateFormValidationValues = {
    rollNumber?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RollNumberModelCreateFormOverridesProps = {
    RollNumberModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    rollNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RollNumberModelCreateFormProps = React.PropsWithChildren<{
    overrides?: RollNumberModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RollNumberModelCreateFormInputValues) => RollNumberModelCreateFormInputValues;
    onSuccess?: (fields: RollNumberModelCreateFormInputValues) => void;
    onError?: (fields: RollNumberModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RollNumberModelCreateFormInputValues) => RollNumberModelCreateFormInputValues;
    onValidate?: RollNumberModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function RollNumberModelCreateForm(props: RollNumberModelCreateFormProps): React.ReactElement;
