import { motion } from "framer-motion";
import { Building2, Truck, Activity } from "lucide-react";
import { Link } from 'react-router-dom';

// Update this import path
import CheckIcon from "../assets/check.svg";

const solutionCards = [
  {
    title: "Industries",
    subtitle: "Finance, Food, Technology",
    buttonText: "Explore More",
    popular: false,
    inverse: false,
    features: [
      "Monitor indirect emissions throughout value chains.",
      "Obtain immediate insights through streamlined data gathering.",
      "Ensure compliance with global ESG regulations.",
    ],
    icon: Building2,
    link: '/industries'
  },
  {
    title: "Supply Chain",
    subtitle: "Supplier Engagement",
    buttonText: "Learn More",
    popular: false,
    inverse: true,
    features: [
      "Effortlessly monitor emissions across the complete supply chains.",
      "Integrate data from various sources seamlessly.",
      "Access real-time analytics for ongoing improvement.",
    ],
    icon: Truck,
    link: '/supply-chain'
  },
];

const SolutionCard = ({ title, subtitle, buttonText, popular, inverse, features, icon: Icon, link }) => (
  <div
    className={`card h-full ${
      inverse ? "border-black bg-black text-white" : "border-gray-200 bg-white text-black"
    }`}
  >
    <div className="flex justify-between items-center">
      <h3
        className={`text-lg font-bold ${
          inverse ? "text-white/60" : "text-black/50"
        }`}
      >
        {title}
      </h3>
      <Icon className={`h-6 w-6 ${inverse ? "text-white" : "text-black"}`} />
      {popular && (
        <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
          <motion.span
            animate={{
              backgroundPositionX: "100%",
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
          >
            Popular
          </motion.span>
        </div>
      )}
    </div>
    {subtitle && (
      <p className="mt-2 text-sm text-black/50">
        {subtitle}
      </p>
    )}
    <div className="flex items-baseline gap-1 mt-[30px]">
      <Link to={link}>
        <button
          className={`btn btn-primary w-full mt-[30px] ${
            inverse ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
    <ul className="flex flex-col gap-5 mt-8">
      {features.map((feature, i) => (
        <li key={i} className="text-sm flex items-center gap-4">
          <img src={CheckIcon} alt="check" className="h-6 w-6" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Solution = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Solutions</h2>
          <p className="section-description mt-5">
            Emitrix delivers tailored solutions for monitoring, reporting compliance, 
            and decarbonization, enabling organizations to enhance their environmental 
            performance and transform into a sustainable business.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center lg:items-stretch">
          {solutionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full lg:w-auto"
            >
              <SolutionCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;