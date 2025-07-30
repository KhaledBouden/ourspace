'use client';

import { useState } from 'react';

interface NewDateModalProps {
  onClose: () => void;
  onAdd: (date: any) => void;
}

export default function NewDateModal({ onClose, onAdd }: NewDateModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'outdoor',
    description: '',
    status: 'planned'
  });

  const categories = [
    { id: 'outdoor', label: 'Outdoor', icon: 'ri-leaf-line' },
    { id: 'home', label: 'At Home', icon: 'ri-home-line' },
    { id: 'adventure', label: 'Adventure', icon: 'ri-map-line' },
    { id: 'learning', label: 'Learning', icon: 'ri-book-line' },
    { id: 'cultural', label: 'Cultural', icon: 'ri-building-line' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    const newDate = {
      ...formData,
      image: generateImageUrl(formData.category, formData.title)
    };

    onAdd(newDate);
  };

  const generateImageUrl = (category: string, title: string) => {
    const prompts = {
      outdoor: 'Beautiful outdoor romantic setting with natural scenery, peaceful atmosphere, perfect for couples date, dreamy lighting and nature background',
      home: 'Cozy home interior setting with warm lighting, comfortable atmosphere, intimate space perfect for couples spending time together',
      adventure: 'Exciting adventure location with stunning views, perfect for couples who love exploration and new experiences together',
      learning: 'Educational and cultural setting with warm atmosphere, perfect for couples learning new things together, inspiring environment',
      cultural: 'Elegant cultural venue with sophisticated atmosphere, perfect for couples who appreciate art, culture, and refined experiences'
    };

    const basePrompt = prompts[category as keyof typeof prompts] || prompts.outdoor;
    const seq = `newdate${Date.now()}`;
    
    return `https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28basePrompt%29%7D&width=400&height=300&seq=${seq}&orientation=landscape`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Plan New Date</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-gray-600"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Romantic Dinner at Home"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., Central Park, Our Home, etc."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: category.id })}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    formData.category === category.id
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <i className={`${category.icon} mb-1 block text-lg`}></i>
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell us about this special date..."
              rows={3}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.description.length}/500 characters
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Create Date
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}