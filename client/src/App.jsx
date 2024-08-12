// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import HeatingWalkthrough from "./components/HeatingWalkthrough";
// import VentilationWalkthrough from "./components/VentilationWalkthrough";
// import AirConditioningWalkthrough from "./components/AirConditioningWalkthrough";
// import ConnectTechnician from "./components/ConnectTechnician";
// import Register from "./components/Register";
// import Login from "./components/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/heating" element={<HeatingWalkthrough />} />
//         <Route path="/ventilation" element={<VentilationWalkthrough />} />
//         <Route
//           path="/air-conditioning"
//           element={<AirConditioningWalkthrough />}
//         />
//         <Route path="/connect-technician" element={<ConnectTechnician />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HeatingWalkthrough from './components/HeatingWalkthrough';
import VentilationWalkthrough from './components/VentilationWalkthrough';
import AirConditioningWalkthrough from './components/AirConditioningWalkthrough';
import ConnectTechnician from './components/ConnectTechnician';
import Register from './components/Register'; 
import Login from './components/Login'; 
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="flex justify-between p-4 bg-gray-100">
        <div className="flex space-x-4">
          <Link to="/" className="text-lg font-medium text-teal-500">Home</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/heating" element={<HeatingWalkthrough />} />
        <Route path="/ventilation" element={<VentilationWalkthrough />} />
        <Route path="/air-conditioning" element={<AirConditioningWalkthrough />} />
        <Route 
          path="/connect-technician" 
          element={isAuthenticated ? <ConnectTechnician /> : <Navigate to="/login" />} 
        />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
