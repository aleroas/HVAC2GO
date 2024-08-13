import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function NotRunning(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">So neither of your units are operating</h1>
        <p className="mt-4 text-xl text-gray-600">Here is what you should do next</p>
        <p>Are both units currently operating?</p>
      </motion.div>
    );
};

export default NotRunning;