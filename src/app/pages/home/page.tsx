import React, { useCallback, useEffect, useState } from 'react'

// Components
import ShopNowBtn from '../../../components/ui/ShopNowBtn'

type Props = {}

const Home = () => {
  const songTitles = ["Alcohol-Free", "Heart Shaker", "Party O`Clock", "DICE", "Super Shy", "OMG", "Savage", "Spicy", "ANTIFRAGILE", "UNFORGIVEN"]
  const [ songTitle, setSongTitle ] = useState("Loading...")

  const shuffleGirlGroups = useCallback(() => {
    const index = Math.floor(Math.random() * songTitles.length)
    setSongTitle(songTitles[index])
  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffleGirlGroups, 1500)
    return () => clearInterval(intervalID)
  }, [shuffleGirlGroups])

  return (
    <>
      <Gradient />
      <section id="home" className="container mx-auto relative top-[400px] h-full lg:top-[350px] 2xl:top-[300px]">
        <div className="ads w-[400px] flex flex-col items-end gap-y-[50px] ml-[40px] sm:w-[500px] sm:ml-[50px] lg:w-[600px] lg:mx-0 lg:ml-[75px] xl:ml-[100px] 2xl:ml-[150px] premium:w-[700px] premium:ml-[200px] ">
          <div className="text relative flex flex-col justify-end gap-y-[8px]">
            <h1 className="title text-[2.5rem] font-[700] w-[400px] leading-[3rem] tracking-tight sm:w-[500px] sm:text-[3.125rem] sm:leading-[3.75rem] md:text-[4rem] md:leading-[4.8rem] lg:w-[600px] 2xl:text-[4.875rem] 2xl:leading-[5.85rem] premium:w-[700px] premium:text-[6rem] premium:leading-[7.2rem]">{songTitle}</h1>
            <p className="w-[400px] leading-[1.4rem] sm:w-[500px] md:text-[1.15rem] lg:text-[1.25rem] lg:leading-[1.75rem] premium:w-[600px] premium:text-[1.5rem] premium:leading-[2.1rem]">Start collecting your favorite photocards from our currently available girl groups; TWICE, NMIXX, NewJeans, aespa & LE SSERAFIM</p>
          </div>
          <ShopNowBtn />
        </div>
      </section>
    </>
  )
}

const Gradient = () => {
  return (
    <div className="gradient fixed bottom-0 h-[70vh] w-screen -z-40 "></div>
  )
}
export default Home