import React, { useState } from 'react';
import { X, Mail, Gift } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 transition-colors duration-200 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Get 5% Off Your First Order!
              </h2>
              <p className="text-stone-600">
                Subscribe to our newsletter and receive exclusive discounts on our 
                handcrafted wooden lamps and furniture.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get My 5% Discount
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-stone-500">
                By subscribing, you agree to receive marketing emails from WoodenLay. 
                You can unsubscribe at any time.
              </p>
            </div>

            <div className="mt-6 bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">What you'll get:</h3>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Exclusive 5% discount on wooden lamps</li>
                <li>• Early access to new collections</li>
                <li>• Interior design tips and inspiration</li>
                <li>• Special offers on custom furniture</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
            <p className="text-stone-600">
              Your 5% discount code has been sent to your email. 
              Welcome to the WoodenLay family!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;