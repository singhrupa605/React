
import {
   Field,
  Input
} from "@chakra-ui/react";




const ChakraInput = (props)=>
 {
    const {name, label, ...rest} = props
    
    return (
     
           <Field.Root invalid>
            <Field.Label htmlFor={name}>{label}</Field.Label>
                {(props)=>
                  {
                    console.log(props)
                  }}     
            <Input  name={name}  />
            
                 
           </Field.Root>
    )
 }

 export default ChakraInput