import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Styles
import '../styles/components/header.css'

// Assets
import Realpop_Logo from '../assets/images/icon/realpop512x.png'

type Props = {}

const Header = () => {
  // Handle burger menu
  const [ isDropdownActive, setIsDropdownActive ] = useState(false)
  // Handle user menu
  const [ isUserDropdownActive, setIsUserDropdownActive ] = useState(false)

  // Handle header bg when scrolling
  const [ headerBg, setHeaderBg ] = useState("header-show");
  const scrollEvent = () => {
    if(window.scrollY < 50) return setHeaderBg("header-show");
    else if(window.scrollY > 50) return setHeaderBg("header-hide");
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <>



      {/* Left */}
      <div id={ headerBg } className="header-bg absolute top-0 z-50 bg-opaque-black w-screen h-[60px] sm:h-[80px] "></div>
      <header id="" className="container mx-auto relative top-0 z-50 w-full h-[60px] flex justify-between items-center px-[15px] sm:px-[25px] sm:h-[80px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
        <div id="left" className=" flex items-center gap-x-[8px] w-[115px] md:w-[130px] lg:w-[140px] lg:gap-x-[32px] 2xl:w-[160px]">
          <button onClick={ e => {
            setIsDropdownActive(!isDropdownActive)
            if(isUserDropdownActive) setIsUserDropdownActive(!isUserDropdownActive)
            else if(!isUserDropdownActive) setIsUserDropdownActive(isUserDropdownActive)
            else setIsUserDropdownActive(false)
          }} className="burger-menu w-[50px] h-[50px] text-[24px] sm:text-[32px] md:text-[36px] lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          {/* Dropdown for burger menu */}
          {isDropdownActive && (
            <>
              <div className="dropdown-bg absolute top-[60px] left-0 w-screen h-[180px] bg-opaque-black border-electric-pink border-b-[5px] sm:top-[80px] lg:hidden"></div>
              <div className="dropdown z-50 flex items-start absolute top-[60px]  h-[150px] sm:top-[80px] lg:hidden ">
                <div className="flex flex-col gap-y-[6px] ">
                  <NavLink to="" className="burger-nav ">Home</NavLink>
                  <NavLink to="about" className="burger-nav ">About</NavLink>
                  <NavLink to="shop" className="burger-nav ">Shop</NavLink>
                  <NavLink to="contact" className="burger-nav ">Contact</NavLink>
                  <NavLink to="help" className="burger-nav ">Help</NavLink>
                </div>
            </div>
          </>
        )}
          <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[60px] h-[60px] hidden lg:block cursor-pointer" />
          <Link to="" className="hidden text-[1.5rem] font-[700] capitalize lg:block xl:hidden">Rp</Link>
          <Link to="" className="hidden text-[2rem] font-[700] capitalize xl:block">Realpop</Link>
        </div>



        {/* Mid */}
        <div id="mid" className="">
          <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:hidden cursor-pointer" />
          <div className="main-nav-container hidden lg:flex lg:gap-x-1">
            <NavLink to="" className="main-nav ">Home</NavLink>
            <NavLink to="about" className="main-nav ">About</NavLink>
            <NavLink to="shop" className="main-nav ">Shop</NavLink>
            <NavLink to="contact" className="main-nav ">Contact</NavLink>
            <NavLink to="help" className="main-nav ">Help</NavLink>
          </div>
        </div>



        {/* Right */}
        <div id="right" className=" flex justify-end items-center gap-x-[15px] w-[115px] md:w-[130px] md:gap-x-[30px] lg:w-[140px] 2xl:w-[160px] 2xl:gap-x-[50px]">
          <button className="user-cart hidden lg:block lg:text-[24px]">
            <Link to="" className="">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </button>
          <button onClick={ e => {
            setIsUserDropdownActive(!isUserDropdownActive)
            if(isDropdownActive) setIsDropdownActive(!isDropdownActive)
            else if(!isDropdownActive) setIsDropdownActive(isDropdownActive)
            else setIsDropdownActive(false)
            }} className="user-btn lg:w-[60px] lg:h-[60px]">
            <div className="lg:hidden">
              <i className="fa-solid fa-user"></i>
            </div>
            <Link to="" className="user-icon hidden w-[60px] h-[60px] border-[3px] border-white rounded-full lg:block "></Link>
          </button>
          {/* Dropdown for user menu */}
          {isUserDropdownActive && (
            <>
              <div className="dropdown-bg absolute top-[60px] left-0 w-screen h-[180px] bg-opaque-black border-electric-pink border-b-[5px] sm:top-[80px] lg:hidden"></div>
              <div className="dropdown  z-50 flex items-start absolute top-[60px]  h-[150px] sm:top-[80px] lg:hidden ">
                <div className="flex flex-col gap-y-[6px] ">
                  <NavLink to="profile" className="user-nav ">Profile</NavLink>
                  <NavLink to="cart" className="user-nav ">Cart</NavLink>
                </div>
            </div>
          </>
          )}
        </div>
      </header>



    </>
  )
}

export default Header

