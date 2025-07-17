export default function LayananPos() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-start gap-6">
      <h1 className="text-2xl font-bold mb-4">Layanan Pos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <a
          href="https://sipaola.komdigi.go.id/"
          target="_blank"
          className="rounded-full border-2 border-blue-400 p-8 text-center hover:bg-blue-100 transition"
        >
          Layanan Pos
        </a>
        <a
          href="/alur-pengajuan/pos"
          className="rounded-full border-2 border-green-400 p-8 text-center hover:bg-green-100 transition"
        >
          Alur Pengajuan
        </a>
        <a
          href="/dasar-hukum/pos"
          className="rounded-full border-2 border-gray-400 p-8 text-center hover:bg-gray-100 transition"
        >
          Dasar Hukum
        </a>
      </div>
    </div>
  );
}