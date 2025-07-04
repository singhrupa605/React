import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const RegistrationPage = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const modesOfContact = [
    {
      key: "Email",
      value: "email",
    },
    {
      key: "Telephone",
      value: "phone",
    },
  ];

  //   const validationSchema = Yup.object({
  //     email: Yup.string().required("Required!").email("Invalid Email Format!"),
  //     password: Yup.string().required("Required!"),
  //     confirmPassword: Yup.string()
  //       .oneOf([Yup.ref("password")], "Passwords must match")
  //       .required("Required!"),
  //     modeOfContact: Yup.string().required("Required!"),
  //     phone: Yup.string().when("modeOfContact",{
  //       is: "phone",
  //       then : Yup.string().required("Required!")

  //     }),
  //   });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Required!").email("Invalid Email Format!"),

    password: Yup.string().min(6 , "itna chhota password saale!").required("Required!"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required!"),

    modeOfContact: Yup.string().required("Required!"),

    phone: Yup.string()
    .when("modeOfContact", {
      is: "phone",
      then: () => Yup.string().min(10).required("Required!"),
      otherwise: () => Yup.string().notRequired(),
    }),
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
      <Form>
        <FormikControl
          name="email"
          type="email"
          label="Email"
          control="input"
        />
        <FormikControl
          name="password"
          type="password"
          label="Password"
          control="input"
        />
        <FormikControl
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          control="input"
        />
        <FormikControl
          control="radio"
          name="modeOfContact"
          label="Mode Of Contact"
          options={modesOfContact}
        />
        <FormikControl control="input" name="phone" label="Phone" type="text" />
        <button className="loginButton" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
