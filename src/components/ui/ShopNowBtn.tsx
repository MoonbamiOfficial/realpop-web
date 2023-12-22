import React from 'react'
import { Link } from 'react-router-dom'

const ShopNowBtn = () => {
  return (
    <Link to="/shop" id="shop-now-btn" className="w-[300px] h-[80px] flex justify-center items-center text-[1.25rem] font-[500] uppercase bg-electric-pink rounded-[80px] outline-0 border-0 hover:drop-shadow-shop-now-btn transition-all">Shop Now</Link>
  )
}

export default ShopNowBtn