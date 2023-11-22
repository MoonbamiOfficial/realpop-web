import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'

// Pages
import Home from './pages/Home'

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
