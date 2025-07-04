import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import { useState } from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    twitter: "",
    facebook: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedData = {
  name: "Rupa Singh",
  email: "singh@gmail.com",
  channel: "Beer Biceps",
   comments: "Welcome to Bear Bye Sups",
  address: "",
  social: {
    twitter: "",
    facebook: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, submitProps) => {
  submitProps.setSubmitting(false);
  submitProps.resetForm({values:initialValues});
};

const YoutubeForm = () => {
  const [savedValues, setSavedValues] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format").required("Required!"),
    channel: Yup.string().required("Required!"),
  });

  const validateComments = (value) => {
    let error = "";
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <Formik
      className="container"
      initialValues={savedValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
      validateOnMount
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form className="form">
            <div className="form-control">
              {" "}
              <label htmlFor="name">Name : </label>
              <Field type="text" name="name" id="name"></Field>
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail : </label>
              <Field type="email" name="email" id="email"></Field>
              <ErrorMessage name="email">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              {" "}
              <label htmlFor="channel">Channel : </label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="Enter your channel name"
              ></Field>
              <ErrorMessage name="channel" component="div" />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address : </label>
              <Field id="address" name="address">
                {(props) => {
                  const { field, meta, form } = props;
                  return (
                    <div>
                      <input id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter : </label>
              <Field type="text" id="twitter" name={"social.twitter"} />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook : </label>
              <Field type="text" id="facebook" name={"social.facebook"} />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number : </label>
              <Field id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone Number : </label>
              <Field id="secondaryPh" name="phoneNumbers[1]" />
            </div>
            <div>
              <div className="form-control">
                <label htmlFor="phNumbers">List Of Phone Numbers : </label>

                <FieldArray name="phNumbers" id="phNumbers">
                  {(props) => {
                    const { push, remove, form } = props;
                    const { values } = form;
                    const { phNumbers } = values;

                    return phNumbers.map((nums, index) => {
                      return (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button
                              className="btn-small"
                              type="button"
                              onClick={() => remove(index)}
                            >
                              -
                            </button>
                          )}
                          <button
                            className="btn-small"
                            type="button"
                            onClick={() => push("")}
                          >
                            +
                          </button>
                        </div>
                      );
                    });
                  }}
                </FieldArray>
              </div>
              <div className="form-control">
                <label htmlFor="comments">Comments : </label>
                <Field
                  id="comments"
                  name="comments"
                  as="textarea"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={() => {
                    setSavedValues({ ...savedData });
                  }}
                >
                  Load Saved Data
                </button>

                {/* <button type="submit" className="btn" disabled={!(formik.dirty && formik.isValid)}>
                Submit
              </button> */}
                <button
                  type="submit"
                  className="btn"
                  disabled={
                    !(formik.isValid) || formik.isSubmitting
                  }
                >
                  Submit
                </button>
                <button
                  type="reset"
                  onClick={()=>setSavedValues(savedData)}
                >
                  Reset Form
                </button>
              </div>
            </div>
            {/* <button
              className="btn" type="button"
              onClick={() => {
                formik.validateField("comments");
              }}
            >
              Validate Comments
            </button>
            <button
              className="btn" type="button"
              onClick={() => {
                formik.validateForm();
              }}
            >
              Validate Form
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                formik.setFieldTouched("comments");
              }}
            >
              Touch Comments
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                formik.setTouched({
                  name: true,
                  email: true,
                  comments: false,
                });
              }}
            >
              Touch Form
            </button> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
