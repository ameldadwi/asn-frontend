import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'src/components/ui/card';
import { Button } from 'src/components/ui/button';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); // shimmer 1.5 detik
    return () => clearTimeout(timeout);
  }, []);

  const services = [
    { name: 'Kepegawaian', route: '/admin/kepegawaian', color: 'bg-blue-500' },
    { name: 'Pelayanan Persuratan', route: '/admin/persuratan', color: 'bg-purple-500' },
    { name: 'BMN', route: '/admin/bmn', color: 'bg-green-500' },
    { name: 'Jadwal', route: '/admin/jadwal', color: 'bg-orange-500' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col items-center border-r border-gray-200">
        <div className={`w-24 h-24 rounded-full bg-gray-300 mb-2 ${loading ? 'shimmer' : ''}`}></div>
        <p className="text-lg font-semibold mb-6">User</p>
        <Button 
          className="w-full mb-4 py-2 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition duration-300"
          onClick={() => navigate('/admin/password')}
        >
          Ubah Password
        </Button>
        <Button 
          className="w-full mb-4 py-2 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          onClick={() => navigate('/admin/layanan')}
        >
          Kelola Layanan
        </Button>
        <Button 
          className="w-full py-2 text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition duration-300"
          onClick={() => navigate('/admin/user')}
        >
          Kelola User
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Layanan Tata Kelola</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, idx) => (
            <Card
              key={idx}
              onClick={() => navigate(svc.route)}
              className={`p-10 text-center text-2xl font-bold rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-white hover:scale-105 hover:shadow-2xl ${svc.color} ${loading ? 'shimmer' : ''}`}
            >
              {svc.name}
            </Card>
          ))}
        </div>
      </main>

      {/* Shimmer style */}
      {loading && (
        <style>{`
          .shimmer {
            position: relative;
            overflow: hidden;
          }

          .shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
            animation: shimmer 1.5s infinite;
          }

          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
        `}</style>
      )}
    </div>
  );
};

export default Dashboard;
