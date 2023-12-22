export type User = {
  id?: number
  username?: string
  password?: string
  confirmPassword?: string
}

export type UserContextType = {
  userTokens?: any
  user?: any
  setUserTokens?: any
  setUser?: any
  signupUser?: any
  loginUser?: any
  logoutUser?: any
}

export type UserContextProviderType = {
  children?: React.ReactNode
}