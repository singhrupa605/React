import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import React from "react";

const RadioGroup = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return (
            <div className="radio-group">
              {options.map((opt) => {
                return (
                  <React.Fragment key={opt.value}>
                    <input
                      type="radio"
                      id={opt.value}
                      {...field}
                      value={opt.value}
                      checked={field.value === opt.value}
                    />
                    <label htmlFor={opt.value}>{opt.key}</label>
                  </React.Fragment>
                );
              })}
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioGroup
