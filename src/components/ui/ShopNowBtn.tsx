import React from 'react'

type Props = {}

const ShopNowBtn = (props: Props) => {
  return (
    <button 
      id="shop-now-btn" 
      className="w-[18.75rem] h-[5rem] text-center text-[1.25rem] font-[500] uppercase bg-electric-pink rounded-[80px] outline-0 border-0 hover:drop-shadow-shop-now-btn transition-all"
        >Shop Now
      </button>
  )
}

export default ShopNowBtn