import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.key}
            </option>
          );
        })}
        <ErrorMessage name={name} component={TextError} />
      </Field>
    </div>
  );
};

export default Select;
