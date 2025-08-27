import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions about our products, 
            need custom work, or just want to say hello – we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Showroom Address</h3>
                    <p className="text-stone-600">
                      Link Band Road, Bhogiwal Road<br />
                      Punjab, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Phone Number</h3>
                    <p className="text-stone-600">+92 327 3939393</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Email Address</h3>
                    <p className="text-stone-600">woodenlay@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Business Hours</h3>
                    <div className="text-stone-600 space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 12:00 AM</p>
                      <p>Sunday: Closed </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="support">Product Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, questions, or how we can help you..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                  
                  <p className="text-sm text-stone-600">
                    We'll respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Do you offer custom furniture design?
              </h3>
              <p className="text-stone-600">
                Absolutely! We specialize in custom wooden furniture and lighting. Our craftsmen work 
                closely with you to bring your vision to life, whether it's modifying an existing design 
                or creating something entirely unique.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                What types of wood do you work with?
              </h3>
              <p className="text-stone-600">
                We work with premium hardwoods including Oak, Fig, Red Oak, Ash Wood, Green Maple, and Mango. 
                All our wood is sourced from sustainably managed forests and carefully selected for 
                quality and beauty.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                How long does it take to complete a custom order?
              </h3>
              <p className="text-stone-600">
                The completion time for custom orders varies depending on the order. 
                We'll provide you with a detailed timeline when we discuss your project.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;