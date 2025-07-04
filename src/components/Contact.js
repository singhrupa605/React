import FormikControl from "../formik/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "Yup";

const Contact = () => {
  const initialValues = {
    name: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name can't be empty"),
    message: Yup.string().required("Message can't be empty"),
  });
  const onsubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col justify-center w-[100%] items-center">
      <h1 className="text-3xl font-bold p-5 text-amber-600">Contact Us</h1>
      <Formik
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <div className="h-110 w-250 p-5 flex justify-center">
          <Form className="w-[60%] flex flex-col gap-5 p-6 shadow-xl bg-amber-50">
            <FormikControl
              control="input"
              name="name"
              label="Name"
              placeholder="Name"
              type="text"
            />
            <FormikControl
              control="input"
              name="message"
              label="Message"
              placeholder="Message"
              type="text"
            />
            <button
              type="submit"
              className="mt-10 w-30 active:bg-amber-400 active:font-bold  focus-visible:text-amber-300 shadow transition-transform duration-100 ease-in-out transform hover:scale-105 active:scale-99 rounded-md px-10 py-1 bg-gray-200 cursor-pointer hover:bg-amber-50 hover:border-1 border-gray-300"
            >
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Contact;
