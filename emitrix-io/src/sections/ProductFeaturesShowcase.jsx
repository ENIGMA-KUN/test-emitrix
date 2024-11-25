// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
// import {
//   BarChart2,
//   FileText,
//   TrendingDown,
//   Package,
//   Database
// } from "lucide-react";
// import { getImageUrl } from '../utils/imageUtils';

// // Import your floating image using the utility function
// const floatingImage = getImageUrl('pollution.png');

// const FeatureCard = ({ title, description, buttonText, link, Icon }) => (
//   <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-indigo hover:to-[#001E80] hover:scale-105 hover:opacity-90">
//     <div className="bg-white rounded-lg p-4 mb-4">
//       <Icon className="h-6 w-6 text-[#001E80]" />
//     </div>
//     <h3 className="text-[#001E80] text-lg font-semibold mb-2">{title}</h3>
//     <p className="text-[#001E80] text-sm mb-4 flex-grow">{description}</p>
//     <Link to={link}>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-auto bg-white text-[#001E80] font-bold py-2 px-4 rounded transition duration-300 hover:bg-gray-200"
//       >
//         {buttonText}
//       </motion.button>
//     </Link>
//   </div>
// );

// const monitoringFeatures = [
//   {
//     title: "Automated Scope 3 Monitoring",
//     description:
//       "Automate Scope 3 data collection with our supplier-relationship architecture, enabling real-time monitoring of key KPIs and seamless supplier engagement for transparent emissions tracking.",
//     buttonText: "Explore More",
//     link: "/supply-chain",
//     Icon: BarChart2
//   },
//   {
//     title: "Product-Based Emission Monitoring",
//     description:
//       "Easily monitor emissions at the product level with our platform, providing seamless visibility across Scope 1, 2, and 3, along with integrated LCA features for a comprehensive environmental impact assessment.",
//     buttonText: "Explore More",
//     link: "/product-based",
//     Icon: Package
//   },
//   {
//     title: "Data Integration from Diverse Sources",
//     description:
//       "Collect Scope 1, 2, and 3 data across multiple sources with our integrated platform, enabling real-time monitoring and seamless reporting for transparent emissions management.",
//     buttonText: "Explore More",
//     link: "/datacollection",
//     Icon: Database
//   }
// ];

// const decarbonizationFeatures = [
//   {
//     title: "Data-Driven Net-Zero Goal Setting",
//     description:
//       "Easily set and track your organization's net-zero reduction goals at various granular levels—boundary, scope, product, and activity—using decision-making and supplier evaluation tools tailored for Scope 3 emissions.",
//     buttonText: "Explore More",
//     link: "/net-zero",
//     Icon: TrendingDown
//   },
//   {
//     title: "Scenario-Based Reduction Strategies",
//     description:
//       "Gain insights into potential reduction opportunities by analyzing physical risks, transition risks, and their financial impacts on your organization, empowering informed decision-making for sustainable growth.",
//     buttonText: "Explore More",
//     link: "/scenerio-analysis",
//     Icon: TrendingDown
//   }
// ];

// const reportingFeatures = [
//   {
//     title: "Effortless Compliance Reporting",
//     description:
//       "Leverage our Gen-AI ESG report generation platform for seamless compliance reporting across key standards like CSRD and IFRS. Emitrix enhances transparency and accuracy in sustainability reporting, empowering organizations to meet regulatory requirements effortlessly.",
//     buttonText: "Explore More",
//     link: "/reporting",
//     Icon: FileText
//   }
// ];

// const FeatureSection = ({ title, features }) => (
//   <div className="mb-12">
//     <h3 className="text-2xl font-regular text-center mb-6 border-2 border-[#010D3E] rounded-full py-2 px-4 inline-block">
//       {title}
//     </h3>
//     <div className={`grid grid-cols-1 md:grid-cols-${features.length > 2 ? '3' : '2'} gap-6`}>
//       {features.map((feature, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <FeatureCard {...feature} />
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );

// const ProductFeaturesShowcase = () => {
//   return (
//     <section className="bg-white text-black py-16 relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="section-title">Products</h2>
//           <p className="section-description max-w-3xl mx-auto mt-5">
//             Emitrix offers automated emissions monitoring solutions, specializing in Scope 3. 
//             Our platform delivers GenAI-driven compliance reporting that aligns with global 
//             standards and regulations. We empower businesses to set decarbonization targets, 
//             conduct scenario analysis, and monitor product emissions throughout their lifecycle. 
//             Track, reduce, and transform your carbon footprint with Emitrix!
//           </p>
//         </div>

//         {/* Floating Image */}
//         <motion.div
//           className="absolute right-0 hidden lg:block"
//           style={{
//             top: '63%',
//             transform: 'translateY(-70%)',
//           }}
//           animate={{
//             y: [-20, 20],
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "reverse",
//             duration: 2,
//             ease: "easeInOut",
//           }}
//         >
//           <img
//             src={floatingImage}
//             alt="Floating illustration"
//             className="object-contain"
//             style={{
//               width: '700px',
//               height: '600px'
//             }}
//           />
//         </motion.div>

//         {/* Feature Sections */}
//         <div className="relative z-10">
//           <FeatureSection title="Monitoring" features={monitoringFeatures} />
//           <FeatureSection title="Decarbonization" features={decarbonizationFeatures} />
//           <FeatureSection title="Reporting" features={reportingFeatures} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductFeaturesShowcase;

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  BarChart2,
  FileText,
  TrendingDown,
  Package,
  Database
} from "lucide-react";
import { getImageUrl } from '../utils/imageUtils';

const floatingImage = getImageUrl('pollution.png');

// Feature card component
const FeatureCard = ({ title, description, buttonText, link, Icon }) => (
  <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-indigo hover:to-[#001E80] hover:scale-105 hover:opacity-90">
    <div className="bg-white rounded-lg p-4 mb-4">
      <Icon className="h-6 w-6 text-[#001E80]" />
    </div>
    <h3 className="text-[#001E80] text-lg font-semibold mb-2">{title}</h3>
    <p className="text-[#001E80] text-sm mb-4 flex-grow">{description}</p>
    <Link to={link}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto bg-white text-[#001E80] font-bold py-2 px-4 rounded transition duration-300 hover:bg-gray-200"
      >
        {buttonText}
      </motion.button>
    </Link>
  </div>
);

const ProductFeaturesShowcase = () => {
  const monitoringFeatures = [
    {
      title: "Automated Scope 3 Monitoring",
      description: "Automate Scope 3 data collection with our supplier-relationship architecture, enabling real-time monitoring of key KPIs and seamless supplier engagement for transparent emissions tracking.",
      buttonText: "Explore More",
      link: "/supply-chain",
      Icon: BarChart2
    },
    {
      title: "Product-Based Emission Monitoring",
      description: "Easily monitor emissions at the product level with our platform, providing seamless visibility across Scope 1, 2, and 3, along with integrated LCA features for a comprehensive environmental impact assessment.",
      buttonText: "Explore More",
      link: "/product-based",
      Icon: Package
    },
    {
      title: "Data Integration from Diverse Sources",
      description: "Collect Scope 1, 2, and 3 data across multiple sources with our integrated platform, enabling real-time monitoring and seamless reporting for transparent emissions management.",
      buttonText: "Explore More",
      link: "/datacollection",
      Icon: Database
    }
  ];

  const decarbonizationFeatures = [
    {
      title: "Data-Driven Net-Zero Goal Setting",
      description: "Easily set and track your organization's net-zero reduction goals at various granular levels—boundary, scope, product, and activity—using decision-making and supplier evaluation tools tailored for Scope 3 emissions.",
      buttonText: "Explore More",
      link: "/net-zero",
      Icon: TrendingDown
    },
    {
      title: "Scenario-Based Reduction Strategies",
      description: "Gain insights into potential reduction opportunities by analyzing physical risks, transition risks, and their financial impacts on your organization, empowering informed decision-making for sustainable growth.",
      buttonText: "Explore More",
      link: "/scenerio-analysis",
      Icon: TrendingDown
    }
  ];

  const reportingFeatures = [
    {
      title: "Effortless Compliance Reporting",
      description: "Leverage our Gen-AI ESG report generation platform for seamless compliance reporting across key standards like CSRD and IFRS. Emitrix enhances transparency and accuracy in sustainability reporting, empowering organizations to meet regulatory requirements effortlessly.",
      buttonText: "Explore More",
      link: "/reporting",
      Icon: FileText
    }
  ];

  return (
    <section className="bg-white text-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Products</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Emitrix offers automated emissions monitoring solutions, specializing in Scope 3.
            Our platform delivers GenAI-driven compliance reporting that aligns with global
            standards and regulations. We empower businesses to set decarbonization targets,
            conduct scenario analysis, and monitor product emissions throughout their lifecycle.
            Track, reduce, and transform your carbon footprint with Emitrix!
          </p>
        </div>

                {/* Monitoring Section */}
                <div className="mb-12">
          <h3 className="text-2xl font-regular text-center mb-6 border-2 border-[#010D3E] rounded-full py-2 px-4 inline-block">
            Monitoring
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decarbonization Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-regular text-center mb-6 border-2 border-[#010D3E] rounded-full py-2 px-4 inline-block">Decarbonization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decarbonizationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reporting Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-regular text-center mb-6 border-2 border-[#010D3E] rounded-full py-2 px-4 inline-block">Reporting</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Image */}
        <motion.div
          className="absolute right-0 hidden lg:block"
          style={{
            top: '63%',
            transform: 'translateY(-70%)',
            zIndex: 0
          }}
          animate={{
            y: [-20, 20],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            src={floatingImage}
            alt="Floating illustration"
            className="object-contain"
            style={{
              width: '700px',
              height: '600px'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeaturesShowcase;