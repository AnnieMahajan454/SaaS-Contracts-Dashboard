import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchContracts } from '../hooks/useContracts'
import Loading from '../components/Loading'
import Empty from '../components/Empty'
import ErrorBox from '../components/ErrorBox'
import ContractsTable from '../components/ContractsTable'
import UploadModal from '../components/UploadModal'

export default function Dashboard(){
  const [contracts, setContracts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [riskFilter, setRiskFilter] = useState('')
  const [page, setPage] = useState(1)
  const [uploadOpen, setUploadOpen] = useState(false)
  const nav = useNavigate()

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    fetchContracts().then(data=>{ if(!mounted) return; setContracts(data); setLoading(false)}).catch(e=>{ if(!mounted) return; setError('Failed to load'); setLoading(false) })
    return ()=> mounted = false
  },[])

  const filtered = contracts.filter(c=>{
    const q = query.toLowerCase()
    if(q && !(c.name.toLowerCase().includes(q) || c.parties.toLowerCase().includes(q))) return false
    if(statusFilter && c.status !== statusFilter) return false
    if(riskFilter && c.risk !== riskFilter) return false
    return true
  })

  const perPage = 10
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  useEffect(()=>{ if(page>totalPages) setPage(1) }, [totalPages])

  const pageItems = filtered.slice((page-1)*perPage, page*perPage)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <input 
            value={query} 
            onChange={e=>setQuery(e.target.value)} 
            placeholder="Search by name or parties" 
            className="px-4 py-2 border border-blue-200 rounded-lg w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm" 
          />
          <select 
            value={statusFilter} 
            onChange={e=>setStatusFilter(e.target.value)} 
            className="px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm"
          >
            <option value=''>All Status</option>
            <option>Active</option>
            <option>Expired</option>
            <option>Renewal Due</option>
          </select>
          <select 
            value={riskFilter} 
            onChange={e=>setRiskFilter(e.target.value)} 
            className="px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm"
          >
            <option value=''>All Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setUploadOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm">📤 Upload</button>
          <button onClick={()=>nav('/contracts/c1')} className="px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors bg-white/70 backdrop-blur-sm">📄 Open sample</button>
        </div>
      </div>

      {loading ? <Loading /> : error ? <ErrorBox message={error} /> : (
        <>
          {contracts.length === 0 ? <Empty message="No contracts yet" /> : (
            <>
              <ContractsTable items={pageItems} onRowClick={id=>nav(`/contracts/${id}`)} />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
                <div className="flex gap-2">
                  <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 border rounded">Prev</button>
                  <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} className="px-3 py-1 border rounded">Next</button>
                </div>
              </div>
            </>
          )}
        </>
      )}

      <UploadModal open={uploadOpen} onClose={()=>setUploadOpen(false)} />
    </div>
  )
}
