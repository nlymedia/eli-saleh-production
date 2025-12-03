import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
  image?: string;
}
const ServiceCard = ({
  title,
  description,
  icon,
  link,
  className = '',
  image
}: ServiceCardProps) => {
  if (image) {
    return <div className={`relative group overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${className}`}>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-light text-white mb-2">{title}</h3>
          {link && <Link to={link} className="inline-flex items-center text-white font-medium group-hover:translate-x-1 transition-transform">
              Learn more <ArrowRightIcon size={16} className="ml-2" />
            </Link>}
        </div>
      </div>;
  }
  return <div className={`bg-white p-8 rounded-md shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 group ${className}`}>
      <div className="mb-5 text-black w-14 h-14 rounded-md flex items-center justify-center border border-gray-200">
        {icon}
      </div>
      <h3 className="text-xl font-light mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      {link && <Link to={link} className="inline-flex items-center text-black font-medium hover:text-gray-700 group-hover:translate-x-1 transition-transform">
          Learn more <ArrowRightIcon size={16} className="ml-2" />
        </Link>}
    </div>;
};
export default ServiceCard;