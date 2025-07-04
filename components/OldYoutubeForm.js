import { useFormik } from "formik";
import * as Yup from "yup";

const OldYoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    // console.log(values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}&$/.test(values.email)
    ) {
      errors.email = "Invalid Email Format";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };


  const validationSchema = Yup.object({

    name :  Yup.string().required("Required!"),
    email  : Yup.string().email("Invalid Email Format").required("Required!"),
    channel : Yup.string().required("Required!")
  })
  

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

  //  console.log(formik.errors);
//  console.log(formik.touched);
  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          {" "}
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-control">
          {" "}
          <label htmlFor="channel">Channel : </label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.channel && formik.errors.channel ? (
            <p className="error">{formik.errors.channel}</p>
          ) : null}
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
