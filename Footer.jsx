import React from 'react'
import { useState } from 'react'
import './App.css'

function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" alt="Brand Logo" />
              <span>BrandName</span>
            </div>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Company</h2>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Resources</h2>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Community</h2>
            <ul className="footer-links">
              <li><a href="#">Forums</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Meetups</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Stay Updated</h2>
            <form className="footer-form">
              <input type="email" className="footer-input" placeholder="Enter your email" />
              <button className="footer-button">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    );
}

export default Footer