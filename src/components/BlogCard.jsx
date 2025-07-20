import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiCalendar, HiClock, HiArrowRight } from 'react-icons/hi';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to individual blog post page (you can implement this later)
    navigate(`/blog/${post.slug}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="glass rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      {/* Featured Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-color to-purple-600 overflow-hidden">
        {/* Placeholder for featured image */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">📝</div>
            <p className="text-sm opacity-75">Featured Image</p>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-primary-color transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <HiCalendar className="text-primary-color" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiClock className="text-primary-color" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={handleReadMore}
          className="flex items-center gap-2 text-primary-color font-medium hover:gap-3 transition-all duration-300 group"
        >
          <span>Read More</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
