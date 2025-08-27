import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { wishlistItems } = useWishlist();

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'Shop', page: 'shop' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex-shrink-0 cursor-pointer group"
          >
            <h1 className="text-2xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors duration-200">
              WoodenLay
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-amber-900 border-b-2 border-amber-900'
                      : 'text-stone-600 hover:text-amber-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-stone-600 hover:text-amber-900 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-stone-600 hover:text-amber-900 transition-colors duration-200 relative">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-stone-600 hover:text-amber-900 transition-colors duration-200 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="p-2 text-stone-600 hover:text-amber-900 transition-colors duration-200 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-amber-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-amber-900 bg-amber-50'
                      : 'text-stone-600 hover:text-amber-900 hover:bg-stone-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="border-t border-stone-200 px-2 pt-2 pb-3">
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-3 py-2 text-stone-600 hover:text-amber-900 transition-colors duration-200">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </button>
                <button className="flex items-center px-3 py-2 text-stone-600 hover:text-amber-900 transition-colors duration-200 relative">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                  {wishlistItems.length > 0 && (
                    <span className="ml-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;