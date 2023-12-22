import React from 'react'
import { Outlet } from 'react-router-dom'

// Context
import { UserContextProvider } from '../context/UserContext'

// Components
import Header from '../components/Header'
import HomeBackground from '../components/bg/HomeBackground'

const Layout = () => {
  return (
    <>
      <UserContextProvider>
        <Header />
        <HomeBackground />
        <main>
          <Outlet />
        </main>
      </UserContextProvider>
    </>
  )
}

export default Layout