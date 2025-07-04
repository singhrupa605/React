import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div className="p-3 w-full">
      <div className="flex flex-row w-full justify-between items-center flex-wrap">
        {" "}
        <label className="font-bold text-gray-700" htmlFor={name}>
          {label} :{" "}
        </label>
        <Field
          name={name}
          {...rest}
          className="border-1 border-gray-300 w-[83%] p-3"
        />
      </div>

      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Input;
