
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {event.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 rounded-xl transition-all hover:scale-105">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
