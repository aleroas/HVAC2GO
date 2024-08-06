//heatingWalkthrough.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeatingWalkthrough = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 text-center bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800">Heating Walkthrough</h1>
      <p className="mt-4 text-xl text-gray-600">Here's how to diagnose common Heating problems...</p>
      {/* will add content here */}

      {/* Connect Button */}
      <div className="mt-8">
        <p className="text-lg font-medium text-gray-800 mb-4">Need more help? Connect with one of our technicians!</p>
        <Link to="/connect-technician">
          <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700">
            Connect
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeatingWalkthrough;
