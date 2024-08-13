import { useEffect } from 'react';
import Wave from './Wave'; // Ensure you import the Wave component

const LandingPage = () => {
  useEffect(() => {
    // Any necessary side effects can go here
  }, []);

  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src="/images/hvaclogo2.png" alt="Logo" className="logo" />
      </div>
      <Wave />
    </div>
  );
};

export default LandingPage;
