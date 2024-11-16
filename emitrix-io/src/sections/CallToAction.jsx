import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

// Import assets - Update these paths according to your assets directory
import ArrowRight from "../assets/arrow-right.svg";
import starImage from "../assets/phone.png";
import springImage from "../assets/mail.png";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Get in Touch for Sustainable Solutions
          </h2>
          <p className="section-description mt-5">
            Reach out to us to discuss how we can support your sustainability journey 
            and help you achieve your environmental goals.
          </p> 
          <p className="section-description text-sm mt-5">
            Elevate Your Sustainability Strategy: Navigate your journey towards 
            sustainability with our comprehensive enterprise platform, designed for 
            actionable insights.
          </p>
          <motion.img
            src={starImage}
            alt="Star Image"
            style={{
              translateY,
              width: '360px',
              position: 'absolute',
              left: '-350px',
              top: '-137px'
            }}
          />
          <motion.img
            src={springImage}
            alt="Spring Image"
            style={{
              translateY,
              width: '360px',
              position: 'absolute',
              right: '-331px',
              top: '-19px'
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link to="/supply-chain#contact">
            <button className="btn btn-primary">Contact Us</button>
          </Link>
          {/* Preserved commented button for reference
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;