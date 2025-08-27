import React, { useState } from 'react';
import { Filter, Grid, List, Heart, Star } from 'lucide-react';
import { Product } from '../App';
import { useWishlist } from '../context/WishlistContext';
import lamp1 from "../images/IMG_9638.png";
import lamp2 from "../images/IMG_9605.png";
import lamp3 from "../images/IMG_9622.png";
import lamp4 from "../images/IMG_9620.png";

interface ShopProps {
  onProductClick: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedWoodType, setSelectedWoodType] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();


  const products: Product[] = [
    {
      id: 1,
      name: "Nordic Pendant Lamp",
      price: 299,
      originalPrice: 399,
      image: lamp1,
      gallery: [lamp1],
      category: "Lamps",
      woodType: "Oak",
      description: "Handcrafted Nordic-style pendant lamp made from premium oak wood.",
      specifications: { dimensions: "12\" W x 8\" H", weight: "2.5 lbs", material: "Premium Oak Wood", finish: "Natural Oil Finish" },
      customizable: false,
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
      description: "Elegant rustic table lamp featuring rich walnut wood base.",
      specifications: { dimensions: "8\" W x 16\" H", weight: "3.2 lbs", material: "Walnut Wood", finish: "Dark Stain" },
      customizable: false,
      inStock: true,
      rating: 4.6,
      reviews: 18
    },
    {
      id: 3,
      name: "Modern Coffee Table",
      price: 799,
      image: lamp3,
      gallery: [lamp3],
      category: "Coffee Tables",
      woodType: "Teak",
      description: "Sleek modern coffee table with teak wood construction.",
      specifications: { dimensions: "48\" L x 24\" W x 16\" H", weight: "45 lbs", material: "Solid Teak", finish: "Matte Finish" },
      customizable: false,
      inStock: true,
      rating: 4.7,
      reviews: 15
    },
    {
      id: 4,
      name: "Executive Dining Table",
      price: 1299,
      image: lamp4,
      gallery: [lamp4],
      category: "Dining Tables",
      woodType: "Mahogany",
      description: "Luxurious dining table crafted from solid mahogany wood.",
      specifications: { dimensions: "72\" L x 36\" W x 30\" H", weight: "95 lbs", material: "Solid Mahogany", finish: "High Gloss" },
      customizable: false,
      inStock: true,
      rating: 4.9,
      reviews: 8
    },
    {
      id: 5,
      name: "Bedroom Nightstand",
      price: 299,
      image: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: ["https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800"],
      category: "Bedroom Furniture",
      woodType: "Cherry",
      description: "Elegant cherry wood nightstand with soft-close drawers.",
      specifications: { dimensions: "20\" W x 16\" D x 24\" H", weight: "35 lbs", material: "Cherry Wood", finish: "Satin Finish" },
      customizable: false,
      inStock: true,
      rating: 4.5,
      reviews: 22
    },
    {
      id: 6,
      name: "Modern Console Table",
      price: 599,
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: ["https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"],
      category: "Consoles & Décor",
      woodType: "Pine",
      description: "Contemporary console table featuring sustainable pine wood.",
      specifications: { dimensions: "60\" L x 16\" D x 32\" H", weight: "55 lbs", material: "Pine Wood", finish: "Natural Finish" },
      customizable: true,
      inStock: false,
      rating: 4.4,
      reviews: 11
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesWoodType = selectedWoodType === 'All' || product.woodType === selectedWoodType;
    
    return matchesCategory && matchesPrice && matchesWoodType;
  });

  const handleWishlistClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">Shop Collection</h1>
            <p className="text-stone-600">Discover our handcrafted wooden furniture and lighting</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center px-4 py-2 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
            
            <div className="flex items-center space-x-2 bg-white border border-stone-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-amber-100 text-amber-700' : 'text-stone-600 hover:text-amber-700'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-amber-100 text-amber-700' : 'text-stone-600 hover:text-amber-700'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
            
            <select className="px-4 py-2 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onProductClick(product)}
                  className={`group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                        viewMode === 'list' ? 'w-full h-48' : 'w-full h-64'
                      }`}
                    />
                    
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Sale
                      </div>
                    )}

                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}

                    <button
                      onClick={(e) => handleWishlistClick(e, product)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                        isInWishlist(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-stone-600 hover:bg-white hover:text-red-500'
                      }`}
                    >
                      <Heart className="h-4 w-4" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <div className="p-4 flex-1">
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

                    <h3 className="font-semibold text-lg text-stone-800 mb-1 group-hover:text-amber-900 transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    <p className="text-stone-600 text-sm mb-2">{product.woodType} Wood • {product.category}</p>
                    
                    {viewMode === 'list' && (
                      <p className="text-stone-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-amber-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-stone-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      
                      {product.customizable && (
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                          Customizable
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone-600 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedWoodType('All');
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;