
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/40">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="rounded-xl" />
                    <Input placeholder="Last Name" className="rounded-xl" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="rounded-xl" />
                  <Input placeholder="Subject" className="rounded-xl" />
                  <textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl py-3">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/40">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">hello@eventhub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">123 Event Street, San Francisco, CA 94102</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Contact;
