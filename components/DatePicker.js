import { ErrorMessage, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";
import DateView from "react-datepicker"

let date ;
const DatePicker = (props) => {
  
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          date = value
           // console.log(date)
          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(val) => {setFieldValue(name,val)
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export { DatePicker, date}
