import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


export function ServiceDisplay() {
  const services = [
    {
      title: "Penyiaran",
      description: "Layanan regulasi dan perizinan penyiaran",
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            {/* Satellite Dish */}
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
            <circle cx="12" cy="12" r="2" fill="white"/>
            {/* Support Stand */}
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
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            {/* Tower Base */}
            <rect x="10" y="18" width="4" height="4" fill="currentColor"/>
            {/* Tower Structure */}
            <path d="M12 2L9 18h6L12 2z" fill="currentColor"/>
            <path d="M12 2L10.5 18h3L12 2z" fill="white" opacity="0.3"/>
            {/* Cross beams */}
            <rect x="8" y="8" width="8" height="0.5" fill="currentColor"/>
            <rect x="8.5" y="12" width="7" height="0.5" fill="currentColor"/>
            <rect x="9" y="16" width="6" height="0.5" fill="currentColor"/>
            {/* Antennas */}
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
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            {/* Envelope Body */}
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
            {/* Envelope Flap */}
            <path d="M12 13L4 6h16l-8 7z" fill="white"/>
            {/* Envelope Details */}
            <path d="M4 8l8 6 8-6v8H4V8z" fill="rgba(255,255,255,0.2)"/>
            {/* Stamp Area */}
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
    <div className="flex flex-col justify-center h-full space-y-8 max-w-4xl">
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
              {/* Overlay untuk membuat teks lebih terbaca */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
            </div>
            
            {/* Content */}
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
            
            {/* Subtle Digital Elements */}
            <div className="absolute top-6 right-6 opacity-30 z-10">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="text-center space-y-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 lg:p-8 px-[21px] py-[10px]">
            <p className="text-lg text-gray-700 font-medium">
              Pilih layanan yang Anda butuhkan untuk mengakses sistem
            </p>
            <div className="flex items-center justify-center space-x-4 text-base text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Terintegrasi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Aman</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Terpercaya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[10px] mr-[0px] mb-[0px] ml-[0px]">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} border border-white/40 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105 p-2 shadow-lg`}>
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-8 h-20 items-center">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}