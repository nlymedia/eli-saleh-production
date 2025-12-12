import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-md p-0.5 text-base">
      <button
        onClick={() => setLanguage('en')}
        className={`w-12 py-2 rounded transition-all duration-200 text-center ${
          language === 'en' 
            ? 'bg-black text-white font-medium' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`w-12 py-2 rounded transition-all duration-200 text-center ${
          language === 'fr' 
            ? 'bg-black text-white font-medium' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
