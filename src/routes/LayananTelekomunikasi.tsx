// src/routes/LayananTelekomunikasi.tsx
export default function LayananTelekomunikasi() {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Layanan Telekomunikasi</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <a href="https://e-telekomunikasi.komdigi.go.id/landing" target="_blank" className="p-6 rounded-xl shadow-md bg-blue-100 hover:bg-blue-200 text-center transition">
          🌐 Website Layanan Telekomunikasi
        </a>
        <a href="/alur-pengajuan/telekomunikasi" className="p-6 rounded-xl shadow-md bg-green-100 hover:bg-green-200 text-center transition">
          📄 Alur Pengajuan
        </a>
        <a href="/dasar-hukum/telekomunikasi" className="p-6 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200 text-center transition">
          📚 Dasar Hukum
        </a>
      </div>
    </div>
  );
}
