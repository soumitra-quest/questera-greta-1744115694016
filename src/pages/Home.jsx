import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaPen, FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-gray-100 mb-6"
      >
        Welcome to BlogSpace
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300 mb-12 max-w-2xl"
      >
        Discover stories, thoughts, and insights from writers on any topic.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl"
      >
        <div className="flex flex-col items-center p-6 bg-primary-dark rounded-lg border border-dark-700">
          <FaBookOpen className="text-4xl text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Read Stories</h3>
          <p className="text-gray-400">Explore diverse perspectives and ideas</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-primary-dark rounded-lg border border-dark-700">
          <FaPen className="text-4xl text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Write Posts</h3>
          <p className="text-gray-400">Share your thoughts with the world</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-primary-dark rounded-lg border border-dark-700">
          <FaUsers className="text-4xl text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-400">Join a community of writers</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/blog"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg transition-colors flex items-center space-x-2"
        >
          <span>Start Reading</span>
          <FaBookOpen />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;