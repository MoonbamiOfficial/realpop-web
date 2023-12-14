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
    <div className="photocard cursor-pointer overflow-hidden w-[150px] h-auto flex flex-col items-center gap-y-[10px] pb-2 bg-black rounded-sm hover:-translate-y-1 hover:shadow-sm hover:shadow-white transition-all">
      <img src={ props.src } alt={ props.alt } className="photocard-image w-[150px] h-[150px] object-cover" />
      <div className="photocard-details w-[150px] flex justify-between items-start px-4">
        <div className="right flex flex-col gap-y-[10px]">
          <div className="name-theme h-[45px]">
            <p className="name font-[700] w-[80px] truncate">{props.name}</p>
            <p className="theme text-[12px] font-[300] w-[80px] truncate">{props.theme}</p>
          </div>
          <p className="price text-electric-pink text-[12px]">
            <i className="fa-solid fa-peso-sign"></i> <span className="actual-price text-base">{props.price.toString()}</span>
          </p>
        </div>
        <button >
          {props.isLiked ? (
            <div className="hearted text-electric-pink">
              <i className="fa-solid fa-heart"></i>
            </div>
          ) : (
            <div className="heart ">
              <i className="fa-regular fa-heart"></i>
            </div>
          )}
        </button>
      </div>
  </div>

  )
}

export default Photocard