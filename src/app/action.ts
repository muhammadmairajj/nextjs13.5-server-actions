'use server';
import { setTimeout } from "timers/promises";
export const formSubmission = async (prevState: any, formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');

    console.log({ name, email });
    await setTimeout(3000);
    return {
        error: "Example Error"
    }
}