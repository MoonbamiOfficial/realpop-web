import React from 'react'
import { Link } from 'react-router-dom'

// Components
import InputField from './InputField'
import SocialMedia from './SocialMedia'

// Assets
import Facebook from '../../assets/images/icon/facebook-logo.png'
import Google from '../../assets/images/icon/google-logo.png'

type Props = {}

const LoginUI = () => {
  return (
    <section id="login" className="relative hidden lg:flex flex-col items-center gap-y-[30px] text-sm p-10 border border-opaque-white bg-transparent backdrop-blur-xl shadow-lg rounded-xl transition-all">
      <h1 className="capitalize text-[2rem] font-semibold">Login</h1>
      <div className="login-section">
        <form action="" className="flex flex-col gap-y-[15px] ">
          <InputField id={"email"} labelFor={"email"} labelText={"email"} inputName={"email"} type={"email"} placeholder={"email"} />
          <InputField id={"password"} labelFor={"password"} labelText={"password"} inputName={"password"} type={"password"} placeholder={"password"} >

          </InputField>
          <div className="forgot flex justify-end ">
            <Link to="/" className="hover:underline " >Forgot Password?</Link>
          </div>
          <button id="login-btn" type="submit" className="w-[250px] h-[40px] bg-electric-pink rounded-lg text-base capitalize xl:w-[300px] ">login</button>
        </form>
      </div>
      <div className="login-with flex flex-col items-center gap-y-[10px]">
        <div id="or" className="flex items-center select-none ">
          <hr className="w-[100px] xl:w-[140px]"/>
          <p className="p-2 uppercase bg-opaque-white rounded-xl text-xs">or</p>
          <hr className="w-[100px] xl:w-[140px]"/>
        </div>
        <div className="socmed flex gap-x-[15px] select-none ">
          <SocialMedia id={"facebook"} src={Facebook} alt={"Facebook"} className={"bg-[#1877F2]"} />
          <SocialMedia id={"google"} src={Google} alt={"Google"} className={"bg-[#D9D9D9]"} />
        </div>
      </div>
      <p className="capitalize font-medium">don&apos;t have an account? <Link to="/signup" className="text-electric-pink hover:underline font-semibold">sign-up!</Link></p>
    </section>
  )
}

export default LoginUI