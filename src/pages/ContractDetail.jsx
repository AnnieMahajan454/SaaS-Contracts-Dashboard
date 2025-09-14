import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchContractById } from '../hooks/useContracts'
import Loading from '../components/Loading'
import ErrorBox from '../components/ErrorBox'
import Empty from '../components/Empty'
import RiskBadge from '../components/RiskBadge'

export default function ContractDetail(){
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    fetchContractById(id).then(d=>{ if(!mounted) return; if(!d){ setError('Not found'); setLoading(false); return } setData(d); setLoading(false) }).catch(e=>{ if(!mounted) return; setError('Failed'); setLoading(false) })
    return ()=> mounted = false
  },[id])

  if(loading) return <Loading />
  if(error) return <ErrorBox message={error} />
  if(!data) return <Empty message="Contract not found" />

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded border">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <div className="text-sm text-gray-600">{data.parties}</div>
          </div>
          <div className="text-right">
            <div className="text-sm">Start: {new Date(data.start).toLocaleDateString()}</div>
            <div className="text-sm">Expiry: {new Date(data.expiry).toLocaleDateString()}</div>
            <div className="mt-2"><RiskBadge risk={data.risk} /></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <section className="bg-white p-4 rounded border">
            <h3 className="font-semibold mb-2">Clauses</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {data.clauses.map((c,i)=>(
                <div key={i} className="p-3 border rounded">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-gray-500">Conf: {(c.confidence*100).toFixed(0)}%</div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{c.summary}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-4 rounded border">
            <h3 className="font-semibold mb-2">AI Insights</h3>
            <ul className="space-y-2">
              {data.insights.map((ins,i)=>(
                <li key={i} className="p-2 border rounded flex items-start gap-3">
                  <div className="w-2 h-2 mt-1 rounded-full" style={{backgroundColor: ins.risk === 'High' ? '#ef4444' : ins.risk === 'Medium' ? '#f59e0b' : '#10b981'}}></div>
                  <div>
                    <div className="font-medium">{ins.risk} risk</div>
                    <div className="text-sm text-gray-600">{ins.message}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold">Evidence</h4>
            <div className="text-sm text-gray-600">{data.evidence.length} snippets</div>
            <ul className="mt-3 space-y-2">
              {data.evidence.map((ev,i)=>(
                <li key={i} className="p-2 border rounded">
                  <div className="text-xs text-gray-500">{ev.source} • Relevance: {(ev.relevance*100).toFixed(0)}%</div>
                  <div className="text-sm">{ev.snippet}</div>
                </li>
              ))}
            </ul>
            <button onClick={()=>setDrawerOpen(true)} className="mt-3 text-sm text-blue-600">Open evidence drawer</button>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold">Actions</h4>
            <button className="w-full mt-2 px-3 py-2 border rounded">Export</button>
            <button className="w-full mt-2 px-3 py-2 bg-yellow-600 text-white rounded">Request Review</button>
          </div>
        </aside>
      </div>

      {drawerOpen && (
        <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold">Evidence & Snippets</div>
            <button onClick={()=>setDrawerOpen(false)} className="text-gray-500">Close</button>
          </div>
          <div className="space-y-3 overflow-auto h-[80vh]">
            {data.evidence.map((ev,i)=>(
              <div key={i} className="p-3 border rounded">
                <div className="text-xs text-gray-500">{ev.source} — Relevance {(ev.relevance*100).toFixed(0)}%</div>
                <div className="mt-2">{ev.snippet}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
