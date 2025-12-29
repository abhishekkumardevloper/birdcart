import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Birdcarts
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Birdcarts brings you premium socks and orthopedic essentials designed for comfort, style, and foot health. We're committed to delivering comfort, durability, and customer care you can trust.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>83/10, Chetan Vihar, Gopal Nagar Extension, Najafgarh, New Delhi-110043</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919546620662" className="hover:text-emerald-600 transition-colors">
                  +91 9546620662
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@birdcarts.com" className="hover:text-emerald-600 transition-colors">
                  support@birdcarts.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-1">Working Hours</p>
              <p>Mon-Fri: 9AM-6PM</p>
              <p>Sat-Sun: 10AM-4PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2 text-gray-900">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                required
              />
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <p className="mt-2 text-sm text-emerald-600 font-medium">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-8 border-y border-gray-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600">1,00,000+</p>
            <p className="text-sm text-gray-600 mt-1">Pairs Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600">7,000+</p>
            <p className="text-sm text-gray-600 mt-1">Happy Feet</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600">1,200+</p>
            <p className="text-sm text-gray-600 mt-1">Serviceable Pincodes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600">300+</p>
            <p className="text-sm text-gray-600 mt-1">Cities Covered</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Birdcarts. All rights reserved.</p>
          <p className="mt-2">We believe comfort is a right, not a luxury.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;