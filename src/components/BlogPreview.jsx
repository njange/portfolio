import React from 'react';
import { getFeaturedPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';
import { HiArrowRight } from 'react-icons/hi';

const BlogPreview = () => {
  const featuredPosts = getFeaturedPosts(3);

  const handleViewAllBlogs = () => {
    // Scroll to blog section or navigate to blog page
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-10" id="blog-preview">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Insights and tutorials on DevOps, Backend Development, and Cloud Technologies
        </p>
      </div>

      {/* Featured Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="text-center">
        <button
          onClick={handleViewAllBlogs}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-color text-white font-bold rounded-xl hover:bg-opacity-80 transition-all duration-300 group"
        >
          <span>View All Blog Posts</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BlogPreview;
