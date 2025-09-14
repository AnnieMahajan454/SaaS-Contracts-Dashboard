import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ContractDetail from './pages/ContractDetail'
import Insights from './pages/Insights'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function AppShell({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="md:flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Topbar />
          <main className="p-4 bg-white/30 backdrop-blur-sm">{children}</main>
        </div>
      </div>
    </div>
  )
}

function PrivateRoute({ children }){
  const { token } = useAuth()
  if(!token) return <Navigate to="/login" />
  return children
}

export default function App(){
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><AppShell><Dashboard /></AppShell></PrivateRoute>} />
        <Route path="/contracts/:id" element={<PrivateRoute><AppShell><ContractDetail /></AppShell></PrivateRoute>} />
        <Route path="/insights" element={<PrivateRoute><AppShell><Insights /></AppShell></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><AppShell><Reports /></AppShell></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><AppShell><Settings /></AppShell></PrivateRoute>} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </AuthProvider>
  )
}
