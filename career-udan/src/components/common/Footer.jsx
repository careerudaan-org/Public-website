// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Career Udan</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect career opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="text-gray-400 hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/subscription" className="text-gray-400 hover:text-white">Premium</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Desk</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hr" className="text-gray-400 hover:text-white">Post a Job</Link></li>
              <li><Link to="/hr/manage-jobs" className="text-gray-400 hover:text-white">Manage Jobs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Career Udan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;