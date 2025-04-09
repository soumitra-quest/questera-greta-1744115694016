import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-primary-dark shadow-lg border-b border-dark-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaPen className="text-accent text-xl" />
            <span className="font-bold text-xl text-gray-100">BlogSpace</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
            <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;