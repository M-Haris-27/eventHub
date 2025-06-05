
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/40">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="font-bold">E</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EventHub
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Join EventHub</h1>
            <p className="text-gray-600 dark:text-gray-300">Create your account to start discovering events</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <Input 
                  type="text" 
                  placeholder="John"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <Input 
                  type="text" 
                  placeholder="Doe"
                  className="rounded-xl"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="john@example.com"
                className="rounded-xl"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <Input 
                type="password" 
                placeholder="Create a password"
                className="rounded-xl"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <Input 
                type="password" 
                placeholder="Confirm your password"
                className="rounded-xl"
              />
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                I agree to the{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
              </span>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl py-3">
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
