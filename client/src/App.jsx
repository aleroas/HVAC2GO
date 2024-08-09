import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HeatingWalkthrough from './components/HeatingWalkthrough';
import VentilationWalkthrough from './components/VentilationWalkthrough';
import AirConditioningWalkthrough from './components/AirConditioningWalkthrough';
import ConnectTechnician from './components/ConnectTechnician';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/heating" element={<HeatingWalkthrough />} />
        <Route path="/ventilation" element={<VentilationWalkthrough />} />
        <Route path="/air-conditioning" element={<AirConditioningWalkthrough />} />
        <Route path="/connect-technician" element={<ConnectTechnician />} />
      </Routes>
    </Router>
  );
}

export default App;
