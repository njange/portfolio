import React, { useState } from 'react';
import { blogPosts, categories, getPostsByCategory } from '../data/blogPosts';
import BlogCard from './BlogCard';
import { HiSearch } from 'react-icons/hi';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-[1200px] mx-auto p-10" id="blog">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          My Blog
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Sharing insights on DevOps, Backend Development, Cloud Architecture, and Cybersecurity
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 glass p-6 rounded-xl">
        {/* Search Bar */}
        <div className="relative mb-6">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-primary-color transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.slug
                  ? 'bg-primary-color text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Load More Button (for future pagination) */}
      {filteredPosts.length > 6 && (
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary-color text-white font-bold rounded-xl hover:bg-opacity-80 transition-all duration-300">
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
