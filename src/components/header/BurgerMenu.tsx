import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const BurgerMenu = (props: Props) => {
  return (
    <div className="dropdown z-[100] flex items-start absolute top-[60px]  h-[150px] sm:top-[80px] lg:hidden ">
      <div className="flex flex-col gap-y-[6px] ">
        <NavLink to="" className="burger-nav ">Home</NavLink>
        <NavLink to="about" className="burger-nav ">About</NavLink>
        <NavLink to="shop" className="burger-nav ">Shop</NavLink>
        <NavLink to="contact" className="burger-nav ">Contact</NavLink>
        <NavLink to="help" className="burger-nav ">Help</NavLink>
      </div>
    </div>
  )
}

export default BurgerMenu