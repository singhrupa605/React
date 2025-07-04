import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const CheckboxGroup = (props) => {
  const { name, label, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {

           return <div className="radio-group">
         { options.map((option) => {
          return  <React.Fragment key={option.value}>
              <input
                type="checkbox"
                {...field}
                value={option.value}
                id={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>;
          })}</div>
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckboxGroup