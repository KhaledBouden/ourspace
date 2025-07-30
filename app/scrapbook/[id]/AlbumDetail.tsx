
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

interface AlbumDetailProps {
  albumId: string;
}

export default function AlbumDetail({ albumId }: AlbumDetailProps) {
  const router = useRouter();
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    caption: '',
    date: new Date().toISOString().split('T')[0]
  });

  const albums = {
    '1': {
      title: 'Our First Year',
      description: 'All the beautiful moments from our first year together',
      category: 'memories',
      date: '2024-01-15',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Young%20couple%20laughing%20together%20in%20a%20cozy%20cafe%20with%20warm%20lighting%2C%20candid%20moment%2C%20romantic%20atmosphere%2C%20soft%20bokeh%20background%2C%20natural%20expressions%2C%20intimate%20setting%2C%20golden%20hour%20mood%2C%20perfect%20for%20scrapbook%20cover&width=500&height=400&seq=photo1&orientation=landscape',
          caption: 'Our first coffee date - I knew you were special',
          date: '2023-01-15'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Couple%20walking%20hand%20in%20hand%20through%20a%20beautiful%20park%20in%20spring%2C%20blooming%20flowers%2C%20romantic%20stroll%2C%20peaceful%20atmosphere%2C%20natural%20lighting%2C%20sweet%20moment%2C%20love%20in%20bloom&width=500&height=400&seq=photo2&orientation=landscape',
          caption: 'Spring walks became our favorite tradition',
          date: '2023-03-22'
        },
        {
          id: 3,
          url: 'https://readdy.ai/api/search-image?query=Romantic%20dinner%20at%20home%20with%20candles%2C%20homemade%20meal%2C%20intimate%20setting%2C%20cozy%20atmosphere%2C%20soft%20lighting%2C%20wine%20glasses%2C%20love%20and%20togetherness&width=500&height=400&seq=photo3&orientation=landscape',
          caption: 'You cooked for me for the first time',
          date: '2023-05-10'
        },
        {
          id: 4,
          url: 'https://readdy.ai/api/search-image?query=Couple%20dancing%20in%20living%20room%2C%20romantic%20moment%2C%20soft%20music%2C%20intimate%20atmosphere%2C%20warm%20lighting%2C%20spontaneous%20dance%2C%20love%20and%20joy&width=500&height=400&seq=photo4&orientation=landscape',
          caption: 'Dancing in the living room to our song',
          date: '2023-07-18'
        },
        {
          id: 5,
          url: 'https://readdy.ai/api/search-image?query=Couple%20watching%20sunset%20together%2C%20romantic%20silhouette%2C%20peaceful%20moment%2C%20beautiful%20colors%2C%20intimate%20setting%2C%20golden%20hour%2C%20love%20and%20serenity&width=500&height=400&seq=photo5&orientation=landscape',
          caption: 'Watching the sunset on our anniversary',
          date: '2023-09-15'
        },
        {
          id: 6,
          url: 'https://readdy.ai/api/search-image?query=Couple%20baking%20together%20in%20kitchen%2C%20flour%20on%20faces%2C%20laughing%2C%20messy%20but%20fun%2C%20domestic%20bliss%2C%20warm%20lighting%2C%20love%20and%20laughter&width=500&height=400&seq=photo6&orientation=landscape',
          caption: 'Baking disaster turned into the best day',
          date: '2023-11-03'
        }
      ]
    },
    '2': {
      title: 'Beach Adventure',
      description: 'Our amazing weekend getaway to the coast',
      category: 'adventures',
      date: '2024-02-20',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Beautiful%20beach%20scene%20with%20crystal%20clear%20water%2C%20soft%20sand%2C%20romantic%20seaside%20setting%2C%20peaceful%20ocean%20waves%2C%20perfect%20for%20couples%20getaway%2C%20dreamy%20coastal%20atmosphere&width=500&height=400&seq=beach1&orientation=landscape',
          caption: 'First glimpse of paradise',
          date: '2024-02-20'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Couple%20building%20sandcastle%20on%20beach%2C%20playful%20moment%2C%20sunny%20day%2C%20ocean%20waves%2C%20fun%20and%20laughter%2C%20romantic%20beach%20activity&width=500&height=400&seq=beach2&orientation=landscape',
          caption: 'Our sandcastle masterpiece',
          date: '2024-02-20'
        },
        {
          id: 3,
          url: 'https://readdy.ai/api/search-image?query=Romantic%20beach%20picnic%20with%20basket%2C%20blanket%2C%20sunset%20lighting%2C%20intimate%20setting%2C%20ocean%20view%2C%20peaceful%20atmosphere%2C%20love%20and%20tranquility&width=500&height=400&seq=beach3&orientation=landscape',
          caption: 'Sunset picnic by the waves',
          date: '2024-02-21'
        },
        {
          id: 4,
          url: 'https://readdy.ai/api/search-image?query=Couple%20walking%20along%20shoreline%20at%20sunset%2C%20romantic%20silhouette%2C%20footprints%20in%20sand%2C%20peaceful%20waves%2C%20golden%20hour%2C%20love%20and%20serenity&width=500&height=400&seq=beach4&orientation=landscape',
          caption: 'Evening stroll along the shore',
          date: '2024-02-21'
        }
      ]
    },
    '3': {
      title: 'Date Night Collection',
      description: 'Our favorite dinner dates and romantic evenings',
      category: 'dates',
      date: '2024-03-10',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Elegant%20restaurant%20table%20setting%20with%20candles%2C%20wine%20glasses%2C%20and%20romantic%20ambiance%2C%20intimate%20dining%20atmosphere%2C%20soft%20lighting%2C%20beautiful%20flowers%2C%20perfect%20for%20date%20night%20memories&width=500&height=400&seq=dinner1&orientation=landscape',
          caption: 'Our favorite Italian restaurant',
          date: '2024-01-14'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Couple%20sharing%20dessert%20at%20romantic%20restaurant%2C%20intimate%20moment%2C%20warm%20lighting%2C%20sweet%20treats%2C%20love%20and%20happiness%2C%20perfect%20date%20night&width=500&height=400&seq=dinner2&orientation=landscape',
          caption: 'Sharing tiramisu like always',
          date: '2024-02-14'
        },
        {
          id: 3,
          url: 'https://readdy.ai/api/search-image?query=Rooftop%20dinner%20with%20city%20lights%2C%20romantic%20atmosphere%2C%20elegant%20setting%2C%20night%20skyline%2C%20intimate%20dining%2C%20sophisticated%20ambiance&width=500&height=400&seq=dinner3&orientation=landscape',
          caption: 'Rooftop dinner with city views',
          date: '2024-03-10'
        }
      ]
    },
    '4': {
      title: 'Six Month Milestone',
      description: 'Celebrating our 6 months together',
      category: 'milestones',
      date: '2024-03-25',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Romantic%20celebration%20scene%20with%20balloons%2C%20flowers%2C%20and%20champagne%2C%20milestone%20celebration%2C%20elegant%20decoration%2C%20warm%20lighting%2C%20intimate%20celebration%2C%20love%20and%20happiness&width=500&height=400&seq=milestone1&orientation=landscape',
          caption: 'Six months of pure happiness',
          date: '2024-03-25'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20roses%20and%20gift%20box%2C%20romantic%20surprise%2C%20elegant%20presentation%2C%20love%20token%2C%20special%20occasion%2C%20thoughtful%20gesture&width=500&height=400&seq=milestone2&orientation=landscape',
          caption: 'You surprised me with roses',
          date: '2024-03-25'
        }
      ]
    },
    '5': {
      title: 'Hiking Adventures',
      description: 'Mountain trails and nature walks together',
      category: 'adventures',
      date: '2024-04-08',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Couple%20hiking%20on%20mountain%20trail%20with%20backpacks%2C%20beautiful%20mountain%20vista%2C%20adventure%20setting%2C%20natural%20landscape%2C%20outdoor%20activities%2C%20scenic%20view%2C%20healthy%20lifestyle&width=500&height=400&seq=hiking1&orientation=landscape',
          caption: 'Conquering the mountain together',
          date: '2024-04-08'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Beautiful%20mountain%20summit%20view%20with%20couple%20celebrating%2C%20achievement%20moment%2C%20stunning%20landscape%2C%20clear%20sky%2C%20adventure%20success%2C%20natural%20beauty&width=500&height=400&seq=hiking2&orientation=landscape',
          caption: 'Made it to the summit!',
          date: '2024-04-08'
        },
        {
          id: 3,
          url: 'https://readdy.ai/api/search-image?query=Couple%20resting%20by%20mountain%20stream%2C%20peaceful%20nature%20setting%2C%20clear%20water%2C%20rocks%2C%20forest%20background%2C%20tranquil%20moment%2C%20outdoor%20relaxation&width=500&height=400&seq=hiking3&orientation=landscape',
          caption: 'Rest stop by the stream',
          date: '2024-04-08'
        }
      ]
    },
    '6': {
      title: 'Cozy Home Moments',
      description: 'Quiet evenings and lazy mornings at home',
      category: 'memories',
      date: '2024-04-15',
      photos: [
        {
          id: 1,
          url: 'https://readdy.ai/api/search-image?query=Cozy%20living%20room%20with%20soft%20blankets%2C%20warm%20lighting%2C%20books%20and%20coffee%2C%20comfortable%20home%20atmosphere%2C%20intimate%20domestic%20moments%2C%20hygge%20style%2C%20peaceful%20setting&width=500&height=400&seq=home1&orientation=landscape',
          caption: 'Sunday morning coffee ritual',
          date: '2024-04-15'
        },
        {
          id: 2,
          url: 'https://readdy.ai/api/search-image?query=Couple%20reading%20together%20on%20couch%2C%20cozy%20atmosphere%2C%20warm%20lighting%2C%20domestic%20bliss%2C%20quiet%20moment%2C%20books%20and%20relaxation%2C%20intimate%20setting&width=500&height=400&seq=home2&orientation=landscape',
          caption: 'Reading together in silence',
          date: '2024-04-16'
        },
        {
          id: 3,
          url: 'https://readdy.ai/api/search-image?query=Homemade%20breakfast%20in%20bed%2C%20romantic%20gesture%2C%20cozy%20bedroom%2C%20morning%20light%2C%20intimate%20moment%2C%20love%20and%20care%2C%20domestic%20happiness&width=500&height=400&seq=home3&orientation=landscape',
          caption: 'Breakfast in bed surprise',
          date: '2024-04-17'
        }
      ]
    }
  };

  const album = albums[albumId as keyof typeof albums];

  if (!album) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Album Not Found</h1>
            <button
              onClick={() => router.push('/scrapbook')}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Back to Scrapbook
            </button>
          </div>
        </div>
      </div>
    );
  }

  const openFullscreen = (index: number) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % album.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + album.photos.length) % album.photos.length);
  };

  const handleAddPhoto = () => {
    if (newPhoto.caption.trim()) {
      // Photo upload logic would go here
      // For now, we'll just close the modal
      setIsAddingPhoto(false);
      setNewPhoto({
        caption: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Album Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={() => router.push('/scrapbook')}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer mr-4"
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{album.title}</h1>
              <p className="text-gray-600">{album.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAddingPhoto(true)}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap flex items-center"
            >
              <i className="ri-add-line mr-2"></i>
              Add Photos
            </button>
            <div className="text-right">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                album.category === 'memories' ? 'bg-pink-100 text-pink-600' :
                album.category === 'dates' ? 'bg-purple-100 text-purple-600' :
                album.category === 'adventures' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}>
                {album.category}
              </div>
              <p className="text-sm text-gray-500">{album.photos.length} photos</p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => openFullscreen(index)}
            >
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <i className="ri-eye-line text-white text-2xl opacity-0 hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-medium mb-2">{photo.caption}</p>
                <p className="text-sm text-gray-500">
                  {new Date(photo.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {album.photos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-image-line text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No photos yet</h3>
            <p className="text-gray-600 mb-6">Start adding photos to this album</p>
            <button
              onClick={() => setIsAddingPhoto(true)}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Add Your First Photo
            </button>
          </div>
        )}
      </div>

      {/* Add Photo Modal */}
      {isAddingPhoto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Add New Photo</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors cursor-pointer">
                  <i className="ri-upload-cloud-2-line text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      // File upload logic would go here
                      console.log('File selected:', e.target.files?.[0]);
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
                <input
                  type="text"
                  value={newPhoto.caption}
                  onChange={(e) => setNewPhoto({...newPhoto, caption: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Describe this beautiful moment..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={newPhoto.date}
                  onChange={(e) => setNewPhoto({...newPhoto, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setIsAddingPhoto(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPhoto}
                className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Add Photo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer z-10"
            >
              <i className="ri-close-line text-white text-xl"></i>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-white text-xl"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-white text-xl"></i>
            </button>

            {/* Image */}
            <img
              src={album.photos[currentImageIndex].url}
              alt={album.photos[currentImageIndex].caption}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="font-medium mb-1">{album.photos[currentImageIndex].caption}</h3>
              <p className="text-sm opacity-80">
                {new Date(album.photos[currentImageIndex].date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-xs opacity-60 mt-1">
                {currentImageIndex + 1} of {album.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
