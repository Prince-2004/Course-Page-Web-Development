import React from 'react'
import { useState } from 'react'
import './App.css'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log('Search query:', searchQuery);
      // Handle the search logic here
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <nav className="navbar">
        <div className="brand-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" alt="Brand Logo" />
        </div>
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className="profile-button-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" alt="User Profile" />
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="search-bar">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                🔍
              </button>
            </form>
          </div>
          <button className="icon-button">🔔</button>
          <button className="icon-button">✉️</button>
          <div className="user-profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" alt="User Profile" />
          </div>
        </div>
      </nav>
    );
  }

export default Navbar