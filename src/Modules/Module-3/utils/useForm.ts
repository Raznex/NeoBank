import {SubmitHandler, useForm} from "react-hook-form";
import FormPrescording from './validationInterface'

export default function FormValidation():any {

  const {register, handleSubmit, formState: {errors}, formState} = useForm<FormPrescording>()

  const formSubmit: SubmitHandler<FormPrescording> = (data , event:any) => {
    event.preventDefault()
    console.log(`${data}`)
  }

  return {handleSubmit, formSubmit, register, errors, formState
  }
}
