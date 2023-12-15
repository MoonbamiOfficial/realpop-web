import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import Facebook from '../../assets/images/icon/facebook-logo.png'
import Google from '../../assets/images/icon/google-logo.png'

type Props = {
  id?: string
  labelFor?: string
  labelText?: string
  inputName?: string
  type?: string
  placeholder?: string

  src?: string | undefined
  alt?: string
  className?: string
}

const LoginUI = () => {
  return (
    <section id="login" className="relative hidden lg:flex flex-col items-center gap-y-[30px] text-sm p-[40px] border border-opaque-white bg-transparent backdrop-blur-xl shadow-lg rounded-xl ">
      <h1 className="capitalize text-[2rem] font-semibold">Login</h1>
      <div className="login-section">
        <form action="" className="flex flex-col gap-y-[15px] ">
          <InputField id={"email"} labelFor={"email"} labelText={"Email"} inputName={"email"} type={"email"} placeholder={"Email"} />
          <InputField id={"password"} labelFor={"password"} labelText={"Password"} inputName={"password"} type={"password"} placeholder={"password"} >

          </InputField>
          <div className="forgot flex justify-end hover:underline">
            <Link to="/">Forgot Password?</Link>
          </div>
          <button id="login-btn" type="submit" className="w-[300px] h-[40px] bg-electric-pink rounded-lg text-base ">Login</button>
        </form>
      </div>
      <div className="login-with flex flex-col items-center gap-y-[10px]">
        <div id="or" className="flex items-center">
          <hr className="w-[140px]"/>
          <p className="p-2 uppercase bg-opaque-white rounded-xl text-xs">or</p>
          <hr className="w-[140px]"/>
        </div>
        <div className="socmed flex gap-x-[15px]">
          <SocialMedia id={"facebook"} src={Facebook} alt={"Facebook"} className={"bg-[#1877F2]"} />
          <SocialMedia id={"google"} src={Google} alt={"Google"} className={"bg-[#D9D9D9]"} />
        </div>
      </div>
      <p className="capitalize font-medium">don&apos;t have an account? <Link to="/signup" className="text-electric-pink hover:underline font-semibold">sign-up!</Link></p>
    </section>
  )
}

function InputField(props: Props) {
  return (
    <div id={props.id} className="flex flex-col">
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <input name={props.inputName} type={props.type} placeholder={props.placeholder} required className="relative text-black w-[300px] h-[40px] outline-none rounded-lg text-xs placeholder:text-xs px-4 py-2" />
    </div>
  )
}

function SocialMedia(props: Props) {
  return (
    <button type="submit" id={props.id} className={`${props.className} w-[150px] h-[60px] rounded-[32px] flex justify-center items-center`} >
      <img src={props.src} alt={props.alt} className="w-[40px]" />
    </button>
  )
}


export default LoginUI