
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Join the Community?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Start discovering amazing events and connecting with people who share your interests
        </p>
        <Button 
          onClick={() => navigate('/events')}
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl text-lg"
        >
          Browse All Events
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
