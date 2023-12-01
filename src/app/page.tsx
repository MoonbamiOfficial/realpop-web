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

type Props = {}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About /> } />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
      <Route path="cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}

export default App
