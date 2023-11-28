import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

// Assets
import Girl_Groups_Video from '../assets/videos/bgvideo.mp4'

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <BgVideo />
      <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About /> } />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

const BgVideo = (props: Props) => {
  return (
    <video src={ Girl_Groups_Video } loop muted autoPlay className="absolute top-0 -z-[100] w-full h-full object-cover "></video>
  )
}

export default App
