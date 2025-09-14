import React from 'react'
import { useForm } from "react-hook-form"

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors , isSubmitting},
    } = useForm() // If i want valid form before submssion on every here we can pass { mode: "onChange" } in useForm();

    function promise(d) {
        return new Promise((resolve , reject)=>{
            setTimeout(() => {
                resolve('Form has submitted')
            }, d*1000);
        })
    }

    async function submitForm(data) {
        await promise(2)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <h1>Form by react hook form</h1>
            {isSubmitting && <div>Form is submitting...</div> }
            {/* Email input */}
            <input
                {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format"
                    }
                })}
                type="text"
                placeholder="Write your email"
            />
            {errors.email && <div>{errors.email.message}</div>}

            {/* Password input */}
            <input
                {...register("password", { 
                    required: "Password is required", 
                    minLength: { value: 8, message: "Minimum 8 characters" }, 
                    maxLength: { value: 20, message: "Maximum 20 characters" } 
                })}
                type="password"
                placeholder="Enter your password"
            />
            {errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}

            <button disabled={isSubmitting}>Login</button>
        </form>
    )
}

export default ReactHookForm
