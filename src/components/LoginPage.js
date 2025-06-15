import { Formik, Form } from "formik";
import FormikControl from "../formik/FormikControl";
import * as Yup from "yup";

const LoginPage = () =>
   {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!").email("Invalid Email Format"),
    password: Yup.string().required("Required!")
  });

  const onSubmit = (values) => {
    console.log("Formdata " , values);
  };

  return (
    <div className="formik">
   
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values)
        return (
          <Form className="login-parent">
            <FormikControl
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              control="input"
            />
            <FormikControl
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your Password"
              control="input"
            />

            <button className="btn" type="submit" disabled={!formik.dirty || !formik.isValid}> Submit </button>
          </Form>
        );
      }}
    </Formik>
     </div>
  );
};
export default LoginPage