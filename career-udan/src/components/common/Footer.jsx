// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.jpg';
import iconInsta from '../../assets/icons/image.png';
import iconFacebook from '../../assets/icons/facebook.jpg';
import iconTwitter from '../../assets/icons/twitter.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="Career Udan" className="h-16 w-16 rounded-full object-cover" />
              <span className="text-2xl font-bold">Career Udan</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect career opportunity.
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <img src={iconInsta} alt="Instagram" className="h-8 w-8 rounded-lg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <img src={iconFacebook} alt="Facebook" className="h-8 w-8 rounded-lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <img src={iconTwitter} alt="Twitter" className="h-8 w-8 rounded-lg" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Desk</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Raise Issue</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy & Policy</Link></li>
              <li><Link to="/legal/refund" className="text-gray-400 hover:text-white transition-colors">Refund & Cancellation</Link></li>
            </ul>
          </div>

          {/* Jobs */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Jobs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link to="/hr" className="text-gray-400 hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link to="/subscription" className="text-gray-400 hover:text-white transition-colors">Premium Plans</Link></li>
              <li><Link to="/hr/manage-jobs" className="text-gray-400 hover:text-white transition-colors">Manage Jobs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 CAREER UDAN TECHNOLOGIES LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;