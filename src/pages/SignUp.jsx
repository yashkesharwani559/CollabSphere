import axios from "axios";
import { Form } from "react-router";

export const signUpData = async ({request}) =>{
    try {
        const res = await request.formData(request);
        const data = Object.fromEntries(res);
        console.log(data);

        const result =  axios.post(`${mport.meta.env.BASE_URL}/signup`,data);
        console.log(result.data);

        
    } catch (error) {
        console.log(error);
    }
}

export const SignUp =()=>{
    

    return (
        <>
            <Form action="/signup" method="POST" >

            </Form>
        </>
    );
}