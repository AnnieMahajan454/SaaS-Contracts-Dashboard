import React from 'react'
import RiskBadge from './RiskBadge'

export default function ContractsTable({ items, onRowClick }) {
  return (
    <div className="overflow-x-auto bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg shadow-sm">
      <table className="min-w-full text-left">
        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <tr>
            <th className="px-4 py-3 text-gray-700 font-semibold">Contract</th>
            <th className="px-4 py-3 text-gray-700 font-semibold">Parties</th>
            <th className="px-4 py-3 text-gray-700 font-semibold">Expiry</th>
            <th className="px-4 py-3 text-gray-700 font-semibold">Status</th>
            <th className="px-4 py-3 text-gray-700 font-semibold">Risk</th>
          </tr>
        </thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id} className="border-t border-blue-100 hover:bg-blue-50/50 cursor-pointer transition-colors" onClick={() => onRowClick(it.id)}>
              <td className="px-4 py-3 text-gray-800 font-medium">{it.name}</td>
              <td className="px-4 py-3 text-gray-600">{it.parties}</td>
              <td className="px-4 py-3 text-gray-600">{new Date(it.expiry).toLocaleDateString()}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  it.status === 'Active' ? 'bg-green-100 text-green-700' :
                  it.status === 'Expired' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {it.status}
                </span>
              </td>
              <td className="px-4 py-3"><RiskBadge risk={it.risk} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
