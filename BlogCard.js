import React from "react";

function BlogCard({ title, author, content }) {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-author">✍️ {author}</p>
      <p className="blog-content">{content}</p>
    </div>
  );
}

export default BlogCard;
