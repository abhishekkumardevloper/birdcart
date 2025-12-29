import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { categories } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, wishlist } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top Offer Bar */}
      <div
        className="py-2 text-center text-sm"
        style={{ backgroundColor: '#EAF1FB', color: '#2C68B0' }}
      >
        <p className="font-medium">
          FLAT 10% OFF + FREE GIFT on orders above ₹1499
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold"
            style={{ color: '#2C68B0' }}
          >
            Birdcarts
          </Link>

          {/* Search - Desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border rounded-lg outline-none"
                style={{ borderColor: '#2C68B0' }}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-5 h-5" style={{ color: '#2C68B0' }} />
              </button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative hidden md:block">
              <Heart className="w-6 h-6" style={{ color: '#2C68B0' }} />
              {wishlist.length > 0 && (
                <span
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ backgroundColor: '#2C68B0' }}
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" style={{ color: '#2C68B0' }} />
              {getCartCount() > 0 && (
                <span
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ backgroundColor: '#2C68B0' }}
                >
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-6 h-6" style={{ color: '#2C68B0' }} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-semibold">
                    {user?.name}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/wishlist')}>
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="outline"
                onClick={() => navigate('/login')}
                style={{
                  borderColor: '#2C68B0',
                  color: '#2C68B0',
                }}
              >
                Login
              </Button>
            )}

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded"
              style={{ color: '#2C68B0' }}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 py-3 border-t">
          <Link to="/products" style={{ color: '#2C68B0' }} className="font-medium">
            All Products
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              style={{ color: '#2C68B0' }}
              className="font-medium"
            >
              {cat.name}
            </Link>
          ))}
          <Link to="/about" style={{ color: '#2C68B0' }} className="font-medium">
            About Us
          </Link>
          <Link to="/contact" style={{ color: '#2C68B0' }} className="font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
