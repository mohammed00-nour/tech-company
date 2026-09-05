import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h2>Tech Company</h2>

      <p>
        Providing modern technology solutions for businesses.
      </p>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <p>© 2026 Tech Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;