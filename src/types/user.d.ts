export type User = {
  id?: number
  username?: string
  password?: string
  confirmPassword?: string
}

export type UserContextType = {
  userTokens?: any
  user?: any
  loginUser?: any
  logoutUser?: any
}

export type UserContextProviderType = {
  children?: React.ReactNode
}