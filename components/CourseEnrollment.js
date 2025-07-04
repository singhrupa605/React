import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

const CourseEnrollment = () => {
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const courseDropdown = [
    {
      key: "Select Your Course",
      value: "",
    },
    {
      key: "React",
      value: "react",
    },
    {
      key: "Angular",
      value: "angular",
    },
    {
      key: "Vue",
      value: "vue",
    },
  ];

  const skillsCheckboxes = [
    {
      key: "HTML",
      value: "html",
    },
    {
      key: "Javascript",
      value: "javascript",
    },
    {
      key: "CSS",
      value: "css",
    },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!").email("Invalid Email Format"),
    bio: Yup.string().required("Required!"),
    course: Yup.string().required("Required!"),
    skills: Yup.array().required("Required!").min(1),
    courseDate: Yup.date().required("Required!").nullable(),
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
      {(formik) => (
        <Form>
          <FormikControl
            name="email"
            type="email"
            label="Email"
            control="input"
          />

          <FormikControl
            name="bio"
            label="Bio"
            control="textarea"
            type="text"
          />
          <FormikControl
            name="course"
            label="Course"
            control="select"
            options={courseDropdown}
          />
          <FormikControl
            name="skills"
            label="Your Skillset"
            control="checkbox"
            options={skillsCheckboxes}
          />
          <FormikControl name="courseDate" label="Course Date" control="date" />
          <button type="submit" className="loginButton" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseEnrollment;
