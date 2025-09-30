import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Support request:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How Can We <span className="text-blue-600">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get support for your BPO career journey. Our team is here to assist you with job applications, 
            account issues, and career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Support</h4>
                    <p className="text-gray-600">+91-9876543210</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Support</h4>
                    <p className="text-gray-600">support@careerudan.com</p>
                    <p className="text-sm text-gray-500">24/7 response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Live Chat</h4>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-sm text-gray-500">Instant support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Help</h3>
              <div className="space-y-3">
                <Link to="/help" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <h4 className="font-medium text-gray-800">Frequently Asked Questions</h4>
                  <p className="text-sm text-gray-600">Find answers to common questions</p>
                </Link>
                <Link to="/subscription" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <h4 className="font-medium text-gray-800">Premium Subscription</h4>
                  <p className="text-sm text-gray-600">Learn about premium features</p>
                </Link>
                <Link to="/jobs" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <h4 className="font-medium text-gray-800">Job Search Help</h4>
                  <p className="text-sm text-gray-600">Tips for finding BPO jobs</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief description of your issue"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="account">Account Issues</option>
                        <option value="job-search">Job Search Help</option>
                        <option value="application">Application Support</option>
                        <option value="premium">Premium Subscription</option>
                        <option value="technical">Technical Issues</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your issue in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-white text-center">
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Quick Response Times</h3>
          <p className="text-blue-100">
            We typically respond to support requests within 24 hours. For urgent issues, 
            please call our phone support line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
