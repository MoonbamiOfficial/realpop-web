import React from 'react'

// Assets
import Realpop from '../assets/images/icon/realpop-official-logo.png'

type Props = {}

const HomeBackgroundLoading = () => {
  return (
    <>
      <div className=" absolute left-[50%] translate-x-[-50%]  flex justify-center items-center gap-2 animate-pulse transition-all " >
        <img src={ Realpop } alt="" className=" w-[500px] h-full " />
      </div>
    </>
  )
}

export default HomeBackgroundLoading