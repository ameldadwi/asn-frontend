import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function ServiceDisplay() {


  const navigate = useNavigate();
  const services = [
    {
      title: "Penyiaran",
      description: "Layanan regulasi dan perizinan penyiaran",
      route: "/layanan/penyiaran",
      icon: (
        <div className="relative">
          {/* Ikon penyiaran */}
          <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
            <circle cx="12" cy="12" r="2" fill="white"/>
            <rect x="11" y="16" width="2" height="4" fill="currentColor"/>
            <rect x="9" y="19" width="6" height="1" fill="currentColor"/>
          </svg>
          <div className="absolute -top-2 -right-2">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
            </svg>
          </div>
        </div>
      ),
      color: "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 backdrop-blur-sm"
    },
    {
      title: "Telekomunikasi",
      description: "Layanan infrastruktur dan regulasi telekomunikasi",
      route: "/layanan/telekomunikasi",
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <rect x="10" y="18" width="4" height="4" fill="currentColor"/>
            <path d="M12 2L9 18h6L12 2z" fill="currentColor"/>
            <path d="M12 2L10.5 18h3L12 2z" fill="white" opacity="0.3"/>
            <rect x="8" y="8" width="8" height="0.5" fill="currentColor"/>
            <rect x="8.5" y="12" width="7" height="0.5" fill="currentColor"/>
            <rect x="9" y="16" width="6" height="0.5" fill="currentColor"/>
            <rect x="11.5" y="1" width="1" height="3" fill="currentColor"/>
            <rect x="10.5" y="2" width="3" height="0.5" fill="currentColor"/>
            <rect x="10.5" y="3" width="3" height="0.5" fill="currentColor"/>
          </svg>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
            </svg>
          </div>
        </div>
      ),
      color: "bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 backdrop-blur-sm"
    },
    {
      title: "Pos",
      description: "Layanan pos dan logistik nasional",
      route: "/layanan/pos",
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
            <path d="M12 13L4 6h16l-8 7z" fill="white"/>
            <path d="M4 8l8 6 8-6v8H4V8z" fill="rgba(255,255,255,0.2)"/>
            <rect x="15" y="7" width="4" height="3" fill="white" opacity="0.8"/>
            <rect x="15.5" y="7.5" width="3" height="2" fill="currentColor" opacity="0.3"/>
          </svg>
          <div className="absolute -top-2 -right-2">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
            </svg>
          </div>
        </div>
      ),
      color: "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 backdrop-blur-sm"
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full space-y-8 max-w-4xl mx-auto">
    <div className="space-y-6">
  <div className="space-y-4 text-center lg:text-left">
    <div className="relative overflow-hidden rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={"src/path/gambar1.jpg"} 
          alt="Digital Screens Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay untuk kontras teks */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Konten Hero */}
      <div className="relative z-10">
        <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
          Direktorat Layanan<br />
          Ekosistem Digital
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto lg:mx-0 mb-6 rounded-full shadow-lg"></div>
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-lg">
          Platform terpadu untuk layanan digital yang mengintegrasikan berbagai sektor komunikasi dan informatika
        </p>
        <p className="text-base lg:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed drop-shadow-lg">
          Kementerian Komunikasi dan Digital Republik Indonesia
        </p>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-6 right-6 opacity-30 z-10">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Daftar Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {services.map((service, index) => (
          <Card key={index} 
            onClick={() => navigate(service.route)}
            className={`${service.color} border border-white/40 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105 p-2 shadow-lg`}>
            <CardHeader className="text-center pb-3">
              <div className="flex justify-center mb-8 h-20 items-center">
                {service.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <CardDescription className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tombol Login Admin */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={() => navigate('/login')}
          className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Login Admin
        </Button>
      </div>
    </div>
  );
}
