import React from 'react'

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📈 Contract Reports</h1>
        <p className="text-gray-600">Generate and view detailed reports for your contract portfolio.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Portfolio Summary</h3>
          <p className="text-sm text-gray-600 mb-4">Complete overview of all contracts</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Risk Assessment</h3>
          <p className="text-sm text-gray-600 mb-4">Detailed risk analysis report</p>
          <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📅 Expiry Report</h3>
          <p className="text-sm text-gray-600 mb-4">Contracts expiring soon</p>
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}
