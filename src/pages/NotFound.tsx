import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Detect French routes from URL prefix for proper 404 language handling
  const isFrenchRoute = location.pathname.startsWith('/fr');
  const displayLanguage = isFrenchRoute ? 'fr' : language;
  
  const homePath = displayLanguage === 'fr' ? '/fr' : '/';
  const contactPath = displayLanguage === 'fr' ? '/fr/contact' : '/contact';
  const content = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      returnHome: 'Return to Home',
      contactUs: 'Contact Us',
    },
    fr: {
      title: '404',
      subtitle: 'Page Non Trouvée',
      description: "La page que vous recherchez n'existe pas ou a été déplacée.",
      returnHome: "Retour à l'Accueil",
      contactUs: 'Contactez-Nous',
    },
  };

  const t = content[displayLanguage];

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-light text-[#141926] mb-4">{t.title}</h1>
        <h2 className="text-3xl font-light text-[#141926] mb-6">
          {t.subtitle}
        </h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8">
          {t.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to={homePath}>
            {t.returnHome}
          </Button>
          <Button to={contactPath} variant="outline">
            {t.contactUs}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
