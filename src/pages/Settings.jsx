import React, { useState } from 'react'

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [theme, setTheme] = useState('light')

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Settings</h1>
        <p className="text-gray-600">Manage your account preferences and application settings.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔔 Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Email Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🎨 Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Theme</label>
              <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">💾 Data Management</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Backup Settings
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  )
}
