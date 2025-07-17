import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [peserta, setPeserta] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://asn-backend.azurewebsites.net";

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Pilih file terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessage(data.message || "Undangan berhasil diproses");
    } catch (err) {
      setMessage("Gagal upload file");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateSurat = async () => {
    if (!peserta) {
      alert("Isi NIP peserta terlebih dahulu.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ peserta: [peserta] }),
      });

      const data = await res.json();
      if (data.download_url) {
        window.open(data.download_url, "_blank");
      } else {
        setMessage("Gagal membuat surat.");
      }
    } catch (err) {
      setMessage("Terjadi kesalahan saat generate surat.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          📝 Input Surat Tugas
        </h1>

        {/* Upload */}
        <div className="space-y-2">
          <label className="text-gray-700 font-medium">
            Upload Surat Undangan (PDF/Word):
          </label>
          <div className="flex items-center gap-4">
          <input
            type="file"
            onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                setFile(selectedFile);
                }
            }}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                />
            <button
              onClick={handleUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Input NIP */}
        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Input NIP Peserta:</label>
          <input
            type="text"
            value={peserta}
            onChange={(e) => setPeserta(e.target.value)}
            placeholder="Contoh: 19781231XXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Tombol Submit */}
        <div className="pt-4">
          <button
            onClick={handleGenerateSurat}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-3 rounded-xl flex justify-center items-center gap-2 transition"
          >
            🎯 Buat Surat Tugas
          </button>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="animate-pulse mt-6 space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        )}

        {/* Pesan */}
        {message && (
          <div className="text-center text-sm text-green-700 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}


