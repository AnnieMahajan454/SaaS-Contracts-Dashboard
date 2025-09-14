import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar(){
  const { username } = useAuth()
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Contracts', icon: '📄' },
    { path: '/insights', label: 'Insights', icon: '📊' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-blue-200 hidden md:block">
      <div className="p-4 border-b border-blue-200 bg-white/50">
        <div className="font-bold text-xl text-gray-800">{username || 'User'}</div>
        <div className="text-xs text-gray-600">Legal Ops</div>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`block px-3 py-2 rounded-lg transition-colors ${
              location.pathname === item.path 
                ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
