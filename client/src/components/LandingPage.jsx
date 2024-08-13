// src/components/LandingPage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Wave from './Wave'; // Ensure you import the Wave component

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);
  const [isButtonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
    setTimeout(() => setButtonsVisible(true), 1500);
  }, []);

  return (
    <div className="landing-page">
      <Wave /> {/* Add the Wave component here */}
      <div className="logo-container">
        <img src="/images/hvaclogo2.png" alt="Logo" className="logo" />
      </div>

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-white p-8 rounded-lg shadow-lg"
      >
     

        {isButtonsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="button-container"
          >
            <button
              onClick={() => navigate('/heating')}
              className="option-button"
            >
              Heating
            </button>
            <button
              onClick={() => navigate('/ventilation')}
              className="option-button"
            >
              Ventilation
            </button>
            <button
              onClick={() => navigate('/air-conditioning')}
              className="option-button"
            >
              Air Conditioning
            </button>
          </motion.div>
        )}

        {/* Register and Login buttons */}
        <div className="auth-buttons">
          <Link to="/register" className="auth-link">Register</Link>
          <Link to="/login" className="auth-link">Login</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
