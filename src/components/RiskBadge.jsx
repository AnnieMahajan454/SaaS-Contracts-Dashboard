import React from 'react'
export default function RiskBadge({ risk }) {
  const classes = risk === 'High' ? 'bg-red-100 text-red-700' : risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
  return <span className={`px-2 py-1 rounded text-xs ${classes}`}>{risk}</span>
}
