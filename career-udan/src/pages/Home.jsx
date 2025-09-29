import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Briefcase, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [stats, setStats] = useState({
    totalJobs: 0,
    companies: 0,
    candidates: 0
  });

  useEffect(() => {
    // Animate stats counter
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 5000, 2000, (val) => setStats(prev => ({ ...prev, totalJobs: val })));
    animateValue(0, 500, 2000, (val) => setStats(prev => ({ ...prev, companies: val })));
    animateValue(0, 10000, 2000, (val) => setStats(prev => ({ ...prev, candidates: val })));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?search=${searchQuery}&location=${location}`);
  };

  const featuredJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Mumbai', type: 'Full-time', salary: '₹6-10 LPA' },
    { id: 2, title: 'Backend Developer', company: 'Innovate Solutions', location: 'Bangalore', type: 'Full-time', salary: '₹8-12 LPA' },
    { id: 3, title: 'UI/UX Designer', company: 'Creative Labs', location: 'Pune', type: 'Remote', salary: '₹5-8 LPA' },
    { id: 4, title: 'Data Analyst', company: 'Data Insights', location: 'Delhi', type: 'Full-time', salary: '₹7-11 LPA' },
  ];

  const categories = [
    { name: 'IT & Software', count: 1200, icon: '💻' },
    { name: 'Marketing', count: 850, icon: '📈' },
    { name: 'Finance', count: 650, icon: '💰' },
    { name: 'Design', count: 450, icon: '🎨' },
    { name: 'Sales', count: 900, icon: '🤝' },
    { name: 'HR', count: 350, icon: '👥' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Software Engineer', text: 'Career Udan helped me land my dream job! The process was smooth and professional.', rating: 5 },
    { name: 'Rahul Verma', role: 'Marketing Manager', text: 'Excellent platform with genuine opportunities. Highly recommended!', rating: 5 },
    { name: 'Anita Desai', role: 'Data Scientist', text: 'The premium subscription is worth every penny. Got multiple interview calls within a week!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Find Your Dream Career with <span className="text-yellow-300">Career Udan</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect with top companies and unlock thousands of job opportunities across India
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center border-r border-gray-300 px-4">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="City or state"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Search Jobs
            </button>
          </form>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-blue-100">Popular Searches:</span>
            {['Remote Jobs', 'Frontend Developer', 'Data Analyst', 'UI/UX Designer'].map((term) => (
              <button
                key={term}
                onClick={() => { setSearchQuery(term); navigate(`/jobs?search=${term}`); }}
                className="bg-blue-500 bg-opacity-30 text-white px-4 py-1 rounded-full text-sm hover:bg-opacity-50 transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stats.totalJobs.toLocaleString()}+</h3>
              <p className="text-gray-600">Active Jobs</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stats.companies.toLocaleString()}+</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stats.candidates.toLocaleString()}+</h3>
              <p className="text-gray-600">Happy Candidates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Jobs</h2>
            <p className="text-gray-600 text-lg">Discover the latest job opportunities from top companies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4 gap-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </span>
                </div>
                <Link 
                  to={`/jobs/${job.id}`} 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/jobs" 
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold"
            >
              Browse All Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find jobs in your preferred industry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/jobs?category=${category.name}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center group hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Unlock Premium Features</h2>
          <p className="text-xl mb-8 text-purple-100">Get priority access to top jobs for just ₹149</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center">
              <CheckCircle className="mb-3" size={40} />
              <h3 className="font-semibold mb-2">Featured Profile</h3>
              <p className="text-sm text-purple-100">Stand out to recruiters</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="mb-3" size={40} />
              <h3 className="font-semibold mb-2">Priority Applications</h3>
              <p className="text-sm text-purple-100">Get noticed first</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="mb-3" size={40} />
              <h3 className="font-semibold mb-2">Exclusive Jobs</h3>
              <p className="text-sm text-purple-100">Access premium listings</p>
            </div>
          </div>

          <Link 
            to="/subscription" 
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg shadow-xl"
          >
            Upgrade to Premium →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">Hear from candidates who found their dream jobs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Off Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of job seekers finding their perfect match</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
            >
              Get Started - It's Free
            </Link>
            <Link 
              to="/jobs" 
              className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-bold text-lg border-2 border-white"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;