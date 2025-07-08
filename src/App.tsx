import LoginForm from './components/LoginForm'
import { ServiceDisplay } from "./components/ServiceDisplay";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="src/path/gambar2.png"
          alt="Digital Technology Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay untuk membuat gambar tidak terlalu mencolok */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/90 to-indigo-100/85"></div>
        {/* Additional subtle overlay */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* Login Button - Pojok kanan atas dengan absolute positioning */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 min-w-[120px]">
        <LoginForm />
      </div>
      
      {/* Service Display - Area utama penuh */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 pt-24 md:pt-8 lg:p-12 lg:pr-40">
        <ServiceDisplay />
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
        <div className="mt-16">
          <p className="text-xs text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 inline-block px-[16px] py-[7px] m-[0px] mx-[0px] my-[-25px]">
            © 2025 Direktorat Layanan Ekosistem Digital - Kementerian Komunikasi dan Digital
          </p>
        </div>
      </div>
    </div>
  );
}