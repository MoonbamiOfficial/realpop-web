import React, { ReactEventHandler, useState } from 'react'

// Types
import { Background } from '../../types/background'

// Hooks
import { useFetch } from '../../hooks/useFetch'

// Components
import BackgroundLoading from '../../components/BackgroundLoading'

type Props = {
  src?: string | undefined
  onCanPlay?: ReactEventHandler<HTMLVideoElement>
}

const HomeBackground = () => {
  const [ isLoading, setIsLoading ] = useState(true)
  const { data: background } = useFetch(`${process.env.REACT_APP_BACKGROUND_ENDPOINT}`)
  
  return (
    <>
      {isLoading && <BackgroundLoading />}
      {background.map((bg: Background) => <Video key={ bg.id } src={ bg.video } onCanPlay={() => setIsLoading(false)} />)}
    </>
  )
}

const Video = (props: Props) => {
  return (
    <video src={ props.src } loop muted autoPlay onCanPlay={ props.onCanPlay } className="absolute top-0 -z-[100] w-full h-full object-cover "></video>
  )
}

export default HomeBackground