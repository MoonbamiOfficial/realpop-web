import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Components
import BurgerMenu from './BurgerMenu'
import UserMenu from './UserMenu'

// Styles
import '../../styles/components/header.css'

// Assets
import Realpop_Logo from '../../assets/images/icon/realpop512x.png'
import Admin_Jam from '../../assets/images/user/hannionly.jpg'

type Props = {}

const Header = () => {
  // Handle burger menu
  const [ isDropdownActive, setIsDropdownActive ] = useState(false)
  // Handle user menu
  const [ isUserDropdownActive, setIsUserDropdownActive ] = useState(false)

  const toggleBurgerDropdown = () => {
    setIsDropdownActive(!isDropdownActive)
    setIsUserDropdownActive(false)
  }
  const toggleUserDropdown = () => {
    setIsUserDropdownActive(!isUserDropdownActive)
    setIsDropdownActive(false)
  }

  return (
    <>
      {/* Left */}
      <div className="header-bg absolute z-[100] bg-opaque-black w-full h-[60px] sm:h-[80px] "></div>
      <header id="" className="container mx-auto relative top-0 z-[100] w-full h-[60px] flex justify-between items-center px-[15px] sm:px-[25px] sm:h-[80px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
        <div id="left" className=" flex items-center gap-x-[8px] w-[115px] md:w-[130px] lg:w-[140px] lg:gap-x-[32px] 2xl:w-[160px]">
          <button onClick={toggleBurgerDropdown} className="burger-menu w-[50px] h-[50px] text-[24px] sm:text-[32px] md:text-[36px] lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          {/* Dropdown for burger menu */}
          {isDropdownActive && (<BurgerMenu />)}
          <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[60px] h-[60px] hidden lg:block" />
          <Link to="" className="hidden text-[1.5rem] font-[700] capitalize lg:block xl:hidden">Rp</Link>
          <Link to="" className="hidden text-[2rem] font-[700] capitalize xl:block">Realpop</Link>
        </div>
        {/* Mid */}
        <div id="mid" className="">
          <Link to="">
            <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:hidden" />
          </Link>
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
          <NavLink to="cart" className="user-cart hidden items-center justify-center rounded-[4px] hover:bg-electric-pink transition-all lg:flex lg:text-[24px]">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <button onClick={toggleUserDropdown} className="user-btn lg:w-[60px] lg:h-[60px]">
            <div className="lg:hidden">
              <i className="fa-solid fa-user"></i>
            </div>
            <Link to="profile" className="user-icon hidden overflow-hidden w-[60px] h-[60px] border-[3px] border-white rounded-full hover:border-electric-pink transition-all lg:block ">
              <img src={ Admin_Jam } alt="" />
            </Link>
          </button>
          {/* Dropdown for user menu */}
          {isUserDropdownActive && (<UserMenu />)}
        </div>
      </header>
      {isDropdownActive && (
        <div className="dropdown-bg z-40 absolute top-[60px] w-full h-[180px] bg-opaque-black border-electric-pink border-b-[5px] sm:top-[80px] lg:hidden"></div>
      )}
      {isUserDropdownActive && (
        <div className="dropdown-bg z-40 absolute top-[60px] w-full h-[180px] bg-opaque-black border-electric-pink border-b-[5px] sm:top-[80px] lg:hidden"></div>
      )}
    </>
  )
}

export default Header

