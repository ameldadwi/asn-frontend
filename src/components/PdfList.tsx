import { useState } from "react";

interface PdfItem {
  id: number;
  name: string;
  url: string;
}

interface Props {
  title: string;
  pdfs: PdfItem[];
  onDelete?: (id: number) => void;
  onUpload?: (file: File) => void;
}

export default function PdfList({ title, pdfs, onDelete, onUpload }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (selectedFile && onUpload) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      {onUpload && (
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setSelectedFile(file);
            }}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </div>
      )}

      <ul className="space-y-2">
        {pdfs.map((pdf) => (
          <li key={pdf.id} className="flex justify-between items-center border p-3 rounded-md bg-white shadow">
            <span className="text-gray-800">{pdf.name}</span>
            <div className="space-x-2">
              <a
                href={pdf.url}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Lihat
              </a>
              <a
                href={pdf.url}
                download
                className="text-green-600 hover:underline"
              >
                Download
              </a>
              {onDelete && (
                <button
                  onClick={() => onDelete(pdf.id)}
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
