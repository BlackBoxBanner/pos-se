"use client"

import {SubmitHandler, useForm} from "react-hook-form"
import {useState} from "react";
import axios from "axios";
import {unknown} from "zod";

export default function LoginForm() {
  interface LoginFormType {
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormType>()

  const [resError, setResError] = useState("")

  function onSubmit(data: LoginFormType) {
    console.log(data)

    axios.post("/api/auth/signin", {
      email: data.email,
      password: data.password
    }).catch(err => {
      if (err instanceof Error) {
        setResError(err.message)
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={"email"}>Email</label>
        <input type="email" id={"email"}
               {...register("email", {
                 required: {value: true, message: "Email is required"},
                 pattern: {
                   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                   message: "Input must be an email",
                 }
               })}
        />
        {errors.email?.message && errors.email?.message}
        <label htmlFor={"password"}>Password</label>
        <input type="password" id={"password"}
               {...register("password", {
                 required: {
                   value: true,
                   message: "Password required"
                 },
               })}
        />
        {errors.password?.message && errors.password?.message}
        <button type={"submit"}>Login</button>
        {resError}
      </form>
    </>
  )
}