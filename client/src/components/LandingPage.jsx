// // src/components/LandingPage.jsx
// import React from 'react';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [isTextVisible, setTextVisible] = useState(false);
//   const [isButtonsVisible, setButtonsVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setTextVisible(true), 500);
//     setTimeout(() => setButtonsVisible(true), 1500);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="absolute top-0 left-0 right-0 flex justify-center pt-4">
//         <img src="/images/hvaclogo2.png" alt="Logo" className="w-54 h-42" />
//       </div>

//       <motion.h1
//         initial={{ x: -1000 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl font-bold text-center text-gray-800 mt-20"
//       >
//         Looking to diagnose a problem? Choose a free Walkthrough that is best for you!
//       </motion.h1>
//       {isButtonsVisible && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="flex flex-col mt-8 space-y-4"
//         >
//           <button
//             onClick={() => navigate('/heating')}
//             className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
//           >
//             Heating
//           </button>
//           <button
//             onClick={() => navigate('/ventilation')}
//             className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
//           >
//             Ventilation
//           </button>
//           <button
//             onClick={() => navigate('/air-conditioning')}
//             className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
//           >
//             Air Conditioning
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

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
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-4">
        <img src="/images/hvaclogo2.png" alt="Logo" className="w-54 h-42" />
      </div>

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Looking to diagnose a problem? Choose a free Walkthrough that is best for you!
        </h1>

        {isButtonsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-4 mb-8"
          >
            <button
              onClick={() => navigate('/heating')}
              className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            >
              Heating
            </button>
            <button
              onClick={() => navigate('/ventilation')}
              className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            >
              Ventilation
            </button>
            <button
              onClick={() => navigate('/air-conditioning')}
              className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            >
              Air Conditioning
            </button>
          </motion.div>
        )}

        {/* Register and Login buttons */}
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="text-lg font-medium text-teal-500">Register</Link>
          <Link to="/login" className="text-lg font-medium text-teal-500">Login</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
