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
export declare type LastNamesAllCreateFormInputValues = {
    all_last?: string;
    persian_last?: string;
    arab_last?: string;
    kurmanji_last?: string;
    pakistani_last?: string;
    sorani_last?: string;
    turkish_last?: string;
    ukrainian_last?: string;
    german_last?: string;
};
export declare type LastNamesAllCreateFormValidationValues = {
    all_last?: ValidationFunction<string>;
    persian_last?: ValidationFunction<string>;
    arab_last?: ValidationFunction<string>;
    kurmanji_last?: ValidationFunction<string>;
    pakistani_last?: ValidationFunction<string>;
    sorani_last?: ValidationFunction<string>;
    turkish_last?: ValidationFunction<string>;
    ukrainian_last?: ValidationFunction<string>;
    german_last?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LastNamesAllCreateFormOverridesProps = {
    LastNamesAllCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    all_last?: PrimitiveOverrideProps<TextFieldProps>;
    persian_last?: PrimitiveOverrideProps<TextFieldProps>;
    arab_last?: PrimitiveOverrideProps<TextFieldProps>;
    kurmanji_last?: PrimitiveOverrideProps<TextFieldProps>;
    pakistani_last?: PrimitiveOverrideProps<TextFieldProps>;
    sorani_last?: PrimitiveOverrideProps<TextFieldProps>;
    turkish_last?: PrimitiveOverrideProps<TextFieldProps>;
    ukrainian_last?: PrimitiveOverrideProps<TextFieldProps>;
    german_last?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LastNamesAllCreateFormProps = React.PropsWithChildren<{
    overrides?: LastNamesAllCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LastNamesAllCreateFormInputValues) => LastNamesAllCreateFormInputValues;
    onSuccess?: (fields: LastNamesAllCreateFormInputValues) => void;
    onError?: (fields: LastNamesAllCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LastNamesAllCreateFormInputValues) => LastNamesAllCreateFormInputValues;
    onValidate?: LastNamesAllCreateFormValidationValues;
} & React.CSSProperties>;
export default function LastNamesAllCreateForm(props: LastNamesAllCreateFormProps): React.ReactElement;
