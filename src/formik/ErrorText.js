

const ErrorText =  (props)=>
{
    return(
        <div className="text-red-600 pt-3 text-[17px]">
            {props.children}
        </div>
    )
}

export default ErrorText