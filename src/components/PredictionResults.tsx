import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PredictionResultsProps {
  predictions: {
    winProbability: number;
    drawProbability: number;
    expectedShots: number;
    expectedCorners: number;
    expectedFoulsHome: number;
    expectedFoulsAway: number;
  };
}

export const PredictionResults: React.FC<PredictionResultsProps> = ({ predictions }) => {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2" />
        Prediction Results
      </h2>
      <ul className="space-y-2">
        <li>Win Probability: {(predictions.winProbability * 100).toFixed(2)}%</li>
        <li>Draw Probability: {(predictions.drawProbability * 100).toFixed(2)}%</li>
        <li>Expected Shots: {predictions.expectedShots.toFixed(2)}</li>
        <li>Expected Corners: {predictions.expectedCorners.toFixed(2)}</li>
        <li>Expected Fouls (Home): {predictions.expectedFoulsHome.toFixed(2)}</li>
        <li>Expected Fouls (Away): {predictions.expectedFoulsAway.toFixed(2)}</li>
      </ul>
    </div>
  );
};