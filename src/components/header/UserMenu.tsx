import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const UserMenu = (props: Props) => {
  return (
    <div className="dropdown  z-[100] flex items-start absolute top-[60px]  h-[150px] sm:top-[80px] lg:hidden ">
      <div className="flex flex-col gap-y-[6px] ">
        <NavLink to="profile" className="user-nav ">Profile</NavLink>
        <NavLink to="cart" className="user-nav ">Cart</NavLink>
      </div>
    </div>
  )
}

export default UserMenu