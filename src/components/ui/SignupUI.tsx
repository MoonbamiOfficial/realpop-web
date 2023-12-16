import React from 'react'
import { Link } from 'react-router-dom'

// Components
import InputField from './InputField'

type Props = {}

const SignupUI = (props: Props) => {
  return (
    <section id="signup" className="relative hidden lg:flex flex-col items-center gap-y-[30px] text-sm p-[40px] ml-1 border border-opaque-white bg-transparent backdrop-blur-xl shadow-lg rounded-xl transition-all">
      <h1 className="capitalize text-[2rem] font-semibold">Sign-Up</h1>
      <form action="" className="flex flex-col gap-y-[30px] ">
        <InputField id={"username"} labelFor={"username"} labelText={"username"} inputName={"username"} type={"username"} placeholder={"username"} />
        <InputField id={"email"} labelFor={"email"} labelText={"email"} inputName={"email"} type={"email"} placeholder={"email"} />
        <InputField id={"password"} labelFor={"password"} labelText={"password"} inputName={"password"} type={"password"} placeholder={"password"} >

        </InputField>
        <InputField id={"confirm-password"} labelFor={"confirm-password"} labelText={"confirm password"} inputName={"confirm-password"} type={"password"} placeholder={"confirm password"} >

        </InputField>
        <button id="login-btn" type="submit" className="w-[300px] h-[40px] bg-electric-pink rounded-lg text-base capitalize">sign-up</button>
      </form>
      <p className="capitalize font-medium">already have an account? <Link to="/login" className="text-electric-pink hover:underline font-semibold">login!</Link></p>
    </section>
  )
}

export default SignupUI