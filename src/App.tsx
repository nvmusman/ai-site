import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import NewsletterPopup from './components/NewsletterPopup';
import BackToTop from './components/BackToTop';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  woodType: string;
  description: string;
  specifications: {
    dimensions: string;
    weight: string;
    material: string;
    finish: string;
  };
  customizable: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Show newsletter popup after 3 seconds
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop onProductClick={handleProductClick} />;
      case 'product':
        return selectedProduct ? <ProductDetail product={selectedProduct} /> : null;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <FeaturedProducts onProductClick={handleProductClick} />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-stone-50">
          <Header 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            onCartClick={() => setIsCartOpen(true)}
          />
          
          <main>
            {renderContent()}
          </main>

          <Footer setCurrentPage={setCurrentPage} />
          
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          <NewsletterPopup 
            isOpen={showNewsletter} 
            onClose={() => setShowNewsletter(false)} 
          />
          
          <BackToTop />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;