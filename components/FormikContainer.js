import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import { useState } from "react";

 
const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
  dateOfBirth: null,
};

const dropdownOptions = [
  { key: "Select an Option", value: "" },
  { key: "option 1", value: "option1" },
  { key: "option 2", value: "option2" },
  { key: "option 3", value: "option3" },
];

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const checkboxOptions = [
  { key: "option 1", value: "cOption1" },
  { key: "option 2", value: "cOption2" },
  { key: "option 3", value: "cOption3" },
];
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  description: Yup.string().required("Required!"),
  selectOption: Yup.string().required("Required!"),
  radioOption: Yup.string().required("Required!"),
  checkboxOption: Yup.array().required("Required"),
  dateOfBirth: Yup.date().required("Required!").nullable(),
});

const onSubmit = (formdata) => {
  console.log("Form Data ", formdata);
};

const savedData = {
  email: "sng@gmail.com",
  description: "This is my new email address",
  selectOption: "",
  radioOption: "rOption1",
  checkboxOption: [],
  dateOfBirth: new Date("Mon Jun 16 2025 00:00:00 GMT+0530 (India Standard Time)")
};

const FormikContainer = () => {
  const [savedValues, setSavedValues] = useState(null);

  return (
    <Formik
      initialValues={savedValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        //  console.log(formik.values);
        return (
          <Form>
            <FormikControl
              type="email"
              name="email"
              label="Email"
              control="input"
            />
            <FormikControl
              type="textarea"
              name="description"
              label="Description"
              control="textarea"
            />
            <FormikControl
              name="selectOption"
              label="Select a Topic"
              control="select"
              options={dropdownOptions}
            />
            <FormikControl
              name="radioOption"
              label="Choose one Option"
              options={radioOptions}
              control="radio"
            />
            <FormikControl
              name="checkboxOption"
              label="Check all that applies"
              options={checkboxOptions}
              control="checkbox"
            />
            <FormikControl
              name="dateOfBirth"
              label="Pick a Date"
              control="date"
            />
            <div className="btn-group">
              <button type="button" onClick={() => setSavedValues(savedData)}>
                Load Saved Data
              </button>{" "}
              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
