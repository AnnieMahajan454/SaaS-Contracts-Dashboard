import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Topbar(){
  const { logout, username } = useAuth()
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-blue-200 bg-gradient-to-r from-white to-blue-50">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-gray-800">SaaS Contracts</h1>
        <div className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Dashboard</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <div className="font-medium text-gray-800">{username || 'User'}</div>
          <div className="text-xs text-gray-500">{username ? `${username.toLowerCase()}@company.com` : 'user@company.com'}</div>
        </div>
        <button onClick={logout} className="px-3 py-1 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">Logout</button>
      </div>
    </div>
  )
}
