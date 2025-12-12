import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Redirect to correct language URL when language changes
  useEffect(() => {
    const pathMappings: Record<string, Record<string, string>> = {
      en: {
        '/fr': '/',
        '/fr/a-propos': '/about',
        '/fr/services': '/services',
        '/fr/contact': '/contact',
      },
      fr: {
        '/': '/fr',
        '/about': '/fr/a-propos',
        '/services': '/fr/services',
        '/contact': '/fr/contact',
      }
    };

    const currentPath = location.pathname;
    const mappings = pathMappings[language];
    
    if (mappings && mappings[currentPath]) {
      navigate(mappings[currentPath], { replace: true });
    }
  }, [language, location.pathname, navigate]);

  const navLinks = language === 'fr' ? [
    { name: t('nav.home'), path: '/fr' },
    { name: t('nav.about'), path: '/fr/a-propos' },
    { name: t('nav.services'), path: '/fr/services' },
    { name: t('nav.contact'), path: '/fr/contact' },
  ] : [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const contactPath = language === 'fr' ? '/fr/contact' : '/contact';

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/LOGO_white_-Photoroom_1.png" alt="Dr. Eli Saleh" className="h-14" />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-all hover:text-black relative group ${location.pathname === link.path ? 'text-black' : 'text-gray-600'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left transition-all duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </nav>
        {/* Language Selector & CTA Button - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <LanguageSelector />
          <Link to={contactPath} className="bg-[#141926] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e2438] transition-all duration-300">
            {t('nav.bookConsultation')}
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 hover:text-black focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-5">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xl font-medium py-3 transition-all hover:text-black border-b border-gray-100 ${location.pathname === link.path ? 'text-black' : 'text-gray-600'}`} 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-2 w-fit">
            <LanguageSelector />
          </div>
          <Link 
            to={contactPath} 
            className="bg-[#141926] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e2438] transition-all duration-300 text-center mt-2" 
            onClick={() => setIsOpen(false)}
          >
            {t('nav.bookConsultation')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;