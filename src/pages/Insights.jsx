import React from 'react'

export default function Insights() {
  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📊 Contract Insights</h1>
        <p className="text-gray-600">Analytics and insights for your contract portfolio will be displayed here.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Risk Distribution</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">High Risk</span>
              <span className="text-sm font-medium text-red-600">33%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Medium Risk</span>
              <span className="text-sm font-medium text-yellow-600">33%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Low Risk</span>
              <span className="text-sm font-medium text-green-600">33%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Expiry Timeline</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Expiring Soon</span>
              <span className="text-sm font-medium text-orange-600">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">This Quarter</span>
              <span className="text-sm font-medium text-blue-600">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Next Year</span>
              <span className="text-sm font-medium text-green-600">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
