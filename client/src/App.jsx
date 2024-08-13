// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import HeatingWalkthrough from './components/HeatingWalkthrough';
// import VentilationWalkthrough from './components/VentilationWalkthrough';
// import AirConditioningWalkthrough from './components/AirConditioningWalkthrough';
// import ConnectTechnician from './components/ConnectTechnician';
// import Register from './components/Register'; 
// import Login from './components/Login'; 
// import { useState, useEffect } from 'react';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);

//   return (
//     <Router>
//       <div className="flex justify-between p-4 bg-gray-100">
//         <div className="flex space-x-4">
//           <Link to="/" className="text-lg font-medium text-teal-500">Home</Link>
//         </div>
//         <div className="flex space-x-4">
//           {isAuthenticated ? (
//             <>
//               {/* <button 
//                 onClick={() => {
//                   localStorage.removeItem('token');
//                   setIsAuthenticated(false);
//                 }} 
//                 className="text-lg font-medium text-teal-500"
//               >
//                 Logout
//               </button> */}
//             </>
//           ) : (
//             <>
//               <Link to="/register" className="text-lg font-medium text-teal-500">Register</Link>
//               <Link to="/login" className="text-lg font-medium text-teal-500">Login</Link>
//             </>
//           )}
//         </div>
//       </div>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/heating" element={<HeatingWalkthrough />} />
//         <Route path="/ventilation" element={<VentilationWalkthrough />} />
//         <Route path="/air-conditioning" element={<AirConditioningWalkthrough />} />
//         <Route 
//           path="/connect-technician" 
//           element={isAuthenticated ? <ConnectTechnician /> : <Navigate to="/login" />} 
//         />
//         <Route path="/register" element={<Register />} /> 
//         <Route 
//           path="/login" 
//           element={
//             <Login setIsAuthenticated={(value) => {
//               setIsAuthenticated(value);
//               if (value) {
//                 return <Navigate to="/connect-technician" />;
//               }
//             }} 
//           />} 
//         />
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
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setLoading(false); // Set loading to false once authentication state is determined
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <Router>
      <div className="flex justify-between p-4 bg-gray-100">
        <div className="flex space-x-4">
          <Link to="/" className="text-lg font-medium text-teal-500">Home</Link>
        </div>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="text-lg font-medium text-teal-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="text-lg font-medium text-teal-500">Register</Link>
              <Link to="/login" className="text-lg font-medium text-teal-500">Login</Link>
            </>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/heating" element={<Navigate to="/connect-technician" />} />
        <Route path="/ventilation" element={<Navigate to="/connect-technician" />} />
        <Route path="/air-conditioning" element={<Navigate to="/connect-technician" />} />
        <Route 
          path="/connect-technician" 
          element={isAuthenticated ? <ConnectTechnician isAuthenticated={isAuthenticated} /> : <Navigate to="/login" />} 
        />
        <Route path="/register" element={<Register />} /> 
        <Route 
          path="/login" 
          element={
            <Login setIsAuthenticated={(value) => {
              setIsAuthenticated(value);
              if (value) {
                return <Navigate to="/connect-technician" />;
              }
            }} 
          />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
