import BlogList from "../components/BlogList";
import BlogFooter from "../components/BlogFooter";

function Blog() {
  return (
    <div className="container">
      <h2>Welcome to My Personal Blog</h2>
      <p>Sharing thoughts and learning React!</p>
      <BlogList />
      <BlogFooter />
    </div>
  );
}

export default Blog;
