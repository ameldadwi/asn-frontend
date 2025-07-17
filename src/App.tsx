import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/admin/HomePage';
import LoginPage from './pages/admin/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import Kepegawaian from './pages/admin/Kepegawaian';

import LayananPos from './routes/LayananPos';
import LayananPenyiaran from './routes/LayananPenyiaran';
import LayananTelekomunikasi from './routes/LayananTelekomunikasi';

import Home from "./routes/Home";
import PosDasarHukum from './routes/dasarhukum/PosDasarHukum';
import DasarHukumPosPage from './routes/dasarhukum/dasarHukumPos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/kepegawaian" element={<Kepegawaian />} />
        <Route path="/routes" element={<Home />} />
        
        {/* Layanan */}
        <Route path="/layanan/pos" element={<LayananPos />} />
        <Route path="/layanan/penyiaran" element={<LayananPenyiaran />} />
        <Route path="/layanan/telekomunikasi" element={<LayananTelekomunikasi />} />
        
        {/* Dasar Hukum */}
        <Route path="/dasar-hukum/pos" element={<PosDasarHukum />} />
        <Route path="/src/routes/dasarhukum" element={<DasarHukumPosPage />} />
      </Routes>
    </Router>
  );
}

export default App;