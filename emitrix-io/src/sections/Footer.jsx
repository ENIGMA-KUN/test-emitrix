import { Link } from 'react-router-dom';

// Update these imports to match your assets directory structure
import logo from "../assets/B_logo.png";
import SocialX from "../assets/social-x.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkedIn from "../assets/social-linkedin.svg";
import SocialPin from "../assets/social-pin.svg";
import SocialYoutube from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:absolute">
          <img src={logo} alt="SaaS logo" className="relative h-[70px]" />
        </div>
        
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/indutries">Solution</a>
          <a href="/supply-chain">Product</a>
          <a href="https://greenblogs.crown-monkey.com/">Blogs</a>
          {/* <a href="#"></a>
          <a href="#">About</a> */}
        </nav>
        
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://x.com/Emitrix156398" target="_blank" rel="noopener noreferrer">
            <img src={SocialX} alt="X (Twitter)" />
          </a>
          <a href="https://www.instagram.com/emitrix.io/" target="_blank" rel="noopener noreferrer">
            <img src={SocialInsta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/104837426" target="_blank" rel="noopener noreferrer">
            <img src={SocialLinkedIn} alt="LinkedIn" />
          </a>
          {/* <img src={SocialPin} alt="Pinterest" /> */}
          {/* <img src={SocialYoutube} alt="YouTube" /> */}
        </div>
        
        <p className="mt-6">
          &copy; 2024 Emitrix, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;