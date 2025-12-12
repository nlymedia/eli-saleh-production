import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refs for custom validation messages
  const nameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validationMessages = isFr ? {
    required: 'Ce champ est requis.',
    email: 'Veuillez entrer une adresse courriel valide.',
    selectService: 'Veuillez sélectionner un service.'
  } : {
    required: 'This field is required.',
    email: 'Please enter a valid email address.',
    selectService: 'Please select a service.'
  };

  // Set custom validation messages
  useEffect(() => {
    const setValidationMessage = (ref: React.RefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, message: string) => {
      if (ref.current) {
        ref.current.setCustomValidity('');
        ref.current.addEventListener('invalid', () => {
          ref.current?.setCustomValidity(message);
        });
        ref.current.addEventListener('input', () => {
          ref.current?.setCustomValidity('');
        });
      }
    };

    if (isFr) {
      setValidationMessage(firstNameRef, validationMessages.required);
      setValidationMessage(lastNameRef, validationMessages.required);
    } else {
      setValidationMessage(nameRef, validationMessages.required);
    }
    setValidationMessage(emailRef, validationMessages.email);
    setValidationMessage(phoneRef, validationMessages.required);
    setValidationMessage(serviceRef, validationMessages.selectService);
    setValidationMessage(messageRef, validationMessages.required);
  }, [isFr, validationMessages]);

  const content = isFr ? {
    firstName: 'Prénom',
    lastName: 'Nom',
    fullName: 'Nom complet',
    email: 'Adresse courriel',
    phone: 'Numéro de téléphone',
    serviceOfInterest: 'Service d\'intérêt',
    selectService: 'Sélectionnez un service',
    facialProcedures: 'Procédures du visage',
    breastProcedures: 'Procédures mammaires',
    bodyProcedures: 'Procédures corporelles',
    nonSurgicalProcedures: 'Procédures non chirurgicales',
    reconstructiveSurgery: 'Chirurgie reconstructrice',
    other: 'Autre',
    message: 'Message',
    messagePlaceholder: 'Veuillez inclure toutes préoccupations ou questions spécifiques.',
    privacyNotice: 'Votre vie privée est importante pour nous. Toutes les informations fournies resteront confidentielles.',
    submitting: 'Envoi en cours...',
    requestConsultation: 'Demander une consultation',
    thankYou: 'Merci!',
    successMessage: 'Votre message a été reçu. Nous vous contacterons sous peu pour planifier votre consultation.',
    sendAnother: 'Envoyer un autre message'
  } : {
    firstName: 'First Name',
    lastName: 'Last Name',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    serviceOfInterest: 'Service of Interest',
    selectService: 'Select a service',
    facialProcedures: 'Facial Procedures',
    breastProcedures: 'Breast Procedures',
    bodyProcedures: 'Body Procedures',
    nonSurgicalProcedures: 'Non-Surgical Procedures',
    reconstructiveSurgery: 'Reconstructive Surgery',
    other: 'Other',
    message: 'Message',
    messagePlaceholder: 'Please include any specific concerns or questions you have.',
    privacyNotice: 'Your privacy is important to us. All information provided will be kept confidential.',
    submitting: 'Submitting...',
    requestConsultation: 'Request Consultation',
    thankYou: 'Thank You!',
    successMessage: 'Your message has been received. We\'ll contact you shortly to schedule your consultation.',
    sendAnother: 'Send Another Message'
  };

  // Format phone number: XXX-XXX-XXXX
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: isFr ? undefined : formData.name,
          firstName: isFr ? formData.firstName : undefined,
          lastName: isFr ? formData.lastName : undefined,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (err) {
      setError(isFr 
        ? 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.'
        : 'An error occurred. Please try again or contact us by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: '', label: content.selectService },
    { value: 'Facial Procedures', label: content.facialProcedures },
    { value: 'Breast Procedures', label: content.breastProcedures },
    { value: 'Body Procedures', label: content.bodyProcedures },
    { value: 'Non-Surgical Procedures', label: content.nonSurgicalProcedures },
    { value: 'Reconstructive Surgery', label: content.reconstructiveSurgery },
    { value: 'Other', label: content.other }
  ];

  if (submitted) {
    return (
      <div className="bg-[#141926]/5 text-[#141926] p-6 rounded-md border border-[#141926]/10 text-center">
        <svg className="w-12 h-12 mx-auto text-[#141926] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">{content.thankYou}</h3>
        <p className="mb-4">{content.successMessage}</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          {content.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isFr ? (
        <>
          {/* French layout: Row 1 - Nom + Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                {content.lastName} <span className="text-red-500">*</span>
              </label>
              <input
                ref={lastNameRef}
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                {content.firstName} <span className="text-red-500">*</span>
              </label>
              <input
                ref={firstNameRef}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          {/* French layout: Row 2 - Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {content.phone} <span className="text-red-500">*</span>
              </label>
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength={12}
                inputMode="numeric"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {content.email} <span className="text-red-500">*</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          {/* French layout: Row 3 - Service (full width) */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              {content.serviceOfInterest} <span className="text-red-500">*</span>
            </label>
            <select
              ref={serviceRef}
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-white"
            >
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          {/* English layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {content.fullName} <span className="text-red-500">*</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {content.email} <span className="text-red-500">*</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {content.phone} <span className="text-red-500">*</span>
              </label>
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength={12}
                inputMode="numeric"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                {content.serviceOfInterest} <span className="text-red-500">*</span>
              </label>
              <select
                ref={serviceRef}
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-white"
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {content.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          placeholder={content.messagePlaceholder}
        />
      </div>
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-100">
          {error}
        </div>
      )}
      <div className="text-sm text-gray-600">
        <p>{content.privacyNotice}</p>
      </div>
      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? content.submitting : content.requestConsultation}
      </Button>
    </form>
  );
};

export default ContactForm;
