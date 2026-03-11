import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { FaBook } from 'react-icons/fa';
import { getBlogs } from '../queries/getBlogs';
import { Blog } from '../types';

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogData(data);
    }
    fetchBlogs();
  }, []);

  if (blogData.length === 0) return <div>Loading...</div>;

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ Blog Posts</h2>
      <p className="blogs-intro">A collection of thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogData.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon"><FaBook /></div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.summary}</p>
              <span className="blog-platform">{blog.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
