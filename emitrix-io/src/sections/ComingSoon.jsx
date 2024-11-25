
import { motion } from 'framer-motion';

const ComingSoon = () => {
  console.log('ComingSoon component rendering');
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex justify-center items-center bg-[#f0f0f0] m-0"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-10 rounded-xl bg-white shadow-lg max-w-md mx-4"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Coming Soon
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          Feature in development... Stay tuned!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default ComingSoon;