"use client"
import axios from "axios"
import {useForm} from "react-hook-form";

interface RegisterFormProps {
  list: string[]
}

export default function RegisterForm({list}: RegisterFormProps) {
  interface RegisterForm {
    name: string,
    email: string,
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<RegisterForm>()

  function onSubmit(data: RegisterForm) {
    // todo : complete register POST request in "/api/auth/register/route.ts"
    console.log(list)
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name?.message}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            validate: (value) => {
              return list.reduce((previousValue, currentValue) => {
                if (currentValue == value) return true
                return previousValue
              }, false)
            }
          })}
        />
        {errors.email?.message}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,

          })}
        />
        {errors.password?.message}
        <button type="submit">Register</button>
      </form>
    </>
  )
}