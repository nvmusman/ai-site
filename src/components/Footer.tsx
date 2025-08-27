import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-300">WoodenLay</h3>
            <p className="text-amber-100 leading-relaxed">
              Crafting premium wooden furniture and lighting with passion, 
              precision, and a commitment to sustainable practices since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-amber-100 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="text-amber-100 hover:text-white transition-colors duration-200"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-amber-100 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-amber-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Wooden Lamps
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Dining Tables
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Coffee Tables
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Bedroom Furniture
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-amber-100">Link Band Road, Bhogiwal Road</p>
                  <p className="text-amber-100">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <p className="text-amber-100">+92 327 3939393</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <p className="text-amber-100">woodenlay@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2025 WoodenLay. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-200">
                Shipping Info
              </a>
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-200">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;