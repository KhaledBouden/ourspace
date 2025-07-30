'use client';

import { useState } from 'react';

interface DateCardProps {
  date: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    status: string;
    description: string;
    image: string;
  };
  onUpdateStatus: (id: number, status: string) => void;
}

export default function DateCard({ date, onUpdateStatus }: DateCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      outdoor: 'bg-green-500',
      home: 'bg-blue-500',
      adventure: 'bg-orange-500',
      learning: 'bg-purple-500',
      cultural: 'bg-indigo-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      outdoor: 'ri-leaf-line',
      home: 'ri-home-line',
      adventure: 'ri-map-line',
      learning: 'ri-book-line',
      cultural: 'ri-building-line'
    };
    return icons[category as keyof typeof icons] || 'ri-calendar-line';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        <img 
          src={date.image} 
          alt={date.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-4 left-4">
          <div className={`${getCategoryColor(date.category)} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center`}>
            <i className={`${getCategoryIcon(date.category)} mr-1`}></i>
            {date.category}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            date.status === 'completed' 
              ? 'bg-green-500 text-white' 
              : 'bg-white text-gray-700'
          }`}>
            {date.status === 'completed' ? 'Completed' : 'Planned'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{date.title}</h3>
        <p className="text-gray-600 mb-4">{date.description}</p>
        
        {/* Date & Time */}
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <i className="ri-calendar-line mr-2"></i>
          <span>{formatDate(date.date)}</span>
        </div>
        
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <i className="ri-time-line mr-2"></i>
          <span>{date.time}</span>
        </div>
        
        <div className="flex items-center mb-6 text-sm text-gray-500">
          <i className="ri-map-pin-line mr-2"></i>
          <span>{date.location}</span>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          
          {date.status === 'planned' && (
            <button
              onClick={() => onUpdateStatus(date.id, 'completed')}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Mark Complete
            </button>
          )}
          
          {date.status === 'completed' && (
            <button
              onClick={() => onUpdateStatus(date.id, 'planned')}
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Mark Planned
            </button>
          )}
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">Date Details</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="ri-information-line text-gray-400 mr-3 mt-0.5"></i>
                <div>
                  <p className="text-sm font-medium text-gray-700">Description</p>
                  <p className="text-sm text-gray-600">{date.description}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-map-pin-line text-gray-400 mr-3 mt-0.5"></i>
                <div>
                  <p className="text-sm font-medium text-gray-700">Location</p>
                  <p className="text-sm text-gray-600">{date.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-price-tag-3-line text-gray-400 mr-3 mt-0.5"></i>
                <div>
                  <p className="text-sm font-medium text-gray-700">Category</p>
                  <p className="text-sm text-gray-600 capitalize">{date.category}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-calendar-check-line text-gray-400 mr-3 mt-0.5"></i>
                <div>
                  <p className="text-sm font-medium text-gray-700">Status</p>
                  <p className="text-sm text-gray-600 capitalize">{date.status}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}