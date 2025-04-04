import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footerholder">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Hosting</h4>
            <ul>
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Airbnb</h4>
            <ul>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
          <div className="footer-icons">
            <span>🌐 English (IN)</span>
            <span>₹ INR</span>
            <span><FaFacebook /></span>
            <span><AiFillInstagram /></span>
            <span><FaXTwitter /></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
