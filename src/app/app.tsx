import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

// Layouts
import Layout from './layout'

// Utilities
import PrivateRoute from '../utilities/PrivateRoute'

// Pages
import Home from './pages/home/page'
import About from './pages/about/page'
import Shop from './pages/shop/page'
import Contact from './pages/contact/page'
import Help from './pages/help/page'
import Cart from './pages/cart/page'
import Profile from './pages/profile/page'
import Login from './pages/login/page'
import Signup from './pages/signup/page'

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
      <Route path="/" element={<PrivateRoute />}>
        {/* Routes that needs user authentication */}
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />

      </Route>
      {/* Default routes */}
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
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

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
