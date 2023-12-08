import React from 'react'

type Props = {
  src?: string | undefined
  alt?: string | undefined
  name: string
  theme: string
  price: Number
  isLiked?: Boolean
}

const Photocard = (props: Props) => {
  return (
    <div className="photocard cursor-pointer overflow-hidden w-[150px] h-auto flex flex-col items-center gap-y-[10px] pb-2 bg-black hover:-translate-y-1 hover:shadow-md hover:shadow-electric-pink rounded-md transition-all">
    <img src={ props.src } alt={ props.alt } className="photocard-image w-[150px] h-[150px] object-cover" />
    <div className="photocard-details w-[150px] flex justify-between px-4">
      <div className="right flex flex-col gap-y-[10px]">
        <div className="name-theme">
          <p className="name font-[700]">{props.name}</p>
          <p className="theme text-[12px] font-[300]">{props.theme}</p>
        </div>
        <p className="price text-electric-pink text-[12px]">
          <i className="fa-solid fa-peso-sign"></i> <span className="actual-price text-base">{props.price.toString()}</span>
        </p>
      </div>
      <div className="heart hidden">
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className="hearted text-electric-pink">
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  </div>

  )
}

export default Photocard