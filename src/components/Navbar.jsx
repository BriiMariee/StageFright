import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/tour-dates">Tour Dates</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
