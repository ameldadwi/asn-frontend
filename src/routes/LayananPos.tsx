import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export default function LayananPos() {

  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const fetchFiles = async () => {
    const res = await fetch(`${backendUrl}/api/pos/dasarhukum`);
    const data = await res.json();
    setFiles(data.files || []);
  };

  const handleUpload = async () => {
    if (!file) return alert("Pilih file terlebih dahulu.");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${backendUrl}/api/pos/dasarhukum/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
    fetchFiles();
  };

  useEffect(() => {
    fetchFiles();
  }, []);


  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Layanan Pos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Link layanan */}
        <a
          href="https://sipaola.komdigi.go.id/"
          target="_blank"
          className="p-6 rounded-xl shadow-md bg-blue-100 hover:bg-blue-200 text-center transition"
        >
          🌐 Website Layanan Pos
        </a>

        {/* Alur Pengajuan */}
        <a
          href="/alur-pengajuan/pos"
          className="p-6 rounded-xl shadow-md bg-green-100 hover:bg-green-200 text-center transition"
        >
          📄 Alur Pengajuan
        </a>

         <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📄 Dasar Hukum Pos</h1>

      {/* Upload Section */}
      <div className="space-y-2">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload PDF
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </div>

      {/* File List */}
      <div className="border rounded p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">📚 Daftar Dokumen</h2>
        {files.length === 0 ? (
          <p>Belum ada file yang diunggah.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {files.map((file, index) => (
              <li key={index}>
                <a
                  href={`${backendUrl}/api/pos/dasar-hukum/${file}`}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {file}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
      </div>
    </div>
  );
}
