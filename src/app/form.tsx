'use client'
import { experimental_useFormStatus as useFormStatus, experimental_useFormState as useFormState } from 'react-dom'
import { formSubmission } from "./action";

function FormBody({error}: {error: string}) {
  const formStatus = useFormStatus();
  return (
    <fieldset className="mx-auto max-w-sx flex flex-col gap-2">
    <input
      type="text"
      name="name"
      placeholder="Enter Your Name"
      className="text-black"
    />
    <input
      type="email"
      name="email"
      placeholder="Enter Your Email"
      className="text-black"
    />
    {!!error && <p className='text-red-500'>{error}</p>}
    <button type='submit'>
        {formStatus.pending ? "Loading..." : "Submit"}
    </button>
  </fieldset>
  )
}


function Form() {
  const [state, formAction] = useFormState(formSubmission, {
    error: "",
    success: false
  })
 
  const { error, success } = state;
  // console.log({state});
  return (
    <form action={formAction}>
     <FormBody error={error} />
    </form>
  );
}

export default Form;
