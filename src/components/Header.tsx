import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Styles
import '../styles/components/header.css'

// Assets
import Realpop_Logo from '../assets/images/icon/realpop512x.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <div className="header-bg fixed top-0 bg-opaque-black w-screen h-[60px] sm:h-[80px] "></div>
      <header id="" className="container mx-auto relative z-50 w-full h-[60px] p-[15px] flex justify-between items-center sm:px-[25px] sm:h-[80px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
        <div className="brand-container flex items-center gap-x-[8px] w-[140px]">
          <button className="w-[50px] h-[50px] text-[24px] sm:text-[32px] md:text-[36px] lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[60px] h-[60px] hidden lg:block cursor-pointer" />
          <h1 className="hidden text-[2rem] font-[700] capitalize xl:block">Realpop</h1>
        </div>
        <img src={ Realpop_Logo } alt="Realpop Logo" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:hidden cursor-pointer" />
        <div className="main-nav-container hidden lg:flex lg:gap-x-1">
          <NavLink to="" className="main-nav ">Home</NavLink>
          <NavLink to="" className="main-nav ">About</NavLink>
          <NavLink to="" className="main-nav ">Shop</NavLink>
          <NavLink to="" className="main-nav ">Contact</NavLink>
          <NavLink to="" className="main-nav ">Help</NavLink>
        </div>
        <div className="user-nav-container flex items-center gap-x-[15px] md:gap-x-[30px] 2xl:gap-x-[50px]">
          <button className="user-cart lg:text-[24px]">
            <Link to="" className="">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </button>
          <button className="user-icon lg:w-[60px] lg:h-[60px]">
            <Link to="" className="lg:hidden">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="" className="hidden w-[60px] h-[60px] border-[3px] border-white rounded-full lg:block "></Link>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header