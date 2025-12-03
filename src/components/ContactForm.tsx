import React, { useState } from 'react';
import Button from './Button';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };
  const serviceOptions = [{
    value: '',
    label: 'Select a service'
  }, {
    value: 'Facial Procedures',
    label: 'Facial Procedures'
  }, {
    value: 'Breast Procedures',
    label: 'Breast Procedures'
  }, {
    value: 'Body Procedures',
    label: 'Body Procedures'
  }, {
    value: 'Non-Surgical Procedures',
    label: 'Non-Surgical Procedures'
  }, {
    value: 'Reconstructive Surgery',
    label: 'Reconstructive Surgery'
  }, {
    value: 'Other',
    label: 'Other'
  }];
  if (submitted) {
    return <div className="bg-green-50 text-green-700 p-6 rounded-md border border-green-100 text-center">
        <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="mb-4">
          Your message has been received. We'll contact you shortly to schedule
          your consultation.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service of Interest <span className="text-red-500">*</span>
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-white">
            {serviceOptions.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black" placeholder="Please include any specific concerns or questions you have." />
      </div>
      <div className="text-sm text-gray-600">
        <p>
          Your privacy is important to us. All information provided will be kept
          confidential.
        </p>
      </div>
      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </Button>
    </form>;
};
export default ContactForm;