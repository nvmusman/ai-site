import React from 'react';
import { Award, Leaf, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Craftsmanship",
      description: "Every piece is handcrafted with love and attention to detail, ensuring exceptional quality and uniqueness in each creation."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Materials",
      description: "We source our wood from responsibly managed forests, committed to environmental preservation and sustainable practices."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Using traditional woodworking techniques combined with modern precision, we create furniture that lasts generations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We offer customization options and exceptional service to meet your unique needs."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5974389/pexels-photo-5974389.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Craftsman working with wood"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Crafting Dreams in <span className="text-amber-400">Wood</span>
            </h1>
            <p className="text-xl text-stone-200 leading-relaxed">
              For over two decades, WoodenLay has been transforming premium wood into timeless pieces 
              that bring warmth, elegance, and natural beauty to homes around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  WoodenLay began in a small workshop in 2004, where our founder, Master Craftsman 
                  Muhammad Imran, started creating wooden lamps with nothing but passion, skill, 
                  and a deep respect for natural materials.
                </p>
                <p>
                  What started as a hobby quickly grew into a calling. Each piece we created told 
                  a story – the story of the tree it came from, the hands that shaped it, and the 
                  home it would eventually illuminate.
                </p>
                <p>
                  Today, our signature wooden lamps remain our flagship products, but we've expanded 
                  our collection to include dining tables, coffee tables, bedroom furniture, and 
                  decor pieces – all crafted with the same dedication to quality and beauty that 
                  defined our very first lamp.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5974248/pexels-photo-5974248.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wooden crafting tools and workspace"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-amber-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every piece we create, 
              ensuring that WoodenLay continues to set the standard for luxury wooden furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-amber-600 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Craft Process</h2>
            <p className="text-xl text-stone-600">From forest to your home – the journey of excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/5974382/pexels-photo-5974382.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wood selection process"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">Selection</h3>
              <p className="text-stone-600">
                We carefully select premium hardwoods from sustainable sources, 
                ensuring each piece meets our strict quality standards.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/5974390/pexels-photo-5974390.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wood crafting process"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">Crafting</h3>
              <p className="text-stone-600">
                Our master craftsmen use traditional techniques combined with modern 
                precision to shape each piece to perfection.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/5974249/pexels-photo-5974249.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Finishing process"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">Finishing</h3>
              <p className="text-stone-600">
                Multiple coats of premium finish are applied and hand-polished 
                to enhance the natural beauty and ensure lasting durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">25,000+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">5,000+</div>
              <div className="text-amber-100">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">1,200+</div>
              <div className="text-amber-100">Custom Creations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">100%</div>
              <div className="text-amber-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Experience the WoodenLay Difference</h2>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            When you choose WoodenLay, you're not just buying furniture – you're investing in 
            a piece of art that will bring joy, warmth, and natural beauty to your home for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Shop Our Collection
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Custom Orders
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;