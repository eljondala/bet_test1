import React, { useState } from 'react';
import { Link } from 'lucide-react';

interface UrlInputProps {
  onSubmit: (url: string) => void;
}

export const UrlInput: React.FC<UrlInputProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      onSubmit(url);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL for football statistics"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
      >
        <Link className="mr-2" size={18} />
        Add URL
      </button>
    </form>
  );
};