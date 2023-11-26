import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About /> } />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
