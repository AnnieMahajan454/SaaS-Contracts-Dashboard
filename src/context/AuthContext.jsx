import React, { createContext, useContext, useState, useMemo } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('mock_jwt') || null)
  const [username, setUsername] = useState(() => localStorage.getItem('username') || null)
  const login = (username, password) => {
    if (password === 'test123') {
      const mock = 'jwt-' + btoa(username + ':' + Date.now())
      localStorage.setItem('mock_jwt', mock)
      localStorage.setItem('username', username)
      setToken(mock)
      setUsername(username)
      return { ok: true }
    }
    return { ok: false, error: 'Invalid password' }
  }
  const logout = () => {
    localStorage.removeItem('mock_jwt')
    localStorage.removeItem('username')
    setToken(null)
    setUsername(null)
  }
  const value = useMemo(() => ({ token, username, login, logout }), [token, username])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){ return useContext(AuthContext) }
