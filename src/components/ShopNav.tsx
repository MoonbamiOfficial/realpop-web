import React, { useEffect, useRef, useState } from 'react'
import { Link, To } from 'react-router-dom'

type Props = {
  to: To
  text: string
}

const ShopNav = () => {
  const [ isMoreDropdownActive, setIsMoreDropdownActive ] = useState(false)

  let moreDropdown = useRef<HTMLDivElement | null>(null)

  const toggleMoreDropdown = () => {
    setIsMoreDropdownActive(!isMoreDropdownActive)
  }

  useEffect(() => {
    let handleMoreDropdown = ({ target } : Event ) => {
      if(!moreDropdown.current?.contains(target as Node)) {
        setIsMoreDropdownActive(false)
      }
    }
    document.addEventListener('mousedown', handleMoreDropdown)
    return () => {
      document.removeEventListener('mousedown', handleMoreDropdown)
    }
  }, [])

  return (
    <div className="shop-header sticky top-[60px] z-[80] w-full flex justify-evenly items-center flex-wrap mt-[350px] justify-rounded py-4 px-[40px] gap-y-[16px] bg-black ">
      <nav className="left flex flex-wrap gap-y-[8px] ">
        <ShopLink to={ "TWICE" } text={ "TWICE" } />
        <ShopLink to={ "NMIXX" } text={ "NMIXX" } />
        <ShopLink to={ "NewJeans" } text={ "NewJeans" } />
        <ShopLink to={ "aespa" } text={ "aespa" } />
        <ShopLink to={ "LESSERAFIM" } text={ "LE SSERAFIM" } />
      </nav>
      <div className="right flex items-center ml-8">
        <div className="search pl-4 flex items-center gap-x-2 rounded-md border-2 border-white focus-within:border-electric-pink transition-all">
          <input type="search" name="" id="" placeholder="Search" className=" w-[200px] h-[40px] p-0 bg-transparent outline-0 sm:w-[300px]" />
          <button type="submit" className="w-[40px] h-[40px] cursor-pointer active:bg-electric-pink ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
          <div ref={ moreDropdown } className="more-dropdown-container text-sm relative">
            <button onClick={ toggleMoreDropdown } className="w-[100px] flex justify-center gap-2 hover:text-electric-pink transition-all">
              <p>More</p>
              <div className="caret-down"><i className="fa-solid fa-caret-down"></i></div>
            </button>
            <div className={`${isMoreDropdownActive? 'moreDropdownActive' : 'moreDropdownInactive'} more-dropdown absolute top-[70px] right-[-15px] rounded-md bg-black  py-4 px-4`}>
              <ShopLink to={ "/shop" } text={ "back" } />
            </div>
          </div>
      </div>
    </div>  )
}

function ShopLink(props: Props) {
  return (
    <Link to={ props.to } className="shop-link text-sm w-[100px] text-center capitalize ">{ props.text }</Link>
  )
}

export default ShopNav