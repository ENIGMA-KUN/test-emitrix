import { motion } from "framer-motion";

// Update these import paths to match your assets directory
import ghg from "../assets/ghg.jpg";
import brsr from "../assets/brsr.jpg";
import ifrs from "../assets/ifrs.png";
import sasb from "../assets/sasb.png";
import gri from "../assets/gri.png";
import cdp from "../assets/cdp.png";
import cdsb from "../assets/cdsb.png";
import tnfd from "../assets/tnfd.png";
import ungc from "../assets/ungc.png";
import tcfd from "../assets/tcfd.png";
import wdi from "../assets/wdi.jpg";

// Create an array of logos for cleaner rendering
const logos = [
  { src: ghg, alt: "GHG Logo" },
  { src: brsr, alt: "BRSR Logo" },
  { src: ifrs, alt: "IFRS Logo" },
  { src: sasb, alt: "SASB Logo" },
  { src: gri, alt: "GRI Logo" },
  { src: cdp, alt: "CDP Logo" },
  { src: cdsb, alt: "CDSB Logo" },
  { src: tnfd, alt: "TNFD Logo" },
  { src: ungc, alt: "UNGC Logo" },
  { src: tcfd, alt: "TCFD Logo" },
  { src: wdi, alt: "WDI Logo" },
];

export const LogoTicker = () => {
  const renderLogos = () => {
    return logos.map((logo, index) => (
      <img
        key={`${index}`}
        src={logo.src}
        alt={logo.alt}
        className="logo-ticker-image"
      />
    ));
  };

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* First set of logos */}
            {renderLogos()}
            
            {/* Second set of logos for seamless loop */}
            {renderLogos()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;