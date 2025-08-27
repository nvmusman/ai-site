import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-amber-600" />
              <h2 className="text-xl font-semibold text-stone-800">
                Shopping Cart ({getTotalItems()})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-stone-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-16 w-16 text-stone-300 mx-auto mb-4" />
                <p className="text-stone-600 text-lg">Your cart is empty</p>
                <p className="text-stone-500 text-sm mt-2">Add some beautiful wooden pieces to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${JSON.stringify(item.customizations)}`} className="bg-stone-50 rounded-lg p-4">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-stone-800 truncate">{item.name}</h3>
                        <p className="text-sm text-stone-600">{item.woodType} Wood</p>
                        
                        {item.customizations && (
                          <div className="text-xs text-stone-500 mt-1">
                            {item.customizations.woodType !== item.woodType && (
                              <span>Wood: {item.customizations.woodType} • </span>
                            )}
                            <span>Finish: {item.customizations.finish} • </span>
                            <span>Size: {item.customizations.size}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-amber-900">${item.price}</span>
                          <button
                            onClick={() => removeFromCart(item.id, item.customizations)}
                            className="text-red-500 hover:text-red-600 text-sm transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-stone-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.customizations, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-stone-100 transition-colors duration-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-stone-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.customizations, item.quantity + 1)}
                          className="p-2 hover:bg-stone-100 transition-colors duration-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-bold text-lg text-amber-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-stone-800">Total:</span>
                <span className="text-2xl font-bold text-amber-900">${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Checkout
                </button>
                <button 
                  onClick={onClose}
                  className="w-full border border-stone-300 text-stone-700 hover:bg-stone-50 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-stone-600">Free shipping on orders over $500</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;