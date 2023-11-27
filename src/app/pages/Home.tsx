import React from 'react'

// Components
import ShopNowBtn from '../../components/ui/ShopNowBtn'

// Styles
import '../../styles/components/gradient.css'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Gradient />
      <section id="home" className="container mx-auto relative top-[400px] h-full lg:top-[350px] 2xl:top-[300px]">
        <div className="ads w-[400px] flex flex-col items-end gap-y-[50px] ml-[40px] sm:w-[500px] sm:ml-[50px] lg:mx-0 lg:ml-[75px] xl:ml-[100px] 2xl:ml-[150px] premium:w-[600px] premium:ml-[200px] ">
          <div className="text relative flex flex-col justify-end gap-y-[8px]">
            <h1 className="title capitalize text-[2.5rem] font-[700] leading-[3rem] tracking-tight sm:text-[3.125rem] sm:leading-[3.75rem] md:text-[4rem] md:leading-[4.8rem] 2xl:text-[4.875rem] 2xl:leading-[5.85rem] premium:text-[6rem] premium:leading-[7.2rem]">saranghae!</h1>
            <p className="w-[400px] leading-[1.4rem] sm:w-[500px] lg:text-[1.25rem] lg:leading-[1.75rem] premium:w-[600px] premium:text-[1.5rem] premium:leading-[2.1rem]">Start collecting your favorite photocards from our currently available girl groups; TWICE, NMIXX, NewJeans, aespa & LE SSERAFIM</p>
          </div>
          <ShopNowBtn />
        </div>
      </section>
    </>
  )
}

const Gradient = (props: Props) => {
  return (
    <div className="gradient fixed bottom-0 h-[70vh] w-screen -z-40 "></div>
  )
}
export default Home