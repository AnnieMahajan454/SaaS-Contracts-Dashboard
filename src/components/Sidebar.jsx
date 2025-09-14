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
    <aside className="w-64 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-r border-blue-200 dark:border-gray-700 hidden md:block transition-colors">
      <div className="p-4 border-b border-blue-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
        <div className="font-bold text-xl text-gray-800 dark:text-gray-200">{username || 'User'}</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">Legal Ops</div>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`block px-3 py-2 rounded-lg transition-colors ${
              location.pathname === item.path 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500 dark:border-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
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
