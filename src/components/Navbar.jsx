import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaPen, FaHome, FaBookOpen, FaMoon, FaSearch, FaBell, FaUser, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-primary-dark shadow-lg border-b border-dark-700 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <FaPen className="text-white text-sm" />
              </div>
              <span className="font-bold text-xl text-gray-100">BlogSpace</span>
            </Link>
          </motion.div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-dark-800 rounded-lg px-3 py-2 mx-4 flex-1 max-w-md">
            <FaSearch className="text-gray-400 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search posts..."
              className="bg-transparent border-none focus:outline-none text-gray-100 w-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="text-gray-300 hover:text-accent transition-colors flex items-center space-x-1 px-2">
                <div className="bg-dark-800 p-1.5 rounded-lg">
                  <FaHome className="text-sm" />
                </div>
                <span className="text-sm">Home</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors flex items-center space-x-1 px-2">
                <div className="bg-dark-800 p-1.5 rounded-lg">
                  <FaBookOpen className="text-sm" />
                </div>
                <span className="text-sm">Blog</span>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-accent transition-colors bg-dark-800 p-1.5 rounded-lg"
            >
              <FaBell className="text-sm" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-accent transition-colors bg-dark-800 p-1.5 rounded-lg"
            >
              <FaMoon className="text-sm" />
            </motion.button>

            <div className="flex items-center space-x-2 border-l border-dark-700 pl-4 ml-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 bg-accent hover:bg-accent-hover text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <FaSignInAlt className="text-sm" />
                <span className="text-sm">Sign In</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-accent transition-colors bg-dark-800 p-1.5 rounded-lg"
              >
                <FaUser className="text-sm" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-accent transition-colors bg-dark-800 p-2 rounded-lg"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center bg-dark-800 rounded-lg px-3 py-2"
        >
          <FaSearch className="text-gray-400 text-sm mr-2" />
          <input
            type="text"
            placeholder="Search posts..."
            className="bg-transparent border-none focus:outline-none text-gray-100 w-full"
          />
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-dark border-t border-dark-700"
          >
            <div className="px-4 py-3 space-y-3">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="text-sm" />
                <span>Home</span>
              </Link>
              <Link
                to="/blog"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBookOpen className="text-sm" />
                <span>Blog</span>
              </Link>
              <div className="flex items-center justify-between p-2">
                <button className="text-gray-300 hover:text-accent transition-colors">
                  <FaBell className="text-sm" />
                </button>
                <button className="text-gray-300 hover:text-accent transition-colors">
                  <FaMoon className="text-sm" />
                </button>
                <button className="text-gray-300 hover:text-accent transition-colors">
                  <FaUser className="text-sm" />
                </button>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white p-2 rounded-lg transition-colors">
                <FaSignInAlt className="text-sm" />
                <span>Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;