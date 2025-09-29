// src/components/common/Sidebar.jsx
import { Link } from 'react-router-dom';
import { X, Home, Briefcase, User, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, userRole }) => {
  const candidateLinks = [
    { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { to: '/my-applications', icon: <Briefcase size={20} />, label: 'My Applications' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  const hrLinks = [
    { to: '/hr', icon: <Home size={20} />, label: 'Dashboard' },
    { to: '/hr/post-job', icon: <Briefcase size={20} />, label: 'Post Job' },
    { to: '/hr/manage-jobs', icon: <Briefcase size={20} />, label: 'Manage Jobs' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  const links = userRole === 'hr' ? hrLinks : candidateLinks;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
          
          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;