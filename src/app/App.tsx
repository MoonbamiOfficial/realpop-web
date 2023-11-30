import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from '../components/header/Header'

// Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Help from './pages/help/Help'
import Cart from './pages/cart/Cart'
import Profile from './pages/profile/Profile'

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
