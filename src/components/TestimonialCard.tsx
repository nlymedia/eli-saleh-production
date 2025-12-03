import React from 'react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  image?: string;
  className?: string;
}
const TestimonialCard = ({
  quote,
  author,
  position,
  image,
  className = ''
}: TestimonialCardProps) => {
  return <div className={`bg-white p-8 rounded-md shadow-sm border border-gray-100 ${className}`}>
      <div className="mb-6">
        {/* Quote icon */}
        <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1 0.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1 0.9-2 2-2V8z" />
        </svg>
        <p className="text-gray-700 italic mb-6">{quote}</p>
      </div>
      <div className="flex items-center">
        {image ? <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" /> : <div className="w-12 h-12 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-xl font-medium">{author.charAt(0)}</span>
          </div>}
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          {position && <p className="text-gray-500 text-sm">{position}</p>}
        </div>
      </div>
    </div>;
};
export default TestimonialCard;