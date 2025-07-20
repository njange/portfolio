import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostBySlug } from '../data/blogPosts';
import { HiArrowLeft, HiCalendar, HiClock } from 'react-icons/hi';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      // In a real implementation, you would fetch the markdown content here
      // For now, we'll show a placeholder
      setContent('Blog post content will be loaded here from the markdown file.');
    } else {
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#151515] pt-24 flex items-center justify-center">
        <div className="text-gray-200 text-xl">Loading...</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-[#151515] pt-24">
      <div className="max-w-4xl mx-auto p-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-primary-color hover:text-white transition-colors mb-8"
        >
          <HiArrowLeft />
          <span>Back to Blog</span>
        </button>

        {/* Article Header */}
        <article className="glass p-8 rounded-xl">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-color bg-opacity-20 text-primary-color text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <HiCalendar className="text-primary-color" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiClock className="text-primary-color" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
            <div className="text-gray-200 leading-relaxed">
              {/* This is where you would render the markdown content */}
              <p className="text-center text-gray-400 py-12">
                📝 Markdown content will be rendered here.<br/>
                Implement a markdown parser like react-markdown to display the full blog post.
              </p>
            </div>
          </div>

          {/* Author Info */}
          <footer className="mt-12 pt-8 border-t border-gray-600">
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Written by <span className="text-primary-color font-semibold">{post.author}</span>
              </p>
              <p className="text-gray-400">
                DevOps Engineer • Backend Developer • Cybersecurity Enthusiast
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
