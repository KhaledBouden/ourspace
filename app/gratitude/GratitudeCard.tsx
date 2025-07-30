'use client';

import { useState } from 'react';

interface GratitudeCardProps {
  gratitude: {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    category: string;
    mood: string;
  };
  onDelete: (id: number) => void;
}

export default function GratitudeCard({ gratitude, onDelete }: GratitudeCardProps) {
  const [showFullContent, setShowFullContent] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'relationship': return 'bg-pink-100 text-pink-600';
      case 'personal': return 'bg-blue-100 text-blue-600';
      case 'achievements': return 'bg-green-100 text-green-600';
      case 'experiences': return 'bg-purple-100 text-purple-600';
      case 'family': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return 'ri-emotion-happy-line';
      case 'grateful': return 'ri-heart-line';
      case 'peaceful': return 'ri-leaf-line';
      case 'excited': return 'ri-star-line';
      case 'content': return 'ri-sun-line';
      default: return 'ri-emotion-normal-line';
    }
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'text-yellow-500';
      case 'grateful': return 'text-pink-500';
      case 'peaceful': return 'text-green-500';
      case 'excited': return 'text-purple-500';
      case 'content': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getMoodColor(gratitude.mood)}`}>
            <i className={`${getMoodIcon(gratitude.mood)} text-xl`}></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{gratitude.title}</h3>
            <p className="text-sm text-gray-500">by {gratitude.author}</p>
          </div>
        </div>
        <button
          onClick={() => onDelete(gratitude.id)}
          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        >
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">
          {showFullContent ? gratitude.content : `${gratitude.content.slice(0, 120)}${gratitude.content.length > 120 ? '...' : ''}`}
        </p>
        {gratitude.content.length > 120 && (
          <button
            onClick={() => setShowFullContent(!showFullContent)}
            className="text-pink-600 hover:text-pink-700 text-sm font-medium mt-2 cursor-pointer"
          >
            {showFullContent ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(gratitude.category)}`}>
          {gratitude.category}
        </span>
        <span className="text-sm text-gray-500">
          {new Date(gratitude.date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}