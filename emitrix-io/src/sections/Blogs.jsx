// src/sections/Blogs.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';  

// Import your images - adjust the paths based on your new structure
import demoimg from "../assets/blogs.png";
import pyramidImage from "../assets/blog.png";
import tubeImage from "../assets/rocket.png";
import ArrowIcon from "../assets/arrow-right.svg";

export const Blogs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#ffffff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Emitrix Blogs</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track Emission
          </h2>
          <p className="section-description mt-5">
            Insights for Sustainable Transformation: Explore our blog for expert insights, industry trends, and practical guidance on sustainability practices, emissions monitoring, and achieving compliance. Stay informed and empowered to drive your organizations sustainable journey.
          </p>
        </div>
        <div className="relative">
          {/* Replaced Next.js Image with regular img */}
          <img src={demoimg} alt="Product Image" className="mt-10 w-full" />
          <motion.img
            src={pyramidImage}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
              height: 262,
              width: 262
            }}
          />
          <motion.img
            src={tubeImage}
            alt="Tube image"
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
              height: 248,
              width: 248
            }}
          />
        </div>
      </div>
      <div className="flex gap-1 items-center justify-center mt-[30px]">
        {/* If this is an external link, we can keep using 'a' tag */}
        <a href="https://greenblogs.crown-monkey.com/" className="btn btn-primary">
          Blogs
        </a>
        {/* Commented out section preserved
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
          <ArrowIcon className="h-5 w-5" />
        </button>
        */}
      </div>
    </section>
  );
};

export default Blogs;