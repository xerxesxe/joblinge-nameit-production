/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FirstNamesAll } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FirstNamesAllUpdateFormInputValues = {
    all_first?: string;
    persian_first?: string;
    arab_first?: string;
    kurmanji_first?: string;
    pakistani_first?: string;
    sorani_first?: string;
    turkish_first?: string;
    ukrainian_first?: string;
    german_first?: string;
    gender_first?: string;
};
export declare type FirstNamesAllUpdateFormValidationValues = {
    all_first?: ValidationFunction<string>;
    persian_first?: ValidationFunction<string>;
    arab_first?: ValidationFunction<string>;
    kurmanji_first?: ValidationFunction<string>;
    pakistani_first?: ValidationFunction<string>;
    sorani_first?: ValidationFunction<string>;
    turkish_first?: ValidationFunction<string>;
    ukrainian_first?: ValidationFunction<string>;
    german_first?: ValidationFunction<string>;
    gender_first?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirstNamesAllUpdateFormOverridesProps = {
    FirstNamesAllUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    all_first?: PrimitiveOverrideProps<TextFieldProps>;
    persian_first?: PrimitiveOverrideProps<TextFieldProps>;
    arab_first?: PrimitiveOverrideProps<TextFieldProps>;
    kurmanji_first?: PrimitiveOverrideProps<TextFieldProps>;
    pakistani_first?: PrimitiveOverrideProps<TextFieldProps>;
    sorani_first?: PrimitiveOverrideProps<TextFieldProps>;
    turkish_first?: PrimitiveOverrideProps<TextFieldProps>;
    ukrainian_first?: PrimitiveOverrideProps<TextFieldProps>;
    german_first?: PrimitiveOverrideProps<TextFieldProps>;
    gender_first?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FirstNamesAllUpdateFormProps = React.PropsWithChildren<{
    overrides?: FirstNamesAllUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    firstNamesAll?: FirstNamesAll;
    onSubmit?: (fields: FirstNamesAllUpdateFormInputValues) => FirstNamesAllUpdateFormInputValues;
    onSuccess?: (fields: FirstNamesAllUpdateFormInputValues) => void;
    onError?: (fields: FirstNamesAllUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FirstNamesAllUpdateFormInputValues) => FirstNamesAllUpdateFormInputValues;
    onValidate?: FirstNamesAllUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FirstNamesAllUpdateForm(props: FirstNamesAllUpdateFormProps): React.ReactElement;
