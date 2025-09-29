import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Users, 
  Calendar,
  Building2,
  Share2,
  Bookmark,
  CheckCircle,
  ArrowLeft,
  Send,
  AlertCircle
} from 'lucide-react';

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState(null);

  useEffect(() => {
    // Simulate fetching job details from API
    // Replace this with actual API call
    const fetchJobDetails = async () => {
      setLoading(true);
      
      // Mock data - replace with actual API call
      const mockJob = {
        id: id,
        title: 'Senior Frontend Developer',
        company: 'Tech Innovators Pvt Ltd',
        location: 'Mumbai, Maharashtra',
        type: 'Full-time',
        experience: '3-5 years',
        salary: '₹8-12 LPA',
        postedDate: '2 days ago',
        applicationDeadline: '2025-10-15',
        openings: 3,
        applicants: 45,
        companyLogo: 'https://via.placeholder.com/100',
        description: `We are looking for a talented Frontend Developer to join our growing team. You will be responsible for building modern, responsive web applications using React and related technologies.`,
        responsibilities: [
          'Develop new user-facing features using React.js',
          'Build reusable components and front-end libraries for future use',
          'Translate designs and wireframes into high-quality code',
          'Optimize components for maximum performance across devices',
          'Collaborate with back-end developers and designers',
          'Ensure the technical feasibility of UI/UX designs',
          'Write clean, maintainable, and well-documented code'
        ],
        requirements: [
          'Strong proficiency in JavaScript, including ES6+ features',
          '3+ years of experience with React.js and its core principles',
          'Experience with popular React workflows (Redux, Context API)',
          'Familiarity with RESTful APIs and modern authorization mechanisms',
          'Knowledge of modern front-end build pipelines and tools',
          'Experience with common front-end development tools',
          'Excellent problem-solving skills and attention to detail',
          'Good communication and teamwork abilities'
        ],
        niceToHave: [
          'Experience with TypeScript',
          'Knowledge of Next.js or similar frameworks',
          'Understanding of server-side rendering',
          'Experience with testing frameworks (Jest, React Testing Library)',
          'Familiarity with CI/CD pipelines',
          'Experience with GraphQL'
        ],
        benefits: [
          'Competitive salary with annual increments',
          'Health insurance for you and your family',
          'Flexible working hours',
          'Work from home options',
          'Professional development opportunities',
          'Team outings and events',
          'Modern office with latest technology',
          'Free snacks and beverages'
        ],
        companyInfo: {
          about: 'Tech Innovators is a leading software development company specializing in cutting-edge web and mobile applications. We work with clients globally to deliver innovative solutions.',
          size: '50-200 employees',
          founded: '2015',
          industry: 'Information Technology',
          website: 'www.techinnovators.com'
        },
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Git', 'Responsive Design', 'REST APIs']
      };

      setTimeout(() => {
        setJob(mockJob);
        setLoading(false);
      }, 500);
    };

    fetchJobDetails();
  }, [id]);

  const handleApply = () => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/jobs/${id}` } });
      return;
    }
    
    setShowApplyModal(true);
  };

  const submitApplication = () => {
    // Submit application to backend
    console.log('Submitting application for job:', id);
    setApplicationStatus('success');
    setShowApplyModal(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setApplicationStatus(null);
    }, 3000);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Add API call to save/remove bookmark
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Check out this job: ${job?.title} at ${job?.company}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="mx-auto mb-4 text-red-500" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Job Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Message */}
      {applicationStatus === 'success' && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
          <CheckCircle size={24} />
          <span>Application submitted successfully!</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/jobs')}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Jobs
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={job.companyLogo} 
                  alt={job.company}
                  className="w-20 h-20 rounded-lg border"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
                  <Link to={`/company/${job.company}`} className="text-xl text-blue-600 hover:text-blue-700 mb-3 inline-block">
                    {job.company}
                  </Link>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin size={18} className="mr-2 text-gray-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase size={18} className="mr-2 text-gray-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <Clock size={18} className="mr-2 text-gray-400" />
                      {job.experience}
                    </span>
                    <span className="flex items-center">
                      <DollarSign size={18} className="mr-2 text-gray-400" />
                      {job.salary}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 5).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <button
                  onClick={handleApply}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Apply Now
                </button>
                <button
                  onClick={toggleBookmark}
                  className={`px-6 py-3 rounded-lg border-2 transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-50 border-blue-600 text-blue-600' 
                      : 'border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <Bookmark size={20} className={isBookmarked ? 'fill-current' : ''} />
                </button>
                <button
                  onClick={handleShare}
                  className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nice to Have</h2>
              <ul className="space-y-3">
                {job.niceToHave.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits & Perks</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About {job.company}</h2>
              <p className="text-gray-700 mb-4">{job.companyInfo.about}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-500">Company Size</p>
                  <p className="font-semibold text-gray-800">{job.companyInfo.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Founded</p>
                  <p className="font-semibold text-gray-800">{job.companyInfo.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-semibold text-gray-800">{job.companyInfo.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <a href={`https://${job.companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                    {job.companyInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Job Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="mr-2 text-gray-400" size={20} />
                    Posted
                  </span>
                  <span className="font-semibold text-gray-800">{job.postedDate}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600 flex items-center">
                    <Clock className="mr-2 text-gray-400" size={20} />
                    Deadline
                  </span>
                  <span className="font-semibold text-gray-800">{job.applicationDeadline}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600 flex items-center">
                    <Users className="mr-2 text-gray-400" size={20} />
                    Applicants
                  </span>
                  <span className="font-semibold text-gray-800">{job.applicants}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600 flex items-center">
                    <Building2 className="mr-2 text-gray-400" size={20} />
                    Openings
                  </span>
                  <span className="font-semibold text-gray-800">{job.openings} positions</span>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Apply for this Job
              </button>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-b pb-4 last:border-0">
                    <h4 className="font-semibold text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                      Frontend Developer
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">Tech Solutions Inc.</p>
                    <p className="text-sm text-gray-500">Mumbai • ₹6-10 LPA</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Application</h3>
            <p className="text-gray-600 mb-6">
              You are about to apply for <strong>{job.title}</strong> at <strong>{job.company}</strong>.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Your profile and resume will be shared with the employer.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowApplyModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitApplication}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Confirm & Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;