import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink, To } from 'react-router-dom'

// Styles
import '../styles/components/header.css'

// Assets
import Realpop_Logo from '../assets/images/icon/realpop-official-logo.png'
import Admin_Jam from '../assets/images/user/hanni.jpg'

type Props = {
  text: String
  to: To
}

const Header = () => {
  const [ isBurgerDropdownActive, setIsBurgerDropdownActive ] = useState(false)
  const [ isUserDropdownActive, setIsUserDropdownActive ] = useState(false)
  const [ isUserIconDropdownActive, setIsUserIconDropdownActive ] = useState(false)

  let dropdown = useRef<HTMLDivElement | null>(null)

  const toggleBurgerDropdown = () => {
    setIsBurgerDropdownActive(!isBurgerDropdownActive)
    setIsUserDropdownActive(false)
  }
  const toggleUserDropdown = () => {
    setIsBurgerDropdownActive(false)
    setIsUserDropdownActive(!isUserDropdownActive)
  }

  const toggleUserIconDropdown = () => {
    setIsUserIconDropdownActive(!isUserIconDropdownActive)
    setIsBurgerDropdownActive(false)
    setIsUserDropdownActive(false)
  }

  useEffect(() => {
    let handleDropdown = ({ target } : Event) => {
      if(!dropdown.current?.contains(target as Node)) {
        setIsBurgerDropdownActive(false)
        setIsUserDropdownActive(false)
        setIsUserIconDropdownActive(false)
      }
    }
    document.addEventListener('mousedown', handleDropdown)
    return () => {
    document.removeEventListener('mousedown', handleDropdown)
    }
  }, [])

  return (
    <>
      <div className="header-bg top-0 fixed z-[100] bg-black w-full h-[60px]  "></div>
      <header ref={ dropdown } id="" className="container fixed left-[50%] translate-x-[-50%] top-0 z-[100] px-8 w-full h-[60px] flex justify-between items-center 2xl:px-16 transition-all ">



        {/* Left */}
        <div id="left" className=" flex items-center w-[115px] gap-x-[8px] md:w-[130px] lg:w-[140px] 2xl:w-[160px]">
          <button onClick={ () => toggleBurgerDropdown() } className="burger-menu w-[50px] h-[50px] text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          {isBurgerDropdownActive && (
            <div className=" z-[100] absolute top-[70px] h-[150px] sm:top-[80px] md:top-[90px] lg:hidden ">
              <div className="flex flex-col gap-y-[6px] md:gap-y-[12px] ">
                <BurgerDropdown to={"/"} text={"Home"} />
                <BurgerDropdown to={"/about"} text={"About"} />
                <BurgerDropdown to={"/shop"} text={"Shop"} />
                <BurgerDropdown to={"/contact"} text={"Contact"} />
                <BurgerDropdown to={"/help"} text={"Help"} />
              </div>
            </div>)}
          <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[40px] h-[40px] hidden lg:block"/>
          <Link to="/" className="hidden text-[1.75rem] font-[700] capitalize lg:block xl:hidden">Rp</Link>
          <Link to="/" className="hidden text-[1.75rem] font-[700] capitalize xl:block">Realpop</Link>
        </div>



        {/* Mid */}
        <div id="mid" className="">
          <Link to="/">
            <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[40px] h-[40px] lg:hidden" />
          </Link>
          <div className="main-nav-container hidden lg:flex lg:gap-x-1">
            <NavLink to="/" className="main-nav ">Home</NavLink>
            <NavLink to="/about" className="main-nav ">About</NavLink>
            <NavLink to="/shop" className="main-nav ">Shop</NavLink>
            <NavLink to="/contact" className="main-nav ">Contact</NavLink>
            <NavLink to="/help" className="main-nav ">Help</NavLink>
          </div>
        </div>



        {/* Right */}
        <div id="right" className=" flex justify-end items-center w-[115px] md:w-[130px] lg:gap-x-[15px] lg:w-[140px] xl:gap-x-[30px] 2xl:w-[160px] ">
          {/* <div className="account flex justify-center items-center gap-x-2">
            <Link to="/login" className="flex justify-center items-center w-[80px] h-[50px] rounded border-[2px] border-deep-violet bg-deep-violet transition-all">Login</Link>
            <Link to="/signup" className="flex justify-center items-center w-[80px] h-[50px] rounded border-[2px] border-deep-violet transition-all">Signup</Link>
          </div> */}
          <NavLink to="/cart" className="user w-[40px] h-[40px] hidden items-center justify-center rounded-[4px] hover:bg-electric-pink transition-all text-xl lg:flex">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <button onClick={ () => toggleUserIconDropdown() } className="user-icon hidden overflow-hidden w-[40px] h-[40px] border-[3px] border-transparent rounded-full hover:border-electric-pink lg:block transition-all ">
            <img src={ Admin_Jam } alt="" className="" />
          </button>
          {isUserIconDropdownActive && (
            <div className=" flex flex-col z-[100] absolute top-[70px] bg-header-black backdrop-blur-xl shadow-lg rounded-xl overflow-hidden">
              <Link to="/profile" className="brightness-50">
                <img src={ Admin_Jam } alt="" className="w-full h-[120px] object-cover " />
              </Link>
              <hr className="border-electric-pink" />
              <div className="flex flex-col gap-y-[6px] md:gap-y-[12px] px-2 py-4 ">
                <UserDropdown to={"/profile"} text={"Profile"} />
                <UserDropdown to={"/cart"} text={"Cart"} />
                <UserDropdown to={"/login"} text={"Login"} />
                <UserDropdown to={"/settings"} text={"Settings"} />
              </div>
            </div>)}
          <button onClick={ () => toggleUserDropdown() } className="user-btn text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:hidden lg:w-[60px] lg:h-[60px]">
            <i className="fa-solid fa-user"></i>
          </button>
          {/* Dropdown for user menu */}
          {isUserDropdownActive && (
            <div className=" z-[100] absolute top-[70px] h-[150px] sm:top-[90px] md:top-[100px] lg:hidden">
              <div className="flex flex-col gap-y-[6px] md:gap-y-[12px] ">
                <UserDropdown to={"/profile"} text={"Profile"} />
                <UserDropdown to={"/cart"} text={"Cart"} />
                <UserDropdown to={"/login"} text={"Login"} />
                <UserDropdown to={"/settings"} text={"Settings"} />
              </div>
            </div>)}
        </div>
      </header>



      {isBurgerDropdownActive && (
        <div className="dropdown-bg"></div>
      )}
      {isUserDropdownActive && (
        <div className="dropdown-bg"></div>
      )}
    </>
  )
}

function BurgerDropdown(props: Props) {
  return (
    <NavLink to={props.to} className="dropdown burger-nav">{props.text}</NavLink>
  )
}
function UserDropdown(props: Props) {
  return (
    <NavLink to={props.to} className="dropdown user-nav">{props.text}</NavLink>
  )
}

export default Header

