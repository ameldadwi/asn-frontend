// src/pages/admin/LoginPage.tsx
import React, { useState } from 'react';
import { Button } from 'src/components/ui/button';
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    navigate('/admin/dashboard');

    try {
      const res = await fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || 'Gagal login');
      }

      const data = await res.json();

      if (data?.token) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard');
      } else {
        throw new Error('Login gagal: token tidak ditemukan');
      }
    } catch (err: any) {
      console.error('Login error:', err.message);
      setError(err.message || 'Terjadi kesalahan');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30"
    >
      <div>
        <label className="block text-sm font-medium text-black mb-1">Username</label>
        <input
          type="text"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-1">Password</label>
        <input
          type="password"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-black py-2 rounded-md transition duration-300"
      >
        Masuk
      </Button>

      {error && <p className="text-black mt-2 text-sm">{error}</p>}
    </form>
  );
};

export default LoginPage;
