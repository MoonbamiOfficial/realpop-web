import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

// Layouts
import Layout from './layout'

// Pages
import Home from './pages/home/page'
import About from './pages/about/page'
import Shop from './pages/shop/page'
import Contact from './pages/contact/page'
import Help from './pages/help/page'
import Cart from './pages/cart/page'
import Profile from './pages/profile/page'

// Sub-Pages
import Twice from './pages/shop/twice/page'
import Nmixx from './pages/shop/nmixx/page'
import NewJeans from './pages/shop/new-jeans/page'
import Aespa from './pages/shop/aespa/page'
import LeSserafim from './pages/shop/le-sserafim/page'

// Error Pages
import NotFound from './pages/not-found/page'

type Props = {}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About /> } />
      <Route path="shop" element={<Shop />} >
        <Route path="TWICE" element={<Twice /> } />
        <Route path="NMIXX" element={<Nmixx /> } />
        <Route path="NewJeans" element={<NewJeans /> } />
        <Route path="aespa" element={<Aespa /> } />
        <Route path="LESSERAFIM" element={<LeSserafim /> } />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
      <Route path="cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}

export default App
