import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { useState } from "react";

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!").email("Invalid Email Format"),
    password: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    console.log("Formdata : ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) =>{
     return <Form className="loginPage">
        <FormikControl
          control="input"
          name="email"
          type="email"
          label="Email"
        />
        <div className="password-parent">
          <FormikControl
            control="input"
            id="password"
            name="password"
            type={passwordType}
            label="Password"
          />
          {passwordType === "password" ? (
            <button className="btn" disabled={!formik.values["password"]} onClick={() => setPasswordType("text")}>
              Show
            </button>
          ) : (
            <button className="btn" disabled={!formik.values["password"]} onClick={() => setPasswordType("password")}>
              Hide{" "}
            </button>
          )}
        </div>

        {!isloggedIn ? (
          <button type="submit" className="loginButton"  onClick={()=>setIsLoggedIn(true)}>
            {" "}
            Login
          </button>
        ) : (
          <button type="submit" className="loginButton" onClick={()=>setIsLoggedIn(false)}>
            {" "}
            Logout
          </button>
        )}

        
      </Form>}
      }
    </Formik>
  );
};

export default LoginPage;
