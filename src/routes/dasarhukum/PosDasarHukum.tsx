import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  isAdmin?: boolean;
}

const PosDasarHukum: React.FC<Props> = ({ isAdmin = false }) => {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/pos/dasar-hukum/files");
      setFiles(res.data);
    } catch (err) {
      console.error("Gagal fetch file:", err);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:3001/api/pos/dasar-hukum/upload", formData);
      fetchFiles();
      setSelectedFile(null);
    } catch (err) {
      console.error("Upload gagal:", err);
    }
  };

  const handleDelete = async (filename: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/pos/dasar-hukum/delete/${filename}`);
      fetchFiles();
    } catch (err) {
      console.error("Gagal hapus file:", err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dasar Hukum Layanan Pos</h2>

      {isAdmin && (
        <div className="mb-4">
          <input type="file" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Upload
          </button>
        </div>
      )}

      <ul className="space-y-2">
        {files.map((file, i) => (
          <li key={i} className="flex justify-between items-center border-b pb-2">
            <a
              href={`http://localhost:3001/api/pos/dasar-hukum/download/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {file}
            </a>
            {isAdmin && (
              <button
                onClick={() => handleDelete(file)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PosDasarHukum;
