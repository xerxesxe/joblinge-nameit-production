/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { FirstNamesAll } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FirstNamesAllUpdateForm(props) {
  const {
    id: idProp,
    firstNamesAll,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    all_first: "",
    persian_first: "",
    arab_first: "",
    kurmanji_first: "",
    pakistani_first: "",
    sorani_first: "",
    turkish_first: "",
    ukrainian_first: "",
    german_first: "",
    gender_first: "",
  };
  const [all_first, setAll_first] = React.useState(initialValues.all_first);
  const [persian_first, setPersian_first] = React.useState(
    initialValues.persian_first
  );
  const [arab_first, setArab_first] = React.useState(initialValues.arab_first);
  const [kurmanji_first, setKurmanji_first] = React.useState(
    initialValues.kurmanji_first
  );
  const [pakistani_first, setPakistani_first] = React.useState(
    initialValues.pakistani_first
  );
  const [sorani_first, setSorani_first] = React.useState(
    initialValues.sorani_first
  );
  const [turkish_first, setTurkish_first] = React.useState(
    initialValues.turkish_first
  );
  const [ukrainian_first, setUkrainian_first] = React.useState(
    initialValues.ukrainian_first
  );
  const [german_first, setGerman_first] = React.useState(
    initialValues.german_first
  );
  const [gender_first, setGender_first] = React.useState(
    initialValues.gender_first
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = firstNamesAllRecord
      ? { ...initialValues, ...firstNamesAllRecord }
      : initialValues;
    setAll_first(cleanValues.all_first);
    setPersian_first(cleanValues.persian_first);
    setArab_first(cleanValues.arab_first);
    setKurmanji_first(cleanValues.kurmanji_first);
    setPakistani_first(cleanValues.pakistani_first);
    setSorani_first(cleanValues.sorani_first);
    setTurkish_first(cleanValues.turkish_first);
    setUkrainian_first(cleanValues.ukrainian_first);
    setGerman_first(cleanValues.german_first);
    setGender_first(cleanValues.gender_first);
    setErrors({});
  };
  const [firstNamesAllRecord, setFirstNamesAllRecord] =
    React.useState(firstNamesAll);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FirstNamesAll, idProp)
        : firstNamesAll;
      setFirstNamesAllRecord(record);
    };
    queryData();
  }, [idProp, firstNamesAll]);
  React.useEffect(resetStateValues, [firstNamesAllRecord]);
  const validations = {
    all_first: [{ type: "Required" }],
    persian_first: [],
    arab_first: [],
    kurmanji_first: [],
    pakistani_first: [],
    sorani_first: [],
    turkish_first: [],
    ukrainian_first: [],
    german_first: [],
    gender_first: [],
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
          all_first,
          persian_first,
          arab_first,
          kurmanji_first,
          pakistani_first,
          sorani_first,
          turkish_first,
          ukrainian_first,
          german_first,
          gender_first,
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
          await DataStore.save(
            FirstNamesAll.copyOf(firstNamesAllRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FirstNamesAllUpdateForm")}
      {...rest}
    >
      <TextField
        label="All first"
        isRequired={true}
        isReadOnly={false}
        value={all_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first: value,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.all_first ?? value;
          }
          if (errors.all_first?.hasError) {
            runValidationTasks("all_first", value);
          }
          setAll_first(value);
        }}
        onBlur={() => runValidationTasks("all_first", all_first)}
        errorMessage={errors.all_first?.errorMessage}
        hasError={errors.all_first?.hasError}
        {...getOverrideProps(overrides, "all_first")}
      ></TextField>
      <TextField
        label="Persian first"
        isRequired={false}
        isReadOnly={false}
        value={persian_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first: value,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.persian_first ?? value;
          }
          if (errors.persian_first?.hasError) {
            runValidationTasks("persian_first", value);
          }
          setPersian_first(value);
        }}
        onBlur={() => runValidationTasks("persian_first", persian_first)}
        errorMessage={errors.persian_first?.errorMessage}
        hasError={errors.persian_first?.hasError}
        {...getOverrideProps(overrides, "persian_first")}
      ></TextField>
      <TextField
        label="Arab first"
        isRequired={false}
        isReadOnly={false}
        value={arab_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first: value,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.arab_first ?? value;
          }
          if (errors.arab_first?.hasError) {
            runValidationTasks("arab_first", value);
          }
          setArab_first(value);
        }}
        onBlur={() => runValidationTasks("arab_first", arab_first)}
        errorMessage={errors.arab_first?.errorMessage}
        hasError={errors.arab_first?.hasError}
        {...getOverrideProps(overrides, "arab_first")}
      ></TextField>
      <TextField
        label="Kurmanji first"
        isRequired={false}
        isReadOnly={false}
        value={kurmanji_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first: value,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.kurmanji_first ?? value;
          }
          if (errors.kurmanji_first?.hasError) {
            runValidationTasks("kurmanji_first", value);
          }
          setKurmanji_first(value);
        }}
        onBlur={() => runValidationTasks("kurmanji_first", kurmanji_first)}
        errorMessage={errors.kurmanji_first?.errorMessage}
        hasError={errors.kurmanji_first?.hasError}
        {...getOverrideProps(overrides, "kurmanji_first")}
      ></TextField>
      <TextField
        label="Pakistani first"
        isRequired={false}
        isReadOnly={false}
        value={pakistani_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first: value,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.pakistani_first ?? value;
          }
          if (errors.pakistani_first?.hasError) {
            runValidationTasks("pakistani_first", value);
          }
          setPakistani_first(value);
        }}
        onBlur={() => runValidationTasks("pakistani_first", pakistani_first)}
        errorMessage={errors.pakistani_first?.errorMessage}
        hasError={errors.pakistani_first?.hasError}
        {...getOverrideProps(overrides, "pakistani_first")}
      ></TextField>
      <TextField
        label="Sorani first"
        isRequired={false}
        isReadOnly={false}
        value={sorani_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first: value,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.sorani_first ?? value;
          }
          if (errors.sorani_first?.hasError) {
            runValidationTasks("sorani_first", value);
          }
          setSorani_first(value);
        }}
        onBlur={() => runValidationTasks("sorani_first", sorani_first)}
        errorMessage={errors.sorani_first?.errorMessage}
        hasError={errors.sorani_first?.hasError}
        {...getOverrideProps(overrides, "sorani_first")}
      ></TextField>
      <TextField
        label="Turkish first"
        isRequired={false}
        isReadOnly={false}
        value={turkish_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first: value,
              ukrainian_first,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.turkish_first ?? value;
          }
          if (errors.turkish_first?.hasError) {
            runValidationTasks("turkish_first", value);
          }
          setTurkish_first(value);
        }}
        onBlur={() => runValidationTasks("turkish_first", turkish_first)}
        errorMessage={errors.turkish_first?.errorMessage}
        hasError={errors.turkish_first?.hasError}
        {...getOverrideProps(overrides, "turkish_first")}
      ></TextField>
      <TextField
        label="Ukrainian first"
        isRequired={false}
        isReadOnly={false}
        value={ukrainian_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first: value,
              german_first,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.ukrainian_first ?? value;
          }
          if (errors.ukrainian_first?.hasError) {
            runValidationTasks("ukrainian_first", value);
          }
          setUkrainian_first(value);
        }}
        onBlur={() => runValidationTasks("ukrainian_first", ukrainian_first)}
        errorMessage={errors.ukrainian_first?.errorMessage}
        hasError={errors.ukrainian_first?.hasError}
        {...getOverrideProps(overrides, "ukrainian_first")}
      ></TextField>
      <TextField
        label="German first"
        isRequired={false}
        isReadOnly={false}
        value={german_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first: value,
              gender_first,
            };
            const result = onChange(modelFields);
            value = result?.german_first ?? value;
          }
          if (errors.german_first?.hasError) {
            runValidationTasks("german_first", value);
          }
          setGerman_first(value);
        }}
        onBlur={() => runValidationTasks("german_first", german_first)}
        errorMessage={errors.german_first?.errorMessage}
        hasError={errors.german_first?.hasError}
        {...getOverrideProps(overrides, "german_first")}
      ></TextField>
      <TextField
        label="Gender first"
        isRequired={false}
        isReadOnly={false}
        value={gender_first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              all_first,
              persian_first,
              arab_first,
              kurmanji_first,
              pakistani_first,
              sorani_first,
              turkish_first,
              ukrainian_first,
              german_first,
              gender_first: value,
            };
            const result = onChange(modelFields);
            value = result?.gender_first ?? value;
          }
          if (errors.gender_first?.hasError) {
            runValidationTasks("gender_first", value);
          }
          setGender_first(value);
        }}
        onBlur={() => runValidationTasks("gender_first", gender_first)}
        errorMessage={errors.gender_first?.errorMessage}
        hasError={errors.gender_first?.hasError}
        {...getOverrideProps(overrides, "gender_first")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || firstNamesAll)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || firstNamesAll) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
