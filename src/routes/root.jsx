import React, { useState } from 'react'

export default function Root() {
  const [file, setFile] = useState(null)
  const [peserta, setPeserta] = useState([])
  const [message, setMessage] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://asn-backend.azurewebsites.net'

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch(`${backendUrl}/api/upload`, {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    setMessage(data.message || 'Undangan berhasil diproses')
  }

  const handleGenerateSurat = async () => {
    const res = await fetch(`${backendUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ peserta })
    })

    const data = await res.json()
    if (data.download_url) {
      window.open(data.download_url, '_blank')
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Surat Tugas Generator</h1>

      <form onSubmit={handleUpload} className="mb-4">
        <label className="block mb-1">Upload Surat Undangan (PDF/Word):</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
      </form>

      <div className="mb-4">
        <label className="block mb-1">Input NIP Peserta:</label>
        <input type="text" className="border p-2 w-full" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setPeserta([...peserta, e.target.value])
            e.target.value = ''
          }
        }} />

        <ul className="mt-2 list-disc pl-6">
          {peserta.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleGenerateSurat} className="px-4 py-2 bg-green-600 text-white rounded">
        🎯 Buat Surat Tugas
      </button>

      {message && <p className="mt-4 text-blue-700">{message}</p>}
    </main>
  )
}
