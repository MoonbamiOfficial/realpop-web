import React from 'react'

// Assets
import Realpop from '../assets/images/logo/realpop-official-logo.png'

const HomeBackgroundLoading = () => {
  return (
    <>
      <div className=" absolute -z-[100] left-[50%] translate-x-[-50%]  flex justify-center items-center gap-2 animate-pulse transition-all " >
        <img src={ Realpop } alt="" className=" w-[500px] h-full " />
      </div>
    </>
  )
}

export default HomeBackgroundLoading