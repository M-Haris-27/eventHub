
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';
import SearchBar from '@/components/SearchBar';
import FilterDropdown from '@/components/FilterDropdown';
import Statistics from '@/components/Statistics';
import CTASection from '@/components/CTASection';
import { ChevronUp } from 'lucide-react';

const events = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "June 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    description: "Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and hands-on workshops.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    category: "Technology"
  },
  {
    id: 2,
    name: "Summer Music Festival",
    date: "July 20, 2025",
    time: "2:00 PM - 11:00 PM",
    location: "Central Park, New York",
    description: "Experience an amazing lineup of artists performing live in the heart of the city. Food trucks, art installations, and more!",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    category: "Music"
  },
  {
    id: 3,
    name: "Startup Pitch Night",
    date: "June 25, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Innovation Hub, Austin",
    description: "Watch promising startups pitch their ideas to investors and industry experts. Network with entrepreneurs and venture capitalists.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    category: "Business"
  },
  {
    id: 4,
    name: "Art & Design Workshop",
    date: "July 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Creative Studio, Los Angeles",
    description: "Learn from professional artists and designers in this hands-on workshop covering digital art, illustration, and design thinking.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    category: "Art"
  },
  {
    id: 5,
    name: "Food & Wine Tasting",
    date: "August 10, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "Vineyard Estate, Napa Valley",
    description: "Indulge in exquisite cuisine paired with premium wines. Meet renowned chefs and sommeliers in this exclusive tasting event.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    category: "Food"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      event.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Navbar />
      
      {/* Hero Section - Increased padding top for more gap from navbar */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
              Discover Events Near You
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our community and never miss out on amazing local events happening around you
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Search Section - Made search bar wider and added more spacing */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="w-full max-w-2xl">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            <FilterDropdown selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover handpicked events that match your interests and connect with like-minded people
            </p>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No events found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="font-bold">E</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EventHub
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting people through amazing events
          </p>
          <p className="text-sm text-gray-500">
            © 2025 EventHub. Built for Dynamics 360 Internship Case Study.
          </p>
        </div>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
};

export default Index;
