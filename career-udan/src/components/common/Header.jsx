// src/components/common/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Career Udan
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/subscription" className="text-gray-700 hover:text-blue-600">
              Premium
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-blue-600">
              Help
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;