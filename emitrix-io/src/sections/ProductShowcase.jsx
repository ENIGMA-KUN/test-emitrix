import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Update these import paths
import productImage from "../assets/product-image.png";
import demoimg from "../assets/3.png";
import scope3flow from "../assets/scope3flow.png";
import pyramidImage from "../assets/Stats.png";
import tubeImage from "../assets/reduce.png";
import InteractiveImage from "../components/InteractiveImage";

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title text-4xl md:text-4xl mt-5">
            Automate Scope 3 Emission Tracking with Complete Emission Mapping
          </h2>
          <p className="section-description mt-5">
            With our Scope 3 emissions architecture, you can seamlessly track and 
            measure indirect emissions across your entire value chain in real-time. 
            Eliminate manual data collection and gain instant, accurate insights. 
            Our advanced mapping capabilities provide a clear view of supplier 
            connections, processes, and the resulting emissions.
          </p>
        </div>
        <div className="relative">
          {/* Interactive Image Component */}
          <InteractiveImage
            src={scope3flow}
            alt="Scope 3 Flow Diagram"
          />
          
          {/* Floating Images */}
          <motion.img
            src={pyramidImage}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
              width: '262px',
              height: '262px'
            }}
          />
          <motion.img
            src={tubeImage}
            alt="Tube image"
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
              width: '248px',
              height: '248px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;