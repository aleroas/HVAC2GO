import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Wave from './Wave'; // Ensure you import the Wave component

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
  }, []);

  return (
    <div className="landing-page">
      <div className="content-wrapper">
        <div className="logo-container">
          <img src="/images/hvaclogo2.png" alt="Logo" className="logo" />
        </div>

        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center text-gray-800"
          >
            Looking to diagnose your HVAC unit? Let us help!
          </motion.h1>
          {isTextVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-8"
            >
              <button
                onClick={() => navigate('/air-conditioning/diag')}
                className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
              >
                GET STARTED
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Wave /> {/* Add the Wave component here */}
    </div>
  );
};

export default LandingPage;
