import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Diagnostic(){
    const navigate = useNavigate()
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">Is your HVAC unit running?</h1>
        <p className="mt-4 text-xl text-gray-600">
        <li>Check operation status of thermostat, inside unit, and outside unit</li>
        <li>Check your breakers</li>
        <button onClick={() => navigate('/air-conditioning/diag2')}>Go Back</button>
        </p>
        
      </motion.div>
    );
};



export default Diagnostic;






