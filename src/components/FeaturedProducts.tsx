import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../App';
import { useWishlist } from '../context/WishlistContext';
import lamp1 from "../images/IMG_9638.png";
import lamp2 from "../images/IMG_9605.png";
import lamp3 from "../images/IMG_9622.png";
import lamp4 from "../images/IMG_9620.png";

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Nordic Pendant Lamp",
      price: 299,
      originalPrice: 399,
      image: lamp1,
      gallery: [lamp1],
      category: "Lamps",
      woodType: "Oak",
      description: "Handcrafted Nordic-style pendant lamp made from premium oak wood with natural finish.",
      specifications: {
        dimensions: "12\" W x 8\" H",
        weight: "2.5 lbs"
      },
      customizable: true,
      inStock: true,
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: "Rustic Table Lamp",
      price: 189,
      image: lamp2,
      gallery: [lamp2],
      category: "Lamps",
      woodType: "Walnut",
      description: "Elegant rustic table lamp featuring rich walnut wood base with brass accents.",
      specifications: {
        dimensions: "8\" W x 16\" H",
        weight: "3.2 lbs",
        
      },
      customizable: false,
      inStock: true,
      rating: 4.6,
      reviews: 18
    },
    {
      id: 3,
      name: "Modern Dining Table",
      price: 1299,
      image: lamp3,
      gallery: [lamp3],
      category: "Dining Tables",
      woodType: "Teak",
      description: "Contemporary dining table crafted from solid teak wood with minimalist design.",
      specifications: {
        dimensions: "72\" L x 36\" W x 30\" H",
        weight: "85 lbs",
        
      },
      customizable: true,
      inStock: true,
      rating: 4.9,
      reviews: 12
    },
    {
      id: 4,
      name: "Wooden Floor Lamp",
      price: 349,
      image: lamp4,
      gallery: [lamp4],
      category: "Lamps",
      woodType: "Mahogany",
      description: "Stunning floor lamp with mahogany wood tripod base and linen shade.",
      specifications: {
        dimensions: "24\" W x 60\" H",
        weight: "12 lbs",
        
      },
      customizable: true,
      inStock: true,
      rating: 4.7,
      reviews: 31
    }
  ];

  const handleWishlistClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium wooden furniture and lighting, 
            crafted with exceptional attention to detail and sustainable materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    Sale
                  </div>
                )}

                <button
                  onClick={(e) => handleWishlistClick(e, product)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                    isInWishlist(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-stone-600 hover:bg-white hover:text-red-500'
                  }`}
                >
                  <Heart className="h-5 w-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-500 ml-2">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-lg text-stone-800 mb-2 group-hover:text-amber-900 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="text-stone-600 text-sm mb-4">{product.woodType} Wood</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-stone-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;