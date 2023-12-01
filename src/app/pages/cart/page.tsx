import React from 'react'

// Components
import Background from '../../../components/bg/Background'
import Footer from '../../../components/Footer'

type Props = {}

const Cart = (props: Props) => {
  return (
    <>
      <Background />
      <section id="cart" className="container mx-auto  mt-[350px] pt-[100px] pb-[500px] h-full relative text-center">
        <h1 className="text-[4rem] font-[700] capitalize">cart coming soon...</h1>
      </section>
      <Footer />
    </>
  )
}

export default Cart