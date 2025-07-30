'use client';

import { useState } from 'react';
import Header from '../components/Header';
import GratitudeCard from './GratitudeCard';
import NewGratitudeModal from './NewGratitudeModal';

export default function GratitudePage() {
  const [showNewModal, setShowNewModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [gratitudes, setGratitudes] = useState([
    {
      id: 1,
      title: 'Our Cozy Movie Night',
      content: 'I\'m so grateful for our spontaneous movie night last weekend. The way you made homemade popcorn and picked out all my favorite films made it feel so special. These quiet moments together mean everything to me.',
      date: '2024-01-14',
      author: 'Me',
      category: 'relationship',
      mood: 'content'
    },
    {
      id: 2,
      title: 'Your Amazing Pasta Dish',
      content: 'Thank you for cooking that incredible pasta dinner for us! Your creativity in the kitchen never ceases to amaze me. The effort you put into making our meals special shows how much you care.',
      date: '2024-01-13',
      author: 'Partner',
      category: 'relationship',
      mood: 'grateful'
    },
    {
      id: 3,
      title: 'Getting That Promotion',
      content: 'I\'m incredibly grateful for finally getting the promotion I\'ve been working toward. Your constant support and encouragement throughout this journey made all the difference. We did this together!',
      date: '2024-01-12',
      author: 'Me',
      category: 'achievements',
      mood: 'excited'
    },
    {
      id: 4,
      title: 'Our Morning Coffee Ritual',
      content: 'Every morning when we sit together with our coffee and plan the day, I feel so grateful for this simple but meaningful ritual. These moments of connection start our days perfectly.',
      date: '2024-01-11',
      author: 'Both',
      category: 'relationship',
      mood: 'peaceful'
    },
    {
      id: 5,
      title: 'Your Patience With Me',
      content: 'I\'m grateful for your endless patience, especially during my stressful week at work. The way you listened without judgment and offered gentle support reminded me how lucky I am to have you.',
      date: '2024-01-10',
      author: 'Me',
      category: 'relationship',
      mood: 'grateful'
    },
    {
      id: 6,
      title: 'Our Spontaneous Dance Party',
      content: 'That random dance party we had in the kitchen while making dinner was pure joy! I love how we can be silly together and create these magical moments out of nowhere.',
      date: '2024-01-09',
      author: 'Partner',
      category: 'experiences',
      mood: 'happy'
    },
    {
      id: 7,
      title: 'Learning to Meditate Together',
      content: 'Starting our meditation practice together has brought such peace into our relationship. I\'m grateful we\'re growing spiritually and emotionally as a couple.',
      date: '2024-01-08',
      author: 'Both',
      category: 'personal',
      mood: 'peaceful'
    },
    {
      id: 8,
      title: 'Family Dinner Success',
      content: 'Thank you for being so wonderful when my family visited. The way you made everyone feel comfortable and helped with dinner showed me what an amazing partner you are.',
      date: '2024-01-07',
      author: 'Me',
      category: 'family',
      mood: 'grateful'
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Gratitudes', icon: 'ri-heart-line' },
    { id: 'relationship', label: 'Relationship', icon: 'ri-heart-line' },
    { id: 'personal', label: 'Personal Growth', icon: 'ri-user-line' },
    { id: 'achievements', label: 'Achievements', icon: 'ri-trophy-line' },
    { id: 'experiences', label: 'Experiences', icon: 'ri-compass-line' },
    { id: 'family', label: 'Family & Friends', icon: 'ri-group-line' }
  ];

  const filteredGratitudes = selectedFilter === 'all' 
    ? gratitudes 
    : gratitudes.filter(g => g.category === selectedFilter);

  const addGratitude = (newGratitude: any) => {
    setGratitudes([newGratitude, ...gratitudes]);
    setShowNewModal(false);
  };

  const deleteGratitude = (id: number) => {
    setGratitudes(gratitudes.filter(g => g.id !== id));
  };

  const getStatsForCategory = (category: string) => {
    return category === 'all' 
      ? gratitudes.length 
      : gratitudes.filter(g => g.category === category).length;
  };

  const recentGratitudes = gratitudes.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Peaceful%20couple%20sitting%20together%20in%20gratitude%20and%20meditation%2C%20serene%20sunrise%20setting%2C%20soft%20golden%20light%20filtering%20through%20trees%2C%20tranquil%20atmosphere%2C%20expressing%20thankfulness%20and%20love%2C%20warm%20colors%2C%20minimalist%20background%20perfect%20for%20gratitude%20theme&width=1200&height=400&seq=gratitudehero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-pink-900/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Gratitude Journal</h1>
          <p className="text-xl opacity-90">Celebrating the beautiful moments and blessings in our lives</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <i className="ri-heart-fill text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{gratitudes.length}</p>
                <p className="text-sm text-gray-600">Total Gratitudes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-calendar-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">7</p>
                <p className="text-sm text-gray-600">This Week</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="ri-user-heart-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{gratitudes.filter(g => g.category === 'relationship').length}</p>
                <p className="text-sm text-gray-600">Relationship</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i className="ri-trophy-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{gratitudes.filter(g => g.category === 'achievements').length}</p>
                <p className="text-sm text-gray-600">Achievements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Gratitude Entries</h2>
            <p className="text-gray-600 mt-2">Moments we\'re thankful for, shared with love</p>
          </div>
          <button 
            onClick={() => setShowNewModal(true)}
            className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap flex items-center"
          >
            <i className="ri-add-line mr-2"></i>
            Share Gratitude
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap flex items-center ${
                selectedFilter === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.label}
              <span className="ml-2 text-xs bg-black/10 px-2 py-1 rounded-full">
                {getStatsForCategory(category.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Recent Highlights */}
        {selectedFilter === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentGratitudes.map(gratitude => (
                <div key={gratitude.id} className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-heart-fill text-white text-sm"></i>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">{gratitude.title}</h4>
                      <p className="text-sm text-gray-500">by {gratitude.author}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {gratitude.content.slice(0, 100)}...
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(gratitude.date).toLocaleDateString()}
                    </span>
                    <i className="ri-arrow-right-line text-orange-600"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gratitude Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGratitudes.map(gratitude => (
            <GratitudeCard 
              key={gratitude.id} 
              gratitude={gratitude} 
              onDelete={deleteGratitude}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredGratitudes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-line text-orange-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No gratitudes found</h3>
            <p className="text-gray-600 mb-6">No gratitudes match your current filter selection.</p>
            <button 
              onClick={() => setSelectedFilter('all')}
              className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Show All Gratitudes
            </button>
          </div>
        )}

        {/* Inspirational Quote */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <i className="ri-double-quotes-l text-3xl mb-4 opacity-70"></i>
          <blockquote className="text-xl font-medium mb-4">
            "Gratitude is not only the greatest of virtues, but the parent of all others."
          </blockquote>
          <cite className="text-orange-100">— Cicero</cite>
        </div>
      </div>

      {/* New Gratitude Modal */}
      {showNewModal && (
        <NewGratitudeModal 
          onClose={() => setShowNewModal(false)}
          onAdd={addGratitude}
        />
      )}
    </div>
  );
}