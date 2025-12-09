import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.bookConsultation': 'Book Consultation',
    
    // Home page
    'home.hero.subtitle': 'Board-Certified Plastic Surgeon',
    'home.hero.title': 'Exceptional Results Through Precision & Artistry',
    'home.hero.description': 'Experience personalized care and natural-looking results with Dr. Eli Saleh, a fellowship-trained plastic surgeon dedicated to helping you achieve your aesthetic goals.',
    'home.hero.cta': 'Schedule a Consultation',
    'home.hero.viewServices': 'View Services',
    'home.intro.subtitle': 'Welcome',
    'home.intro.title': 'Your Journey to Confidence Begins Here',
    'home.intro.description': 'Dr. Eli Saleh combines artistic vision with surgical precision to deliver results that enhance your natural beauty. Every procedure is customized to your unique anatomy and goals.',
    'home.intro.learnMore': 'Learn More About Dr. Saleh',
    'home.services.subtitle': 'Our Services',
    'home.services.title': 'Comprehensive Plastic Surgery Solutions',
    'home.services.description': 'From facial rejuvenation to body contouring, Dr. Saleh offers a full range of procedures designed to help you look and feel your best.',
    'home.services.viewAll': 'View All Services',
    'home.testimonials.subtitle': 'Patient Stories',
    'home.testimonials.title': 'Hear From Our Patients',
    'home.testimonials.description': 'Read about the experiences of patients who have trusted Dr. Saleh with their aesthetic journey.',
    'home.cta.title': 'Ready to Begin Your Transformation?',
    'home.cta.description': 'Schedule a consultation with Dr. Saleh to discuss your goals and create a personalized treatment plan.',
    'home.cta.button': 'Book Your Consultation',
    
    // About page
    'about.hero.subtitle': 'About Dr. Saleh',
    'about.hero.title': 'Dedicated to Excellence in Plastic Surgery',
    'about.philosophy.subtitle': 'Philosophy',
    'about.philosophy.title': 'A Patient-Centered Approach',
    'about.credentials.subtitle': 'Credentials',
    'about.credentials.title': 'Training & Expertise',
    
    // Services page
    'services.hero.subtitle': 'Our Services',
    'services.hero.title': 'Comprehensive Plastic Surgery Procedures',
    'services.hero.description': 'Dr. Saleh offers a wide range of surgical and non-surgical procedures designed to help you achieve your aesthetic goals with natural-looking results.',
    'services.patientCentered.subtitle': 'Patient-Centered Care',
    'services.patientCentered.title': 'Your Journey With Us',
    'services.cta.title': 'Ready to Learn More?',
    'services.cta.description': 'Schedule a consultation with Dr. Saleh to discuss which procedures might be right for you.',
    'services.cta.button': 'Book a Consultation',
    
    // Contact page
    'contact.hero.subtitle': 'Contact Us',
    'contact.hero.title': 'Schedule Your Consultation',
    'contact.hero.description': 'Take the first step toward achieving your aesthetic goals. Contact our office to schedule a personalized consultation with Dr. Saleh.',
    'contact.form.title': 'Send Us a Message',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.hours': 'Hours',
    'contact.faq.subtitle': 'Consultation Information',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.description': 'Find answers to common questions about consultations with Dr. Saleh.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.followUs': 'Follow Us',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.bookConsultation': 'Prendre rendez-vous',
    
    // Home page
    'home.hero.subtitle': 'Chirurgien Plasticien Certifié',
    'home.hero.title': 'Des Résultats Exceptionnels Grâce à la Précision et l\'Art',
    'home.hero.description': 'Découvrez des soins personnalisés et des résultats naturels avec le Dr Eli Saleh, chirurgien plasticien formé en fellowship, dévoué à vous aider à atteindre vos objectifs esthétiques.',
    'home.hero.cta': 'Planifier une Consultation',
    'home.hero.viewServices': 'Voir les Services',
    'home.intro.subtitle': 'Bienvenue',
    'home.intro.title': 'Votre Parcours Vers la Confiance Commence Ici',
    'home.intro.description': 'Le Dr Eli Saleh combine vision artistique et précision chirurgicale pour offrir des résultats qui subliment votre beauté naturelle. Chaque intervention est personnalisée selon votre anatomie et vos objectifs.',
    'home.intro.learnMore': 'En Savoir Plus Sur le Dr Saleh',
    'home.services.subtitle': 'Nos Services',
    'home.services.title': 'Solutions Complètes en Chirurgie Plastique',
    'home.services.description': 'Du rajeunissement facial au remodelage corporel, le Dr Saleh offre une gamme complète de procédures conçues pour vous aider à paraître et vous sentir au mieux.',
    'home.services.viewAll': 'Voir Tous les Services',
    'home.testimonials.subtitle': 'Témoignages',
    'home.testimonials.title': 'Ce Que Disent Nos Patients',
    'home.testimonials.description': 'Découvrez les expériences des patients qui ont fait confiance au Dr Saleh pour leur parcours esthétique.',
    'home.cta.title': 'Prêt à Commencer Votre Transformation?',
    'home.cta.description': 'Planifiez une consultation avec le Dr Saleh pour discuter de vos objectifs et créer un plan de traitement personnalisé.',
    'home.cta.button': 'Réserver votre consultation',
    
    // About page
    'about.hero.subtitle': 'À Propos du Dr Saleh',
    'about.hero.title': 'Dédié à l\'Excellence en Chirurgie Plastique',
    'about.philosophy.subtitle': 'Philosophie',
    'about.philosophy.title': 'Une Approche Centrée sur le Patient',
    'about.credentials.subtitle': 'Qualifications',
    'about.credentials.title': 'Formation et Expertise',
    
    // Services page
    'services.hero.subtitle': 'Nos Services',
    'services.hero.title': 'Procédures Complètes en Chirurgie Plastique',
    'services.hero.description': 'Le Dr Saleh offre une large gamme de procédures chirurgicales et non chirurgicales conçues pour vous aider à atteindre vos objectifs esthétiques avec des résultats naturels.',
    'services.patientCentered.subtitle': 'Soins Centrés sur le Patient',
    'services.patientCentered.title': 'Votre Parcours Avec Nous',
    'services.cta.title': 'Prêt à En Savoir Plus?',
    'services.cta.description': 'Planifiez une consultation avec le Dr Saleh pour discuter des procédures qui pourraient vous convenir.',
    'services.cta.button': 'Prendre rendez-vous',
    
    // Contact page
    'contact.hero.subtitle': 'Contactez-Nous',
    'contact.hero.title': 'Planifiez Votre Consultation',
    'contact.hero.description': 'Faites le premier pas vers vos objectifs esthétiques. Contactez notre bureau pour planifier une consultation personnalisée avec le Dr Saleh.',
    'contact.form.title': 'Envoyez-Nous un Message',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Courriel',
    'contact.info.location': 'Adresse',
    'contact.info.hours': 'Heures',
    'contact.faq.subtitle': 'Information sur les Consultations',
    'contact.faq.title': 'Questions Fréquentes',
    'contact.faq.description': 'Trouvez des réponses aux questions courantes sur les consultations avec le Dr Saleh.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.followUs': 'Suivez-Nous',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.readMore': 'Lire la Suite',
    'common.viewAll': 'Voir Tout',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
