import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //allows us to create our SPA  with multiple views and enables navigation between these views without refreshing the entire page.
import LandingPage from './components/LandingPage';
import HeatingWalkthrough from './components/HeatingWalkthrough';
import VentilationWalkthrough from './components/VentilationWalkthrough';
import AirConditioningWalkthrough from './components/AirConditioningWalkthrough';
import Diagnostic from './components/Diagnostic';
import NotRunning from './components/NotRunning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/heating" element={<HeatingWalkthrough />} />
        <Route path="/ventilation" element={<VentilationWalkthrough />} />
        <Route path="/air-conditioning" element={<AirConditioningWalkthrough />} />
        <Route path="/air-conditioning/diag" element={<Diagnostic />}/> 
        <Route path="/air-conditioning/diag2" element={<NotRunning />}/>
      </Routes>
    </Router>
  );
}

export default App;
