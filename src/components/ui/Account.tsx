import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// Contexts
import { UserContext } from '../../context/UserContext'

// Components
import InputField from './InputField'
import SocialMedia from './SocialMedia'

// Assets
import Facebook from '../../assets/images/icon/facebook-logo.png'
import Google from '../../assets/images/icon/google-logo.png'

type Props = {
  className?: string
}

const LoginUI = (props: Props) => {
  const { loginUser } = useContext(UserContext)
  const [ isLoginActive, setIsLoginActive ] = useState(true)

  const toggleLogin = () => {
    setIsLoginActive(isLoginActive => !isLoginActive)
  }

  return (
    <>
      {isLoginActive? 
      (<section id="login" className={`${props.className} relative hidden lg:flex flex-col items-center gap-y-[30px] text-sm p-10 border border-opaque-white bg-transparent backdrop-blur-xl shadow-lg rounded-xl transition-all`}>
        <h1 className="capitalize text-[2rem] font-semibold">Login</h1>
        <div className="login-section">
          <form onSubmit={loginUser} action="" className="flex flex-col gap-y-[15px] ">
            <InputField htmlFor={"username"} labelText={"username"} id={"username"} type={"username"} name={"username"} placeholder={"username"} />
            <InputField htmlFor={"password"} labelText={"password"} id={"password"} type={"password"} name={"password"} placeholder={"password"} >

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
        <p className="capitalize font-medium">don&apos;t have an account? <button onClick={ toggleLogin } className="capitalize text-electric-pink hover:underline font-semibold">sign-up!</button></p>
      </section>) :
        (<section id="signup" className="relative hidden lg:flex flex-col items-center gap-y-[30px] text-sm p-[40px] ml-1 border border-opaque-white bg-transparent backdrop-blur-xl shadow-lg rounded-xl transition-all">
        <h1 className="capitalize text-[2rem] font-semibold">Sign-Up</h1>
        <form action="" className="flex flex-col gap-y-[15px] ">
          <InputField htmlFor={"username"} labelText={"username"} id={"username"} type={"username"} name={"username"} placeholder={"username"} />
          <InputField htmlFor={"email"} labelText={"email"} id={"email"} type={"email"} name={"email"} placeholder={"email"} />
          <InputField htmlFor={"password"} labelText={"password"} id={"password"} type={"password"} name={"password"} placeholder={"password"} >

          </InputField>
          <InputField htmlFor={"confirm-password"} labelText={"confirm password"} id={"confirm-password"} type={"password"} name={"confirm-password"} placeholder={"confirm password"} >

          </InputField>
          <button id="login-btn" type="submit" className="w-[250px] h-[40px] mt-[15px] bg-electric-pink rounded-lg text-base capitalize xl:w-[300px]">sign-up</button>
        </form>
        <p className="capitalize font-medium">already have an account? <button onClick={ toggleLogin } className="capitalize text-electric-pink hover:underline font-semibold">login!</button></p>
      </section>)}
    </>
  )
}

export default LoginUI