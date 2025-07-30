'use client';

import { useState } from 'react';

interface NewGratitudeModalProps {
  onClose: () => void;
  onAdd: (gratitude: any) => void;
}

export default function NewGratitudeModal({ onClose, onAdd }: NewGratitudeModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'relationship',
    mood: 'grateful',
    author: 'Me'
  });

  const categories = [
    { id: 'relationship', label: 'Relationship', icon: 'ri-heart-line' },
    { id: 'personal', label: 'Personal Growth', icon: 'ri-user-line' },
    { id: 'achievements', label: 'Achievements', icon: 'ri-trophy-line' },
    { id: 'experiences', label: 'Experiences', icon: 'ri-compass-line' },
    { id: 'family', label: 'Family & Friends', icon: 'ri-group-line' }
  ];

  const moods = [
    { id: 'happy', label: 'Happy', icon: 'ri-emotion-happy-line' },
    { id: 'grateful', label: 'Grateful', icon: 'ri-heart-line' },
    { id: 'peaceful', label: 'Peaceful', icon: 'ri-leaf-line' },
    { id: 'excited', label: 'Excited', icon: 'ri-star-line' },
    { id: 'content', label: 'Content', icon: 'ri-sun-line' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim() && formData.content.trim()) {
      onAdd({
        ...formData,
        date: new Date().toISOString().split('T')[0],
        id: Date.now()
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800">Share Your Gratitude</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you grateful for?
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="e.g., A beautiful sunset walk together"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us more about it
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Describe what made this moment special and why you're grateful for it..."
                rows={4}
                maxLength={500}
                required
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.content.length}/500
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setFormData({...formData, category: category.id})}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      formData.category === category.id
                        ? 'border-pink-500 bg-pink-50 text-pink-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <i className={category.icon}></i>
                      <span className="text-sm font-medium">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How are you feeling?
              </label>
              <div className="flex flex-wrap gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={() => setFormData({...formData, mood: mood.id})}
                    className={`px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                      formData.mood === mood.id
                        ? 'border-pink-500 bg-pink-50 text-pink-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <i className={mood.icon}></i>
                      <span className="text-sm font-medium">{mood.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <select
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 pr-8"
              >
                <option value="Me">Me</option>
                <option value="Partner">Partner</option>
                <option value="Both">Both of Us</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Share Gratitude
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}