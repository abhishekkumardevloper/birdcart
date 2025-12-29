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
    <footer className="border-t mt-16 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C68B0' }}>
              Birdcarts
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Birdcarts brings you premium socks and orthopedic essentials designed
              for comfort, style, and foot health.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full transition"
                  style={{ backgroundColor: '#EAF1FB', color: '#2C68B0' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {['/about','/products','/faq','/contact'].map((path, i) => (
                <li key={i}>
                  <Link to={path} className="text-sm" style={{ color: '#2C68B0' }}>
                    {['About Us','Shop All','FAQs','Contact Us'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Customer Service</h4>
            <ul className="space-y-2">
              {['Track Order','Terms & Conditions','Privacy Policy','Returns & Refunds'].map(
                (txt, i) => (
                  <li key={i}>
                    <Link className="text-sm" style={{ color: '#2C68B0' }}>
                      {txt}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" style={{ color: '#2C68B0' }} />
                <span>Najafgarh, New Delhi-110043</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: '#2C68B0' }} />
                <span style={{ color: '#2C68B0' }}>+91 9546620662</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: '#2C68B0' }} />
                <span style={{ color: '#2C68B0' }}>support@birdcarts.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2 text-gray-900">Stay Connected</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                className="flex-1 px-4 py-2 border rounded-lg"
                style={{ borderColor: '#2C68B0' }}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button style={{ backgroundColor: '#2C68B0', color: '#fff' }}>
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <p className="mt-2 text-sm font-medium" style={{ color: '#2C68B0' }}>
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Birdcarts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
