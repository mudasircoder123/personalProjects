import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Custom SVG Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    communicationMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      communicationMethod: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          communicationMethod: 'email'
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in <span className="text-indigo-600">Touch</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Have questions or want to learn more? We're here to help! Send us a message and our team will get back to you shortly.</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Information Card */}
            <div className="lg:col-span-2 bg-indigo-600 rounded-2xl overflow-hidden shadow-xl relative text-white h-full">
              <div className="absolute inset-0 bg-indigo-700 opacity-10"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Call Us</p>
                      <a href="tel:+14706011911" className="text-lg font-medium hover:underline transition">
                        (470) 601-1911
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email Us</p>
                      <a href="mailto:contact@example.com" className="text-lg font-medium hover:underline transition">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Our Location</p>
                      <address className="text-lg font-medium not-italic">
                        654 Sycamore Avenue,<br />
                        Meadowville, WA 76543
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-8 border-t border-white/20">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a 
                        key={social}
                        href={`#${social}`} 
                        className="bg-white/10 hover:bg-white/30 p-2 rounded-full transition-colors duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-600">Thank you for contacting us. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-3">Preferred method of communication</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { id: 'email', label: 'Email' },
                        { id: 'phone', label: 'Phone' },
                        { id: 'any', label: 'Any' }
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={`radio-${option.id}`}
                            type="radio"
                            name="communicationMethod"
                            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            checked={formData.communicationMethod === option.id}
                            onChange={() => handleRadioChange(option.id)}
                          />
                          <label htmlFor={`radio-${option.id}`} className="ml-2 block text-sm text-gray-700">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message 
                        <SendIcon />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit our office or schedule a meeting</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-3 text-gray-400">
                  <MapPinIcon />
                </div>
                <p className="text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What are your business hours?",
                answer: "We're open Monday through Friday from 9 AM to 5 PM Pacific Time. We're closed on weekends and major holidays."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly."
              },
              {
                question: "Do you offer virtual meetings?",
                answer: "Yes! We offer meetings via Zoom, Microsoft Teams, or Google Meet. Simply request a virtual meeting when you contact us."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition">
              View all FAQs 
              <span className="ml-2">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactSection;
