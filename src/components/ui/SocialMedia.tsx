import React from 'react'

type Props = {
  id?: string
  src?: string | undefined
  alt?: string
  className?: string
}

const SocialMedia = (props: Props) => {
  return (
    <button type="submit" id={props.id} className={`${props.className} w-[100px] h-[60px] rounded-[32px] flex justify-center items-center xl:w-[150px] `} >
      <img src={props.src} alt={props.alt} className="w-[40px]" />
    </button>
  )
}

export default SocialMedia