// src/routes/LayananPenyiaran.tsx
export default function LayananPenyiaran() {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Layanan Penyiaran</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <a href="https://e-penyiaran.komdigi.go.id" target="_blank" className="p-6 rounded-xl shadow-md bg-blue-100 hover:bg-blue-200 text-center transition">
          🌐 Website Layanan Penyiaran
        </a>
        <a href="/alur-pengajuan/penyiaran" className="p-6 rounded-xl shadow-md bg-green-100 hover:bg-green-200 text-center transition">
          📄 Alur Pengajuan
        </a>
        <a href="/dasar-hukum/penyiaran" className="p-6 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200 text-center transition">
          📚 Dasar Hukum
        </a>
      </div>
    </div>
  );
}
