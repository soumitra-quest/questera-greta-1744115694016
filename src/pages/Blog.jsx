import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaUser, FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const transformedPosts = data?.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.description || post.excerpt,
        content: post.content,
        author: post.author || 'Anonymous',
        category: post.category || 'Uncategorized',
        image_url: post.image_url,
        created_at: post.created_at
      })) || [];

      setPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        Error loading posts: {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 md:mb-8">Latest Posts</h1>
      {posts.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          No posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-dark rounded-lg shadow-xl overflow-hidden border border-dark-700 hover:border-dark-600 transition-colors"
            >
              <img
                src={post.image_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center space-x-2">
                  <FaTag className="text-accent text-xs md:text-sm" />
                  <span className="text-xs md:text-sm text-accent font-semibold">{post.category}</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-100 mt-2 mb-2 md:mb-3 line-clamp-2">
                  <Link to={`/post/${post.id}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs md:text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FaUser className="text-gray-400" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendar className="text-gray-400" />
                    <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
                  </div>
                </div>
                <Link 
                  to={`/post/${post.id}`}
                  className="mt-4 flex items-center justify-center space-x-2 text-accent hover:text-accent-hover transition-colors text-sm md:text-base"
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-xs md:text-sm" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;