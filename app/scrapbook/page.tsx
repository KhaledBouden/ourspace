
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function Scrapbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreating, setIsCreating] = useState(false);
  const [newAlbum, setNewAlbum] = useState({ title: '', description: '', category: 'memories' });

  const categories = [
    { id: 'all', name: 'All Albums', color: 'gray' },
    { id: 'memories', name: 'Memories', color: 'pink' },
    { id: 'dates', name: 'Dates', color: 'purple' },
    { id: 'adventures', name: 'Adventures', color: 'blue' },
    { id: 'milestones', name: 'Milestones', color: 'green' }
  ];

  const albums = [
    {
      id: 1,
      title: 'Our First Year',
      description: 'All the beautiful moments from our first year together',
      category: 'memories',
      photoCount: 47,
      coverImage: 'https://readdy.ai/api/search-image?query=Young%20couple%20laughing%20together%20in%20a%20cozy%20cafe%20with%20warm%20lighting%2C%20candid%20moment%2C%20romantic%20atmosphere%2C%20soft%20bokeh%20background%2C%20natural%20expressions%2C%20intimate%20setting%2C%20golden%20hour%20mood%2C%20perfect%20for%20scrapbook%20cover&width=400&height=300&seq=album1&orientation=landscape',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Beach Adventure',
      description: 'Our amazing weekend getaway to the coast',
      category: 'adventures',
      photoCount: 32,
      coverImage: 'https://readdy.ai/api/search-image?query=Beautiful%20beach%20scene%20with%20couple%20walking%20hand%20in%20hand%20during%20sunset%2C%20romantic%20silhouette%2C%20golden%20sand%2C%20peaceful%20waves%2C%20dreamy%20atmosphere%2C%20perfect%20vacation%20moment%2C%20warm%20colors&width=400&height=300&seq=album2&orientation=landscape',
      date: '2024-02-20'
    },
    {
      id: 3,
      title: 'Date Night Collection',
      description: 'Our favorite dinner dates and romantic evenings',
      category: 'dates',
      photoCount: 28,
      coverImage: 'https://readdy.ai/api/search-image?query=Elegant%20restaurant%20table%20setting%20with%20candles%2C%20wine%20glasses%2C%20and%20romantic%20ambiance%2C%20intimate%20dining%20atmosphere%2C%20soft%20lighting%2C%20beautiful%20flowers%2C%20perfect%20for%20date%20night%20memories&width=400&height=300&seq=album3&orientation=landscape',
      date: '2024-03-10'
    },
    {
      id: 4,
      title: 'Six Month Milestone',
      description: 'Celebrating our 6 months together',
      category: 'milestones',
      photoCount: 19,
      coverImage: 'https://readdy.ai/api/search-image?query=Romantic%20celebration%20scene%20with%20balloons%2C%20flowers%2C%20and%20champagne%2C%20milestone%20celebration%2C%20elegant%20decoration%2C%20warm%20lighting%2C%20intimate%20celebration%2C%20love%20and%20happiness&width=400&height=300&seq=album4&orientation=landscape',
      date: '2024-03-25'
    },
    {
      id: 5,
      title: 'Hiking Adventures',
      description: 'Mountain trails and nature walks together',
      category: 'adventures',
      photoCount: 41,
      coverImage: 'https://readdy.ai/api/search-image?query=Couple%20hiking%20on%20mountain%20trail%20with%20backpacks%2C%20beautiful%20mountain%20vista%2C%20adventure%20setting%2C%20natural%20landscape%2C%20outdoor%20activities%2C%20scenic%20view%2C%20healthy%20lifestyle&width=400&height=300&seq=album5&orientation=landscape',
      date: '2024-04-08'
    },
    {
      id: 6,
      title: 'Cozy Home Moments',
      description: 'Quiet evenings and lazy mornings at home',
      category: 'memories',
      photoCount: 35,
      coverImage: 'https://readdy.ai/api/search-image?query=Cozy%20living%20room%20with%20soft%20blankets%2C%20warm%20lighting%2C%20books%20and%20coffee%2C%20comfortable%20home%20atmosphere%2C%20intimate%20domestic%20moments%2C%20hygge%20style%2C%20peaceful%20setting&width=400&height=300&seq=album6&orientation=landscape',
      date: '2024-04-15'
    }
  ];

  const filteredAlbums = selectedCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  const handleCreateAlbum = () => {
    if (newAlbum.title && newAlbum.description) {
      // Album creation logic would go here
      setIsCreating(false);
      setNewAlbum({ title: '', description: '', category: 'memories' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Scrapbook</h1>
            <p className="text-gray-600">Beautiful memories captured in photo albums</p>
          </div>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap flex items-center"
          >
            <i className="ri-add-line mr-2"></i>
            Create Album
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-pink-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  {album.photoCount} photos
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{album.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    album.category === 'memories' ? 'bg-pink-100 text-pink-600' :
                    album.category === 'dates' ? 'bg-purple-100 text-purple-600' :
                    album.category === 'adventures' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {categories.find(c => c.id === album.category)?.name}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{album.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(album.date).toLocaleDateString()}
                  </span>
                  <Link href={`/scrapbook/${album.id}`} className="text-pink-600 hover:text-pink-700 font-medium cursor-pointer">
                    View Album
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAlbums.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No albums found</h3>
            <p className="text-gray-500 mb-6">Create your first album to get started</p>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Create Album
            </button>
          </div>
        )}
      </div>

      {/* Create Album Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Create New Album</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Album Title</label>
                <input
                  type="text"
                  value={newAlbum.title}
                  onChange={(e) => setNewAlbum({...newAlbum, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter album title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newAlbum.description}
                  onChange={(e) => setNewAlbum({...newAlbum, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Describe your album"
                  rows={3}
                  maxLength={500}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newAlbum.category}
                  onChange={(e) => setNewAlbum({...newAlbum, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 pr-8"
                >
                  <option value="memories">Memories</option>
                  <option value="dates">Dates</option>
                  <option value="adventures">Adventures</option>
                  <option value="milestones">Milestones</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setIsCreating(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAlbum}
                className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Create Album
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
