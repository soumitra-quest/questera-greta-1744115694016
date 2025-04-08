import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { supabase } from '../lib/supabase';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('posts')  // Changed back to 'posts'
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      // Transform data to match component expectations
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
      <div className="text-center text-red-600 py-8">
        {error || 'Post not found'}
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
      <img 
        src={post.image_url || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'} 
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>{post.author}</span>
          <span>•</span>
          <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
          <span>•</span>
          <span className="text-accent">{post.category}</span>
        </div>
        <h1 className="text-4xl font-bold text-primary">{post.title}</h1>
      </header>
      <div className="prose prose-lg">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.article>
  );
};

export default Post;