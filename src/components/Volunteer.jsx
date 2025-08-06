import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="volunteer" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-12 text-center border border-emerald-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-emerald-500 p-4 rounded-full animate-pulse">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your volunteer application has been submitted successfully. We'll be in touch with you soon!
            </p>
            <p className="text-emerald-600 font-medium">
              Welcome to the HopeForward family! 🎉
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-emerald-600">Volunteer</span> Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Join hundreds of volunteers who are already creating 
            positive change in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer? *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your motivation and how you'd like to contribute..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Volunteer With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-200 mt-0.5 flex-shrink-0" />
                  <span>Make a real, measurable impact in communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-200 mt-0.5 flex-shrink-0" />
                  <span>Gain valuable skills and experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-200 mt-0.5 flex-shrink-0" />
                  <span>Connect with like-minded changemakers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-200 mt-0.5 flex-shrink-0" />
                  <span>Flexible scheduling to fit your lifestyle</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Volunteers in action"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Volunteer Opportunities</h4>
              <p className="text-gray-600 leading-relaxed">
                From education and healthcare to environmental conservation and community development, 
                we have opportunities that match your interests and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;