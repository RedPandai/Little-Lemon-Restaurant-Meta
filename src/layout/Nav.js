import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ isMobile, closeMobileMenu }) {
  return (
    <ul>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link to="booking">Booking</Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link to="/menu">Menu</Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link to="/contact-us">About Us</Link>
      </li>
    </ul>
  );
}
export default Nav;
