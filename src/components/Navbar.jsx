import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaPen className="text-accent text-xl" />
            <span className="font-bold text-xl text-primary">BlogSpace</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-secondary hover:text-accent transition-colors">Home</Link>
            <Link to="/blog" className="text-secondary hover:text-accent transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;