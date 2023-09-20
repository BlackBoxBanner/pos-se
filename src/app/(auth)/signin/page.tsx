import LoginForm from "@/(auth)/components/form/loginForm";

export default async function Login() {
  return (
    <>
      <LoginForm route={"/"}/>
    </>
  )
}