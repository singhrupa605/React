import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";



const Input  = (props)=>
{
    const {name, label, ...rest}  = props;

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorText}/>
        </div>
    )
}


export default Input