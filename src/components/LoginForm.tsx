import React, { useState } from 'react'
import { Button } from './ui/button'
import { useNavigate } from "react-router-dom"; // kalau pakai router


const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://asn-backend.azurewebsites.net'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`${backendUrl}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      localStorage.setItem("token", data.token); // simpan token (optional)
      navigate("/dashboard"); // redirect ke halaman dashboard
      
    } catch (err: any) {
       setError(err.message || "Terjadi kesalahan");
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30">
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
  )
}
export default LoginForm;