import { NavLink } from "react-router-dom";
import "../App.css";
     // क्योंकि तुम सारी CSS App.css में रखते हो

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact</NavLink>
      <NavLink to="/dashboard" className="link">Dashboard</NavLink>
      <NavLink to="/blog" className="link">Blog</NavLink>
    </nav>
  );
}

export default Navbar;
