
import {Field, ErrorMessage} from "formik"
import TextError from "./TextError"

const Input =(props)=>
{
    const {label, name , ...rest} = props

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field className="field" name={name}  {...rest} />
            <ErrorMessage  name={name} component={TextError}/>
        </div>
    )

}

export default Input