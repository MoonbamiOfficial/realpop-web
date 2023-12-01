import { Outlet } from 'react-router-dom'

// Components
import Header from '../components/Header'

// Assets
import Girl_Groups_Video from '../assets/videos/bgvideo.mp4'

type Props = {}

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <BgVideo />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const BgVideo = () => {
  return (
    <video src={ Girl_Groups_Video } loop muted autoPlay className="absolute top-0 -z-[100] w-full h-full object-cover "></video>
  )
}

export default RootLayout