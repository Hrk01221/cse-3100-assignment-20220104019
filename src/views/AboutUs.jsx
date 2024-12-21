import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-us-header">
        <h2>About Us</h2>
        <p>We are a passionate team committed to delivering the best services.</p>
      </section>

      <section className="about-us-content">
        <div className="team-section">
          <h3 className="ot">Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="Team Member 1" className="team-member-image" />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="Team Member 2" className="team-member-image" />
              <h4>Jane Smith</h4>
              <p>Creative Director</p>
            </div>
            <div className="team-member">
              <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="Team Member 3" className="team-member-image" />
              <h4>Sam Brown</h4>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h3 className='om'>Our Mission</h3>
          <p>We strive to provide exceptional service and create meaningful experiences for our clients. Our mission is to be the leading provider of high-quality solutions that deliver value and success.</p>
        </div>
      </section>

      <section className="social-media-section">
        <h3>Follow Us</h3>
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
