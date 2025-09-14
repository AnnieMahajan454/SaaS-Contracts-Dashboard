import React, { useState, useEffect } from 'react'

export default function UploadModal({ open, onClose }) {
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (!open) setFiles([])
  }, [open])

  const onSelect = (e) => {
    const added = Array.from(e.target.files).map(f => ({
      name: f.name,
      status: 'queued',
    }))
    setFiles(prev => [...prev, ...added])
  }

  const onDrop = (e) => {
    e.preventDefault()
    const added = Array.from(e.dataTransfer.files).map(f => ({
      name: f.name,
      status: 'queued',
    }))
    setFiles(prev => [...prev, ...added])
  }

  const simulate = () => {
    setFiles(prev => prev.map(f => ({ ...f, status: 'uploading' })))
    setTimeout(() => {
      setFiles(prev =>
        prev.map(f => ({
          ...f,
          status: 'success', // ✅ always success
        }))
      )
    }, 1200 + Math.random() * 1200)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upload Contracts</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div
          onDragOver={e => e.preventDefault()}
          onDrop={onDrop}
          className="border-2 border-dashed p-6 rounded text-center"
        >
          <p className="mb-2">Drag & drop files here or</p>
          <input type="file" multiple onChange={onSelect} className="mb-4" />
          <div className="flex justify-center gap-2">
            <button
              onClick={simulate}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Simulate Upload
            </button>
            <button onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-4">
          {files.length === 0 ? (
            <div className="text-sm text-gray-500">No files selected</div>
          ) : (
            <ul className="space-y-2">
              {files.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-2 border rounded"
                >
                  <div>
                    <div className="font-medium">{f.name}</div>
                    <div className="text-xs text-green-600">
                      {f.status === 'uploading' ? 'Uploading...' : 'Success'}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
