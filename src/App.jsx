import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TourDates from "./components/TourDates";
import Merch from "./components/Merch";
import Contact from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="root">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tour-dates">Tour Dates</Link></li>
              <li><Link to="/merch">Merch</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour-dates" element={<TourDates />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Stage Fright. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

