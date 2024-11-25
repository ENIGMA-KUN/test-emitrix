// TeamPage.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './TeamPage.css';

const teamMembers = [
  {
    name: "Divya Kalash",
    image: "https://cdn.prod.website-files.com/665dc9a10df6b2d63e3b8fc6/666b1aac732c88ab0b25655f_1.jpg",
    bio: "Hey i'm kalash, i like playing chess, addition to that i am really concern for future flowers and leaves, i think technology and strategy can produced a solution for this, what do you think."
  },
  {
    name: "Shubham Chakraborty",
    image: "https://cdn.prod.website-files.com/665dc9a10df6b2d63e3b8fc6/666b1af67fe40ec6e40d3780_pic.jpg",
    bio: "Hi there! I'm Shubham Chakraborty, pursuing my Master's in Information Technology at Arizona State University. As a tech enthusiast, I'm passionate about building AI-powered solutions that make a real difference."
  },
  {
    name: "Anupam Srivastava",
    image: "https://cdn.prod.website-files.com/665dc9a10df6b2d63e3b8fc6/66671b57f4b42d2b1d458bd3_Anupam_bio.webp",
    bio: "Heyy, I'm Anupam Srivastava, a master's student in Information Systems at University College Dublin. Passionate about merging technology and sustainability, I focus on blockchain, AI, and promoting green initiatives."
  },
  {
    name: "Abhishek Anand",
    image: "https://cdn.prod.website-files.com/665dc9a10df6b2d63e3b8fc6/666b1bb431106d46abd546ad_1718243066510.jpeg",
    bio: "big boss"
  },
  {
    name: "Shalvi Singh",
    image: "https://cdn.prod.website-files.com/665dc9a10df6b2d63e3b8fc6/666b1b5f72a8861797ac1bca_5.jpeg",
    bio: "Hey there, I'm Shalvi Singh, a Software Engineer at Societe Generale. In my role, I focus on creating great user experiences with technologies like React, blockchain, AI."
  }
];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isPopupOpen) {
        const cursor = document.querySelector('.cursor_dot');
        if (cursor) {
          cursor.style.transform = `translate(${e.clientX - 35}px, ${e.clientY - 35}px)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isPopupOpen]);

  const handleOpenPopup = (member) => {
    setSelectedMember(member);
    setIsPopupOpen(true);
    document.body.classList.add('no-scroll', 'popup-open');
  };

  const handleClosePopup = (e) => {
    if (e.target === popupRef.current) {
      setIsPopupOpen(false);
      document.body.classList.remove('no-scroll', 'popup-open');
      setTimeout(() => setSelectedMember(null), 300);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-wrapper">
      {/* Custom Cursor */}
      <div className="cursor">
        <div className="cursor_dot">
          <div className="cursor_embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 145.917 145.917">
              <g transform="translate(-211.197 479.803)">
                <path d="M-73.735-406.674H117.622" transform="translate(-18.923 -134.799) rotate(45)" fill="none" stroke="currentColor" strokeWidth="15"/>
                <path d="M0,0H191.357" transform="translate(351.81 -474.5) rotate(135)" fill="none" stroke="currentColor" strokeWidth="15"/>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <main className="main-wrapper">
        {/* Team Section */}
        <section className="section">
          <div className="container">
            <div className="team_heading-wrap">
              <h1 className="heading">Our Team</h1>
            </div>
            <div className="team_wrapper">
              <div className="team_grid">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="team_item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div 
                      className="team_card" 
                      onClick={() => handleOpenPopup(member)}
                    >
                      <div className="team_image">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="image"
                          loading="lazy"
                        />
                      </div>
                      <div className="team_title-wrap">
                        <div className="team_underline" />
                        <p className="team_name">{member.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popup */}
        <AnimatePresence>
          {isPopupOpen && selectedMember && (
            <motion.div
              ref={popupRef}
              className="popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopup}
            >
              <div className="popup_bg" />
              <div className="popup_wrapper">
                <div className="popup_list">
                  <div className="popup_item active">
                    <div className="popup_flex">
                      <motion.div 
                        className="popup_content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="popup_contain">
                          <p className="popup_name">{selectedMember.name}</p>
                          <div className="popup_rich">
                            <p>{selectedMember.bio}</p>
                          </div>
                        </div>
                      </motion.div>
                      <div className="popup_visual">
                        <div className="popup_img">
                          <img
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            className="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-heading">Contact Us</h2>
            <div className="contact-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Business email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
              <div className="contact-info">
                <div className="info-group">
                  <h3>Address</h3>
                  <p>560064 BMS Institute Of technology, Bangalore, INDIA</p>
                </div>
                <div className="info-group">
                  <h3>Phone</h3>
                  <a href="tel:#">xxx-xxx-xxx</a>
                </div>
                <div className="info-group">
                  <h3>Email Address</h3>
                  <a href="https://www.emitrix.io">www.emitrix.io</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;