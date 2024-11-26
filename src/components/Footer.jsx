import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white py-6 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <Link to="/">Blogify</Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-purple-400 transition-all duration-200">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-purple-400 transition-all duration-200">
            Read Blogs
          </Link>
          <Link to="/about" className="hover:text-purple-400 transition-all duration-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-purple-400 transition-all duration-200">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-purple-400 transition-all duration-200">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-purple-400 transition-all duration-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-purple-400 transition-all duration-200">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} Blogify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
