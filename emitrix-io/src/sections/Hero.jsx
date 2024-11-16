import { useRef } from "react";
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// Update these import paths to match your assets directory
import ArrowIcon from "../assets/arrow-right.svg";
import cogImage from "../assets/cog.png";
import cylinderImage from "../assets/verified.png";
import noodleImage from "../assets/Money.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 1.0 is here</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Sustainable Business Bridge
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Facilitates Automated supply chain emission monitoring. Giving businesses 
              more control over sustainability strategy and compliance.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link to="/supply-chain#contact">
                <button className="btn btn-primary">Demo now</button>
              </Link>
              <Link to="/supply-chain">
                <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <img src={ArrowIcon} className="h-5 w-5" alt="arrow" />
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-12 lg:left-6"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={cylinderImage}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                width: '220px',
                height: '220px',
                translateY,
              }}
            /> */}
            <motion.img
              src={noodleImage}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                width: '220px',
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;