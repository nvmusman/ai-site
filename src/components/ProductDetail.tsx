import React, { useState } from 'react';
import { Heart, Star, Plus, Minus, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../App';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center">
          <img
            src={product.gallery[selectedImage] || product.image}
            alt={product.name}
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        {product.gallery.length > 1 && (
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {product.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? 'border-amber-500 shadow-md'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
              </button>
            ))}
          </div>
        )}
      </div>


          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-stone-600">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlistClick}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isInWishlist(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className="h-5 w-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-colors duration-200">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-amber-900 mb-2">{product.name}</h1>
              <p className="text-stone-600 mb-4">{product.category} • {product.woodType} Wood</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-amber-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-stone-400 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Description</h3>
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Quantity</label>
                  <div className="flex items-center border border-stone-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-stone-50 transition-colors duration-200"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-stone-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-stone-50 transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      product.inStock
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-stone-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Truck className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Free Shipping</p>
                    <p className="text-sm text-stone-600">For orders over Rs.
                      25,000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">1 Year Warranty</p>
                    <p className="text-sm text-stone-600">Craftsmanship guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <RotateCcw className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">2-5 Day Returns</p>
                    <p className="text-sm text-stone-600">Valid returns</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
