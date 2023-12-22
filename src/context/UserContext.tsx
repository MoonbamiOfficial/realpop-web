import { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

// Types
import { User, UserContextType, UserContextProviderType } from '../types/user'

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderType) => {
  const [ loading, setLoading ] = useState(true)
  const [ userTokens, setUserTokens ] 
    = useState(() => getCookie('userTokens') ? JSON.parse(getCookie('userTokens') || '') : null)
  const [ user, setUser ] 
    = useState(() => getCookie('userTokens') ? jwtDecode(getCookie('userTokens') || '') : null)

  const navigate = useNavigate()

  // Sign-Up
  const signupUser = async (e: Event) => {

  }

  // Login
  const loginUser = async (e: Event) => {
    e.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_TOKEN_ENDPOINT}`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        'username': (document.getElementById("username") as HTMLInputElement).value, 
        'password': (document.getElementById("password") as HTMLInputElement).value})
    })
    const data = await response.json()
    if(response.status === 200) {
      setUserTokens(data)
      setUser(jwtDecode(data.access))
      setCookie('userTokens', JSON.stringify(data))
      navigate('/')
    }
    else alert('Something went wrong!')
  }

  // Logout
  const logoutUser = () => {
    setUserTokens(null)
    setUser(null)
    removeCookie('userTokens')
    navigate('/')
  }

  // Update user's token
  const updateUserToken = async () => {
    const response = await fetch(`${process.env.REACT_APP_REFRESH_TOKEN_ENDPOINT}`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'refresh': userTokens?.refresh})
    })
    const data = await response.json()
    if(response.status === 200) {
      setUserTokens(data)
      setUser(jwtDecode(data.access))
      setCookie('userTokens', JSON.stringify(data))
    }
    else logoutUser()

  }

  // Datas to use around Realpop
  const userContextData = {
    userTokens: userTokens,
    user: user,
    setUserTokens: setUserTokens,
    setUser: setUser,
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {
    const lifeTime = 1000 * 60 * 14 // 14mins
    const intervalID = setInterval(() => {
      if(userTokens) updateUserToken()
    }, lifeTime)
    return () => clearInterval(intervalID)
  }, [userTokens, loading])

  return (
    <UserContext.Provider value={ userContextData }>
      { children }
    </UserContext.Provider>
  )
}
