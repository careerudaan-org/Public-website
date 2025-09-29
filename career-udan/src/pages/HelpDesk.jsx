import { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HelpDesk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I create an account on Career Udan?',
      answer: 'Click on the "Sign Up" button in the top right corner, fill in your details including email, password, and profile information. You\'ll receive a verification email to activate your account.'
    },
    {
      question: 'How do I apply for a job?',
      answer: 'Browse jobs, click on a job listing you\'re interested in, and click the "Apply Now" button. Make sure your profile and resume are up to date before applying.'
    },
    {
      question: 'What are the benefits of Premium subscription?',
      answer: 'Premium members get featured profile placement, priority application processing, access to exclusive job listings, advanced filters, and direct messaging with recruiters. All for just ₹149!'
    },
    {
      question: 'How can I upload my resume?',
      answer: 'Go to your profile page, click on "Upload Resume" button, and select your resume file (PDF or DOC format, max 5MB). You can update your resume anytime.'
    },
    {
      question: 'Can I edit my job application after submitting?',
      answer: 'No, once submitted, applications cannot be edited. However, you can contact the company directly through the messaging feature if you\'re a Premium member.'
    },
    {
      question: 'How do I cancel my Premium subscription?',
      answer: 'Go to Settings > Subscription > Manage Subscription, and click "Cancel Subscription". You\'ll retain premium features until the end of your billing period.'
    },
    {
      question: 'Why is my profile not visible to recruiters?',
      answer: 'Make sure your profile is at least 70% complete and you\'ve made it "Public" in privacy settings. Premium members get better visibility in recruiter searches.'
    },
    {
      question: 'How long do job listings stay active?',
      answer: 'Job listings typically remain active for 30 days unless the employer closes them earlier. You can see the "Posted" date on each job listing.'
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="text-blue-600" size={32} />,
      title: 'Phone Support',
      description: '+91 98765 43210',
      subtext: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: <Mail className="text-green-600" size={32} />,
      title: 'Email Support',
      description: 'support@careerudan.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: <MessageCircle className="text-purple-600" size={32} />,
      title: 'Live Chat',
      description: 'Chat with our team',
      subtext: 'Available 10 AM - 5 PM IST'
    },
    {
      icon: <Clock className="text-orange-600" size={32} />,
      title: 'Response Time',
      description: 'Average: 2-4 hours',
      subtext: 'For urgent issues'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="mx-auto mb-4" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl text-blue-100 mb-8">
            Get quick answers to your questions or reach out to our support team
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
              <input
                type="text"
                placeholder="Search for help topics, FAQs..."
                className="flex-1 px-4 py-3 outline-none text-gray-700"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">
                  {method.description}
                </p>
                <p className="text-sm text-gray-500">
                  {method.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find quick answers to common questions
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Submit a Support Ticket
              </h2>
              <p className="text-gray-600">
                Can't find what you're looking for? Send us a message and we'll get back to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Ticket Submitted Successfully!
                </h3>
                <p className="text-gray-600">
                  We've received your request and will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select a category</option>
                      <option value="account">Account Issues</option>
                      <option value="application">Job Application</option>
                      <option value="subscription">Subscription & Billing</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Please provide as much detail as possible..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Submit Ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Additional Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Knowledge Base
              </h3>
              <p className="text-gray-600 mb-4">
                Browse our comprehensive guides and tutorials
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Visit Knowledge Base →
              </button>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other users and share experiences
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Join Community →
              </button>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Video Tutorials
              </h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step guides on using Career Udan
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Watch Tutorials →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpDesk;