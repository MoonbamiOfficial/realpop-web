import React, { useState, useEffect, useRef } from 'react'
import { Link, Outlet, To } from 'react-router-dom'

import Hanni from '../../../assets/images/items/newjeans/hanni.jpg'

// Components
import Background from '../../../components/bg/Background'
import Footer from '../../../components/Footer'
import Photocard from '../../../components/ui/Photocard'

type Props = {
  to: To
  text: string
}

const Shop = () => {
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
    <>
      <Background />
      <nav className="sticky top-[60px] w-full z-[100] flex justify-center flex-wrap mt-[350px] justify-rounded py-4 bg-header-black sm:top-[80px]">
        <ShopLink to={ "TWICE" } text={ "TWICE" } />
        <ShopLink to={ "NMIXX" } text={ "NMIXX" } />
        <ShopLink to={ "NewJeans" } text={ "NewJeans" } />
        <ShopLink to={ "aespa" } text={ "aespa" } />
        <ShopLink to={ "LESSERAFIM" } text={ "LE SSERAFIM" } />
        <div ref={ moreDropdown } className="more-dropdown-container relative">
          <button onClick={ toggleMoreDropdown } className="w-[100px] flex justify-center gap-2 hover:text-electric-pink transition-all">
            <p>More</p>
            <div className="caret-down"><i className="fa-solid fa-caret-down"></i></div>
          </button>
          <div className={`${isMoreDropdownActive? 'moreDropdownActive' : 'moreDropdownInactive'} more-dropdown absolute top-[70px] right-[-15px] rounded-md bg-black  py-4 px-4`}>
            <ShopLink to={ "/shop" } text={ "back" } />
          </div>
        </div>
      </nav>
      <section id="shop" className="container mx-auto flex flex-col items-center  pb-[150px] relative w-full h-full">
        <section className="items px-[80px] ">
          <Outlet />
          <section className="new">
            <h1 className="capitalize text-[2.5rem] font-[900] mb-4 mt-[50px]">new</h1>
            <hr />
            <div className="new inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
            </div>
          </section>
          <section className="in-demands">
            <h1 className="capitalize text-[2.5rem] font-[900] mb-4 mt-[50px]">in demands</h1>
            <hr />
            <div className="new inline-grid grid-cols-2 gap-[10px] mt-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
              <Photocard src={ Hanni } name={ "Hanni" } theme={ "GET UP" } price={ 100 } />
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  )
}

function ShopLink(props: Props) {
  return (
    <Link to={ props.to } className="shop-link w-[100px] text-center capitalize ">{ props.text }</Link>
  )
}

export default Shop