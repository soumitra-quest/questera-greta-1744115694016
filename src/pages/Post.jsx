import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaUser, FaCalendar, FaTag, FaArrowLeft } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      const transformedPost = data ? {
        id: data.id,
        title: data.title,
        excerpt: data.description || data.excerpt,
        content: data.content,
        author: data.author || 'Anonymous',
        category: data.category || 'Uncategorized',
        image_url: data.image_url,
        created_at: data.created_at
      } : null;

      setPost(transformedPost);
    } catch (err) {
      console.error('Error fetching post:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center text-red-400 py-8">
        {error || 'Post not found'}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Link 
        to="/blog"
        className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors mb-4 md:mb-6"
      >
        <FaArrowLeft className="text-sm" />
        <span className="text-sm md:text-base">Back to Blog</span>
      </Link>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full"
      >
        <img
          src={post.image_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'}
          alt={post.title}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-6 md:mb-8 shadow-xl"
        />
        <header className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            <div className="flex items-center space-x-1 md:space-x-2">
              <FaUser className="text-accent" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <FaCalendar className="text-accent" />
              <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <FaTag className="text-accent" />
              <span>{post.category}</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">{post.title}</h1>
        </header>
        <div className="prose prose-sm md:prose-lg prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300 text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

export default Post;