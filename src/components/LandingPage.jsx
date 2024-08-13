// src/components/LandingPage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);
  const [isButtonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
    setTimeout(() => setButtonsVisible(true), 1500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-gray-800"
      >
        Looking to diagnose your HVAC unit? Let us help!
      </motion.h1>
      {isButtonsVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col mt-8 space-y-4"
        >
          <button
            onClick={() => navigate('/air-conditioning/diag')}
            className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
          >
            GET STARTED
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
