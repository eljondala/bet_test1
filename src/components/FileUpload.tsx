import React, { useCallback } from 'react';
import Papa from 'papaparse';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onUpload: (data: any[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          onUpload(results.data);
        },
        header: true,
      });
    }
  }, [onUpload]);

  return (
    <div className="mb-4">
      <label htmlFor="csv-upload" className="flex items-center justify-center w-full px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <Upload className="mr-2" />
        <span className="text-base leading-normal">Upload CSV</span>
        <input id="csv-upload" type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
      </label>
    </div>
  );
};