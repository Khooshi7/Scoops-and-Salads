import React from "react"
import "./Footer.css"
import { useState, useEffect } from "react";

function Footer()
{
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(

      <div className={`footer ${showFooter ? 'show' : ''}`}>
        <footer className="footer">
        
      
        <div className="footer-container">
          <div className="footer-column">
            <div>
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            </div>
          </div>
          <div className="footer-column">
            <div>
              <h3>Contact Us</h3>
              <p>Email: contact@example.com</p>
              <p>Phone: +123456789</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>    
          </div>
        </div>
      </footer>
      </div>
    );
  }
  
export default Footer