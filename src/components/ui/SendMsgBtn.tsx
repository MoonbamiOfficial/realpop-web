import React from 'react'

type Props = {}

const SendMessage = (props: Props) => {
  return (
    <button className="w-[200px] h-[60px] flex justify-center items-center text-[1.25rem] font-[500] uppercase bg-electric-pink rounded-[80px] outline-0 border-0 hover:drop-shadow-send-msg-btn transition-all">Send</button>
  )
}

export default SendMessage