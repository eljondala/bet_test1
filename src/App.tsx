import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { UrlInput } from './components/UrlInput';
import { PredictionResults } from './components/PredictionResults';
import { processData, trainModel, predict } from './utils/neuralNetwork';
import { Football } from 'lucide-react';

function App() {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [urlData, setUrlData] = useState<string[]>([]);
  const [predictions, setPredictions] = useState<any>(null);

  const handleCsvUpload = (data: any[]) => {
    setCsvData(data);
  };

  const handleUrlSubmit = (url: string) => {
    setUrlData([...urlData, url]);
  };

  const handlePredict = async () => {
    if (csvData.length === 0) {
      alert('Please upload CSV data first');
      return;
    }

    const processedData = processData(csvData);
    const model = await trainModel(processedData);
    const results = await predict(model, processedData[0]); // Predict using the first row of data
    setPredictions(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Football className="mr-2" />
        Football Betting Predictor
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <FileUpload onUpload={handleCsvUpload} />
        <UrlInput onSubmit={handleUrlSubmit} />
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Uploaded URLs:</h2>
          <ul className="list-disc pl-5">
            {urlData.map((url, index) => (
              <li key={index}>{url}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={handlePredict}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Predict
        </button>
        {predictions && <PredictionResults predictions={predictions} />}
      </div>
    </div>
  );
}

export default App;