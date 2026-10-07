// src/components/BlogList.js
import React from "react";
import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    { title: "React Basics", author: "Priya", content: "React is a JS library for building UIs." },
    { title: "Props & State", author: "Rohan", content: "Props pass data, State manages UI changes." },
    { title: "Dynamic Rendering", author: "Arjun", content: "map() helps render lists easily." }
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
}

export default BlogList;
