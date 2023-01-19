/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LastNamesAll } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LastNamesAllCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    all_last: "",
    persian_last: "",
    arab_last: "",
    kurmanji_last: "",
    pakistani_last: "",
    sorani_last: "",
    turkish_last: "",
    ukrainian_last: "",
    german_last: "",
  };
  const [all_last, setAll_last] = React.useState(initialValues.all_last);
  const [persian_last, setPersian_last] = React.useState(
    initialValues.persian_last
  );
  const [arab_last, setArab_last] = React.useState(initialValues.arab_last);
  const [kurmanji_last, setKurmanji_last] = React.useState(
    initialValues.kurmanji_last
  );
  const [pakistani_last, setPakistani_last] = React.useState(
    initialValues.pakistani_last
  );
  const [sorani_last, setSorani_last] = React.useState(
    initialValues.sorani_last
  );
  const [turkish_last, setTurkish_last] = React.useState(
    initialValues.turkish_last
  );
  const [ukrainian_last, setUkrainian_last] = React.useState(
    initialValues.ukrainian_last
  );
  const [german_last, setGerman_last] = React.useState(
    initialValues.german_last
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAll_last(initialValues.all_last);
    setPersian_last(initialValues.persian_last);
    setArab_last(initialValues.arab_last);
    setKurmanji_last(initialValues.kurmanji_last);
    setPakistani_last(initialValues.pakistani_last);
    setSorani_last(initialValues.sorani_last);
    setTurkish_last(initialValues.turkish_last);
    setUkrainian_last(initialValues.ukrainian_last);
    setGerman_last(initialValues.german_last);
    setErrors({});
  };
  const validations = {
    all_last: [],
    persian_last: [],
    arab_last: [],
    kurmanji_last: [],
    pakistani_last: [],
    sorani_last: [],
    turkish_last: [],
    ukrainian_last: [],
    german_last: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          all_last,
          persian_last,
          arab_last,
          kurmanji_last,
          pakistani_last,
          sorani_last,
          turkish_last,
          ukrainian_last,
          german_last,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new LastNamesAll(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LastNamesAllCreateForm")}
      {...rest}
    >
      <TextField
        label="All last"
        isRequired={false}
        isReadOnly={false}
        value={all_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last: value,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.all_last ?? value;
          }
          if (errors.all_last?.hasError) {
            runValidationTasks("all_last", value);
          }
          setAll_last(value);
        }}
        onBlur={() => runValidationTasks("all_last", all_last)}
        errorMessage={errors.all_last?.errorMessage}
        hasError={errors.all_last?.hasError}
        {...getOverrideProps(overrides, "all_last")}
      ></TextField>
      <TextField
        label="Persian last"
        isRequired={false}
        isReadOnly={false}
        value={persian_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last: value,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.persian_last ?? value;
          }
          if (errors.persian_last?.hasError) {
            runValidationTasks("persian_last", value);
          }
          setPersian_last(value);
        }}
        onBlur={() => runValidationTasks("persian_last", persian_last)}
        errorMessage={errors.persian_last?.errorMessage}
        hasError={errors.persian_last?.hasError}
        {...getOverrideProps(overrides, "persian_last")}
      ></TextField>
      <TextField
        label="Arab last"
        isRequired={false}
        isReadOnly={false}
        value={arab_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last: value,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.arab_last ?? value;
          }
          if (errors.arab_last?.hasError) {
            runValidationTasks("arab_last", value);
          }
          setArab_last(value);
        }}
        onBlur={() => runValidationTasks("arab_last", arab_last)}
        errorMessage={errors.arab_last?.errorMessage}
        hasError={errors.arab_last?.hasError}
        {...getOverrideProps(overrides, "arab_last")}
      ></TextField>
      <TextField
        label="Kurmanji last"
        isRequired={false}
        isReadOnly={false}
        value={kurmanji_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last: value,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.kurmanji_last ?? value;
          }
          if (errors.kurmanji_last?.hasError) {
            runValidationTasks("kurmanji_last", value);
          }
          setKurmanji_last(value);
        }}
        onBlur={() => runValidationTasks("kurmanji_last", kurmanji_last)}
        errorMessage={errors.kurmanji_last?.errorMessage}
        hasError={errors.kurmanji_last?.hasError}
        {...getOverrideProps(overrides, "kurmanji_last")}
      ></TextField>
      <TextField
        label="Pakistani last"
        isRequired={false}
        isReadOnly={false}
        value={pakistani_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last: value,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.pakistani_last ?? value;
          }
          if (errors.pakistani_last?.hasError) {
            runValidationTasks("pakistani_last", value);
          }
          setPakistani_last(value);
        }}
        onBlur={() => runValidationTasks("pakistani_last", pakistani_last)}
        errorMessage={errors.pakistani_last?.errorMessage}
        hasError={errors.pakistani_last?.hasError}
        {...getOverrideProps(overrides, "pakistani_last")}
      ></TextField>
      <TextField
        label="Sorani last"
        isRequired={false}
        isReadOnly={false}
        value={sorani_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last: value,
              turkish_last,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.sorani_last ?? value;
          }
          if (errors.sorani_last?.hasError) {
            runValidationTasks("sorani_last", value);
          }
          setSorani_last(value);
        }}
        onBlur={() => runValidationTasks("sorani_last", sorani_last)}
        errorMessage={errors.sorani_last?.errorMessage}
        hasError={errors.sorani_last?.hasError}
        {...getOverrideProps(overrides, "sorani_last")}
      ></TextField>
      <TextField
        label="Turkish last"
        isRequired={false}
        isReadOnly={false}
        value={turkish_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last: value,
              ukrainian_last,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.turkish_last ?? value;
          }
          if (errors.turkish_last?.hasError) {
            runValidationTasks("turkish_last", value);
          }
          setTurkish_last(value);
        }}
        onBlur={() => runValidationTasks("turkish_last", turkish_last)}
        errorMessage={errors.turkish_last?.errorMessage}
        hasError={errors.turkish_last?.hasError}
        {...getOverrideProps(overrides, "turkish_last")}
      ></TextField>
      <TextField
        label="Ukrainian last"
        isRequired={false}
        isReadOnly={false}
        value={ukrainian_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last: value,
              german_last,
            };
            const result = onChange(modelFields);
            value = result?.ukrainian_last ?? value;
          }
          if (errors.ukrainian_last?.hasError) {
            runValidationTasks("ukrainian_last", value);
          }
          setUkrainian_last(value);
        }}
        onBlur={() => runValidationTasks("ukrainian_last", ukrainian_last)}
        errorMessage={errors.ukrainian_last?.errorMessage}
        hasError={errors.ukrainian_last?.hasError}
        {...getOverrideProps(overrides, "ukrainian_last")}
      ></TextField>
      <TextField
        label="German last"
        isRequired={false}
        isReadOnly={false}
        value={german_last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_last,
              persian_last,
              arab_last,
              kurmanji_last,
              pakistani_last,
              sorani_last,
              turkish_last,
              ukrainian_last,
              german_last: value,
            };
            const result = onChange(modelFields);
            value = result?.german_last ?? value;
          }
          if (errors.german_last?.hasError) {
            runValidationTasks("german_last", value);
          }
          setGerman_last(value);
        }}
        onBlur={() => runValidationTasks("german_last", german_last)}
        errorMessage={errors.german_last?.errorMessage}
        hasError={errors.german_last?.hasError}
        {...getOverrideProps(overrides, "german_last")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
