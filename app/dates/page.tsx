'use client';

import { useState } from 'react';
import Header from '../components/Header';
import DateCard from './DateCard';
import NewDateModal from './NewDateModal';

export default function DatePlanner() {
  const [showNewDateModal, setShowNewDateModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dates, setDates] = useState([
    {
      id: 1,
      title: 'Sunset Picnic at the Park',
      date: '2024-01-15',
      time: '18:00',
      location: 'Central Park',
      category: 'outdoor',
      status: 'planned',
      description: 'A romantic picnic with homemade sandwiches and wine',
      image: 'https://readdy.ai/api/search-image?query=Romantic%20couple%20having%20a%20sunset%20picnic%20in%20a%20beautiful%20park%20with%20a%20cozy%20blanket%2C%20basket%20of%20food%2C%20warm%20golden%20hour%20lighting%2C%20peaceful%20atmosphere%2C%20soft%20pastel%20colors%2C%20dreamy%20and%20intimate%20setting%20perfect%20for%20couples&width=400&height=300&seq=date1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Movie Night at Home',
      date: '2024-01-12',
      time: '20:00',
      location: 'Our Place',
      category: 'home',
      status: 'completed',
      description: 'Cozy movie marathon with popcorn and cuddles',
      image: 'https://readdy.ai/api/search-image?query=Cozy%20living%20room%20setup%20for%20movie%20night%20with%20soft%20lighting%2C%20blankets%2C%20pillows%2C%20warm%20atmosphere%2C%20romantic%20home%20setting%2C%20comfortable%20and%20intimate%20space%20for%20couples&width=400&height=300&seq=date2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Weekend Beach Trip',
      date: '2024-01-20',
      time: '09:00',
      location: 'Malibu Beach',
      category: 'adventure',
      status: 'planned',
      description: 'A day of sun, sand, and seaside romance',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20beach%20scene%20with%20crystal%20clear%20water%2C%20soft%20sand%2C%20romantic%20seaside%20setting%2C%20peaceful%20ocean%20waves%2C%20perfect%20for%20couples%20getaway%2C%20dreamy%20coastal%20atmosphere&width=400&height=300&seq=date3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Cooking Class Together',
      date: '2024-01-25',
      time: '14:00',
      location: 'Culinary Studio',
      category: 'learning',
      status: 'planned',
      description: 'Learn to make pasta from scratch together',
      image: 'https://readdy.ai/api/search-image?query=Modern%20cooking%20class%20kitchen%20with%20couples%20learning%20together%2C%20professional%20cooking%20equipment%2C%20warm%20lighting%2C%20educational%20and%20romantic%20atmosphere%2C%20hands-on%20culinary%20experience&width=400&height=300&seq=date4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Art Gallery Visit',
      date: '2024-01-08',
      time: '16:00',
      location: 'Metropolitan Museum',
      category: 'cultural',
      status: 'completed',
      description: 'Exploring beautiful art and culture together',
      image: 'https://readdy.ai/api/search-image?query=Modern%20art%20gallery%20interior%20with%20beautiful%20paintings%20and%20sculptures%2C%20elegant%20museum%20setting%2C%20sophisticated%20cultural%20atmosphere%2C%20perfect%20for%20couples%20who%20love%20art%20and%20culture&width=400&height=300&seq=date5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Hiking Adventure',
      date: '2024-01-30',
      time: '08:00',
      location: 'Mountain Trail',
      category: 'outdoor',
      status: 'planned',
      description: 'Early morning hike with stunning views',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20mountain%20hiking%20trail%20with%20scenic%20views%2C%20lush%20green%20nature%2C%20peaceful%20outdoor%20setting%2C%20perfect%20for%20couples%20adventure%2C%20inspiring%20natural%20landscape&width=400&height=300&seq=date6&orientation=landscape'
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Dates', icon: 'ri-calendar-line' },
    { id: 'outdoor', label: 'Outdoor', icon: 'ri-leaf-line' },
    { id: 'home', label: 'At Home', icon: 'ri-home-line' },
    { id: 'adventure', label: 'Adventure', icon: 'ri-map-line' },
    { id: 'learning', label: 'Learning', icon: 'ri-book-line' },
    { id: 'cultural', label: 'Cultural', icon: 'ri-building-line' }
  ];

  const filteredDates = selectedFilter === 'all' 
    ? dates 
    : dates.filter(date => date.category === selectedFilter);

  const addNewDate = (newDate: any) => {
    setDates([...dates, { ...newDate, id: Date.now() }]);
    setShowNewDateModal(false);
  };

  const updateDateStatus = (id: number, status: string) => {
    setDates(dates.map(date => 
      date.id === id ? { ...date, status } : date
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Romantic%20couple%20planning%20dates%20together%20with%20calendar%20and%20notebook%2C%20cozy%20indoor%20setting%2C%20warm%20lighting%2C%20intimate%20planning%20session%2C%20love%20and%20organization%20theme%2C%20soft%20pastel%20colors%2C%20dreamy%20atmosphere&width=1200&height=400&seq=datehero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Date Planner</h1>
          <p className="text-xl opacity-90">Plan magical moments and romantic adventures together</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Upcoming & Past Dates</h2>
            <p className="text-gray-600 mt-2">All our planned adventures and completed memories</p>
          </div>
          <button 
            onClick={() => setShowNewDateModal(true)}
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap flex items-center"
          >
            <i className="ri-add-line mr-2"></i>
            Plan New Date
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
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-calendar-event-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{dates.filter(d => d.status === 'planned').length}</p>
                <p className="text-sm text-gray-600">Upcoming Dates</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{dates.filter(d => d.status === 'completed').length}</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">{dates.length}</p>
                <p className="text-sm text-gray-600">Total Dates</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-star-line text-white text-lg"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-800">4.9</p>
                <p className="text-sm text-gray-600">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDates.map(date => (
            <DateCard 
              key={date.id} 
              date={date} 
              onUpdateStatus={updateDateStatus}
            />
          ))}
        </div>

        {filteredDates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-calendar-line text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No dates found</h3>
            <p className="text-gray-600 mb-6">No dates match your current filter selection.</p>
            <button 
              onClick={() => setSelectedFilter('all')}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Show All Dates
            </button>
          </div>
        )}
      </div>

      {/* New Date Modal */}
      {showNewDateModal && (
        <NewDateModal 
          onClose={() => setShowNewDateModal(false)}
          onAdd={addNewDate}
        />
      )}
    </div>
  );
}