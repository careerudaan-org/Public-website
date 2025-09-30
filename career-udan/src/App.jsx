import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Layout Components
import Header from './components/common/Header';
// import Navbar from './components/common/Navbar';  // REMOVED - Header handles navigation
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';

// Pages
import Home from './pages/Home';
// import JobSearch from './pages/JobSearch';
import JobDetailsPage from './pages/JobDetailsPage';
import SubscriptionPage from './pages/SubscriptionPage';
import HelpDesk from './pages/HelpDesk';
import Support from './pages/Support';
// import Settings from './pages/Settings';
// import NotFound from './pages/NotFound';

// Legal Pages
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import CancellationPolicy from './pages/legal/CancellationPolicy';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

// Candidate Pages
// import CandidateHome from './pages/candidate/CandidateHome';
// import MyApplications from './pages/candidate/MyApplications';
// import ProfilePage from './pages/candidate/ProfilePage';

// HR Pages
import HRHome from './pages/hr/HRHome';
// import PostJob from './pages/hr/PostJob';
// import ManageJobs from './pages/hr/ManageJobs';
// import ViewApplications from './pages/hr/ViewApplications';

// Placeholder component for pages under construction
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600">This page is under construction</p>
    </div>
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Mock user state - replace with actual auth context
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({ name: 'John Doe', role: 'candidate' }); // Example logged in user

  const isAuthenticated = !!user;
  const userRole = user?.role || 'candidate';

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header - Always visible */}
        <Header />
        
        {/* Navbar - REMOVED (Header includes navigation) */}
        {/* <Navbar /> */}

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Sidebar - Only show when authenticated */}
          {isAuthenticated && (
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)}
              userRole={userRole}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 bg-gray-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              {/* <Route path="/jobs" element={<JobSearch />} /> */}
              <Route path="/jobs" element={<PlaceholderPage title="Job Search" />} />
              <Route path="/jobs/:id" element={<JobDetailsPage />} />
              <Route path="/about" element={<PlaceholderPage title="About Us" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/help" element={<HelpDesk />} />
              <Route path="/support" element={<Support />} />

              {/* Auth Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Candidate Protected Routes */}
              {/* <Route path="/dashboard" element={<CandidateHome />} /> */}
              <Route path="/dashboard" element={<PlaceholderPage title="Candidate Dashboard" />} />
              {/* <Route path="/my-applications" element={<MyApplications />} /> */}
              <Route path="/my-applications" element={<PlaceholderPage title="My Applications" />} />
              {/* <Route path="/profile" element={<ProfilePage />} /> */}
              <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
              <Route path="/settings" element={<PlaceholderPage title="Settings" />} />

              {/* HR Protected Routes */}
              <Route path="/hr" element={<HRHome />} />
              {/* <Route path="/hr/post-job" element={<PostJob />} /> */}
              <Route path="/hr/post-job" element={<PlaceholderPage title="Post Job" />} />
              {/* <Route path="/hr/manage-jobs" element={<ManageJobs />} /> */}
              <Route path="/hr/manage-jobs" element={<PlaceholderPage title="Manage Jobs" />} />
              {/* <Route path="/hr/applications" element={<ViewApplications />} /> */}
              <Route path="/hr/applications" element={<PlaceholderPage title="View Applications" />} />

              {/* Legal Routes */}
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/refund" element={<RefundPolicy />} />
              <Route path="/legal/cancellation" element={<CancellationPolicy />} />

              {/* 404 Not Found */}
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
            </Routes>
          </main>
        </div>

        {/* Footer - Always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;