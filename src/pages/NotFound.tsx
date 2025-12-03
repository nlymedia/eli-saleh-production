import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { HomeIcon } from 'lucide-react';
const NotFound = () => {
  return <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-light text-black mb-4">404</h1>
        <h2 className="text-3xl font-light text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/" icon={<HomeIcon size={16} />}>
            Return to Home
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </div>;
};
export default NotFound;