import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Instagram, Linkedin, Github, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Footer Styles */
        .footer {
          background:var(--bg-color);
          color: var(--text-color);
          padding: 3rem 1rem 1.5rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        /* About Section */
        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .footer-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #9ca3af;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.75rem;
          padding-top: 0.5rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          background-color: #334155;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px);
        }

        .social-link.facebook:hover {
          background-color: #1877f2;
        }

        .social-link.twitter:hover {
          background-color: #0ea5e9;
        }

        .social-link.instagram:hover {
          background-color: #e91e63;
        }

        .social-link.linkedin:hover {
          background-color: #0a66c2;
        }

        .social-link.github:hover {
          background-color: #374151;
        }

        /* Links */
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          font-size: 0.875rem;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        /* Newsletter */
        .newsletter-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .newsletter-input-wrapper {
          position: relative;
        }

        .newsletter-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
        }

        .newsletter-input {
          width: 100%;
          padding: 0.625rem 1rem 0.625rem 2.5rem;
          background-color: #334155;
          border: 1px solid #475569;
          border-radius: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: #6b7280;
        }

        .newsletter-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .subscribe-btn {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          font-weight: 500;
          padding: 0.625rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .subscribe-btn:hover {
          background-color: #1d4ed8;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        /* Footer Bottom */
        .footer-divider {
          border-top: 1px solid #334155;
          padding-top: 2rem;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .copyright {
          font-size: 0.875rem;
          color: #9ca3af;
          text-align: center;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          font-size: 0.875rem;
        }

        .footer-bottom-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #ffffff;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }

          .copyright {
            text-align: left;
          }
        }

        @media (min-width: 1024px) {
          .footer {
            padding: 3rem 2rem 1.5rem;
          }

          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0.75rem 1.25rem;
          }

          .footer-heading {
            font-size: 1.125rem;
          }

          .social-links {
            gap: 0.5rem;
          }

          .social-link {
            width: 2.25rem;
            height: 2.25rem;
          }
        }
      `}</style>

      <footer className="footer">
          <div className="footer-container">
            {/* Main Footer Content */}
            <div className="footer-grid">
              
              {/* About Section */}
              <div className="footer-section">
                <h3 className="footer-heading">About Us</h3>
                <p className="footer-description">
                  Building innovative solutions for the modern web. Dedicated to creating exceptional digital experiences.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-link twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="social-link instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="social-link linkedin">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="social-link github">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                  {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="footer-link">
                        → {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="footer-section">
                <h3 className="footer-heading">Resources</h3>
                <ul className="footer-links">
                  {['Documentation', 'Blog', 'Support', 'Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <a href="#" className="footer-link">
                        → {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="footer-section">
                <h3 className="footer-heading">Newsletter</h3>
                <p className="footer-description">
                  Subscribe to get updates on our latest features and releases.
                </p>
                <div className="newsletter-section">
                  <div className="newsletter-input-wrapper">
                    <Mail className="newsletter-icon" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                      placeholder="Enter your email"
                      className="newsletter-input"
                    />
                  </div>
                  <button onClick={handleSubscribe} className="subscribe-btn">
                    <Send size={16} />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-divider">
              <div className="footer-bottom">
                <p className="copyright">
                  © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                  <a href="#" className="footer-bottom-link">Privacy</a>
                  <a href="#" className="footer-bottom-link">Terms</a>
                  <a href="#" className="footer-bottom-link">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}