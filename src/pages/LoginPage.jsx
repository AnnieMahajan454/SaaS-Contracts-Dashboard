import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = useAuth()
  const nav = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    const res = auth.login(username, password)
    if(!res.ok) setError(res.error || 'Invalid')
    else nav('/')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
        <label className="block mb-2 text-sm">Username</label>
        <input value={username} onChange={e=>setUsername(e.target.value)} className="w-full px-3 py-2 border rounded mb-3" />
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 border rounded mb-4" />
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
          <div className="text-sm text-gray-500">use password <strong>test123</strong></div>
        </div>
      </form>
    </div>
  )
}
