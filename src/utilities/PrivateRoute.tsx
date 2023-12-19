import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// Contexts
import { UserContext } from '../context/UserContext'

const PrivateRoute = () => {
  const {user} = useContext(UserContext)

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute