import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedinIcon, FacebookIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#141926] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div>
            <img src="/LOGO_black-Photoroom_1.png" alt="Dr. Eli Saleh Logo" className="h-24" />
          </div>
          {/* Address */}
          <div className="text-sm">
            <p className="mb-1">123 Medical Avenue, Suite 500</p>
            <p>Montréal, QC H1A 1A1</p>
          </div>
          {/* Contact */}
          <div className="text-sm">
            <p className="mb-1"><a href="mailto:info@elisalehmd.com" className="hover:underline">info@elisalehmd.com</a></p>
            <p><a href="tel:+15144005124" className="hover:underline">(514) 400-5124</a></p>
          </div>
          {/* Social Media (moved to replace Hours) */}
          <div className="text-sm">
            <div className="flex space-x-4 mb-1">
              <a href="https://instagram.com" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          {/* Copyright (moved to where social media was) */}
          <div className="text-sm text-gray-400">
            <p>Copyright ©{currentYear} Dr. Eli Saleh. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;