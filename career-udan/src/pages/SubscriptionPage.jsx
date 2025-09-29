import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Crown, 
  Star, 
  Zap, 
  TrendingUp,
  Eye,
  MessageSquare,
  FileText,
  Filter,
  Bell,
  Shield,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [paymentModal, setPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const features = [
    {
      icon: <Crown className="text-yellow-500" size={32} />,
      title: 'Featured Profile',
      description: 'Your profile appears at the top of recruiter searches, increasing visibility by 5x'
    },
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: 'Priority Applications',
      description: 'Your applications are highlighted and reviewed first by employers'
    },
    {
      icon: <Eye className="text-blue-500" size={32} />,
      title: 'Exclusive Job Listings',
      description: 'Access to premium job postings not available to free users'
    },
    {
      icon: <MessageSquare className="text-purple-500" size={32} />,
      title: 'Direct Messaging',
      description: 'Chat directly with HR and recruiters without applying first'
    },
    {
      icon: <FileText className="text-indigo-500" size={32} />,
      title: 'Advanced Analytics',
      description: 'See who viewed your profile and track your application status in real-time'
    },
    {
      icon: <Filter className="text-pink-500" size={32} />,
      title: 'Advanced Filters',
      description: 'Use premium filters to find your perfect job match faster'
    },
    {
      icon: <Bell className="text-orange-500" size={32} />,
      title: 'Instant Notifications',
      description: 'Get real-time alerts for new jobs matching your preferences'
    },
    {
      icon: <Shield className="text-red-500" size={32} />,
      title: 'Resume Boost',
      description: 'Professional resume review and optimization suggestions'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Job Applications', free: '10/month', premium: 'Unlimited' },
    { feature: 'Profile Views', free: 'Limited', premium: 'Unlimited' },
    { feature: 'Featured Profile', free: false, premium: true },
    { feature: 'Priority Support', free: false, premium: true },
    { feature: 'Direct Messaging', free: false, premium: true },
    { feature: 'Exclusive Jobs', free: false, premium: true },
    { feature: 'Advanced Analytics', free: false, premium: true },
    { feature: 'Resume Review', free: false, premium: true },
    { feature: 'Job Alerts', free: 'Daily', premium: 'Instant' },
    { feature: 'Application Tracking', free: 'Basic', premium: 'Advanced' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Google',
      image: 'https://via.placeholder.com/80',
      text: 'Within 2 weeks of upgrading to Premium, I got interview calls from 5 top companies. The featured profile feature is a game-changer!',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      role: 'Marketing Manager',
      company: 'Amazon',
      image: 'https://via.placeholder.com/80',
      text: 'Best ₹149 I ever spent! Direct messaging with recruiters helped me skip the long application queues.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: 'https://via.placeholder.com/80',
      text: 'The exclusive job listings gave me access to opportunities I would have never found otherwise. Highly recommended!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How does the Premium subscription work?',
      answer: 'Once you subscribe, you get immediate access to all premium features for 30 days. Your profile is automatically featured, and you can start using advanced filters and direct messaging right away.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! You can cancel your subscription anytime from your account settings. You\'ll continue to have premium access until the end of your billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, Net Banking, and popular digital wallets through Razorpay secure payment gateway.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Currently, we don\'t offer a free trial, but at just ₹149/month, you can try premium features risk-free with our 7-day money-back guarantee.'
    },
    {
      question: 'Will I be charged automatically?',
      answer: 'Yes, your subscription will auto-renew monthly unless you cancel. You\'ll receive a reminder email 3 days before renewal.'
    }
  ];

  const handleSubscribe = () => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/subscription' } });
      return;
    }
    
    setPaymentModal(true);
  };

  const processPayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    // Replace with actual Razorpay integration
    setTimeout(() => {
      setLoading(false);
      setPaymentModal(false);
      
      // Show success message or redirect
      alert('Payment Successful! Welcome to Career Udan Premium 🎉');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold mb-6">
            <Sparkles size={20} />
            <span>LIMITED TIME OFFER</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Unlock Your Dream Career with <span className="text-yellow-300">Premium</span>
          </h1>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Stand out from the crowd, get noticed by top recruiters, and land your dream job 5x faster
          </p>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="text-yellow-500" size={32} />
              <h2 className="text-3xl font-bold">Career Udan Prime</h2>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-blue-600">₹149</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-500 line-through">Regular Price: ₹299</p>
              <p className="text-green-600 font-semibold">Save 50% - Limited Time!</p>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-4 flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Upgrade to Premium Now
            </button>

            <p className="text-sm text-gray-600">
              ✓ Cancel anytime • ✓ 7-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Premium Features That Make a Difference
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to accelerate your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Free vs Premium Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See what you're missing out on
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Free</th>
                  <th className="py-4 px-6 text-center bg-yellow-400 text-purple-900">
                    <Crown className="inline mr-2" size={20} />
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {typeof item.free === 'boolean' ? (
                        item.free ? (
                          <CheckCircle className="text-green-500 inline" size={20} />
                        ) : (
                          <X className="text-red-500 inline" size={20} />
                        )
                      ) : (
                        item.free
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-purple-50">
                      {typeof item.premium === 'boolean' ? (
                        item.premium ? (
                          <CheckCircle className="text-green-500 inline" size={20} />
                        ) : (
                          <X className="text-red-500 inline" size={20} />
                        )
                      ) : (
                        <span className="font-semibold text-purple-600">{item.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Get Premium Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories from Premium Members
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t pt-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">5x</h3>
              <p className="text-purple-100">Faster Job Placement</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">10K+</h3>
              <p className="text-purple-100">Premium Members</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">95%</h3>
              <p className="text-purple-100">Success Rate</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">₹149</h3>
              <p className="text-purple-100">Per Month Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful job seekers who upgraded to Premium
          </p>
          <button
            onClick={handleSubscribe}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-12 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl text-xl inline-flex items-center gap-2"
          >
            <Crown size={24} />
            Get Premium for ₹149/month
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ✓ Instant activation • ✓ Cancel anytime • ✓ Money-back guarantee
          </p>
        </div>
      </section>

      {/* Payment Modal */}
      {paymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <Crown className="mx-auto mb-4 text-yellow-500" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Purchase</h3>
              <p className="text-gray-600">Career Udan Premium Subscription</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Monthly Subscription</span>
                <span className="font-semibold text-gray-800">₹149.00</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>GST (18%)</span>
                <span>₹26.82</span>
              </div>
              <div className="border-t border-purple-200 mt-2 pt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-gray-800 text-xl">₹175.82</span>
              </div>
            </div>

            <button
              onClick={processPayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </div>
              ) : (
                'Proceed to Payment'
              )}
            </button>

            <button
              onClick={() => setPaymentModal(false)}
              className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;