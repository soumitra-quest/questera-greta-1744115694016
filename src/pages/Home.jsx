import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        className="text-xl text-gray-300 mb-8 max-w-2xl"
      >
        Discover stories, thoughts, and insights from writers on any topic.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/blog"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg transition-colors"
        >
          Start Reading
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;