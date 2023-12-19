import { createContext, useState, useEffect, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

// Types
import { User, UserContextType, UserContextProviderType } from '../types/user'

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderType) => {
  const [ loading, setLoading ] = useState(true)
  const [ userTokens, setUserTokens ] 
    = useState(() => localStorage.getItem('userTokens') ? JSON.parse(localStorage.getItem('userTokens') || '') : null)
  const [ user, setUser ] 
    = useState(() => localStorage.getItem('userTokens') ? jwtDecode(localStorage.getItem('userTokens') || '') : null)

  const navigate = useNavigate()

  // Login
  const loginUser = async (e: Event) => {
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/api/users/token/', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        'username': (document.getElementById("username") as HTMLInputElement).value, 
        'password': (document.getElementById("password") as HTMLInputElement).value})
    })
    let data = await response.json()
    if(response.status === 200) {
      setUserTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('userTokens', JSON.stringify(data))
      navigate('/')
    }
    else alert('Something went wrong!')
  }

  // Logout
  const logoutUser = () => {
    setUserTokens(null)
    setUser(null)
    localStorage.removeItem('userTokens')
    navigate('/')
  }

  // Update user's token
  const updateUserToken = async () => {
    // console.log("Token is updated...")
    let response = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'refresh':userTokens?.refresh})
    })
    let data = await response.json()
    if(response.status === 200) {
      setUserTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('userTokens', JSON.stringify(data))
    }
    else logoutUser()

    if(loading) setLoading(false)
  }

  // Datas to use around Realpop
  const userContextData = {
    userTokens: userTokens,
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {
    if(loading) updateUserToken()

    const lifeTime = 1000 * 60 * 14 // 14mins
    const intervalID = setInterval(() => {
      if(userTokens) updateUserToken()
    }, lifeTime)
    return () => clearInterval(intervalID)
  }, [userTokens, loading])

  return (
    <UserContext.Provider value={ userContextData }>
      { loading ? null : children }
    </UserContext.Provider>
  )
}
