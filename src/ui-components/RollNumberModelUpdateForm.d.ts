/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RollNumberModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RollNumberModelUpdateFormInputValues = {
    rollNumber?: number;
};
export declare type RollNumberModelUpdateFormValidationValues = {
    rollNumber?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RollNumberModelUpdateFormOverridesProps = {
    RollNumberModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    rollNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RollNumberModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: RollNumberModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rollNumberModel?: RollNumberModel;
    onSubmit?: (fields: RollNumberModelUpdateFormInputValues) => RollNumberModelUpdateFormInputValues;
    onSuccess?: (fields: RollNumberModelUpdateFormInputValues) => void;
    onError?: (fields: RollNumberModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RollNumberModelUpdateFormInputValues) => RollNumberModelUpdateFormInputValues;
    onValidate?: RollNumberModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RollNumberModelUpdateForm(props: RollNumberModelUpdateFormProps): React.ReactElement;
