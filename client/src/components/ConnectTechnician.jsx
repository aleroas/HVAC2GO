import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConnectTechnician = ({ isAuthenticated }) => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [paidFor, setPaidFor] = useState(false);
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

    fetch('/api/paypal-client-id')
      .then(response => response.json())
      .then(data => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${data.clientId}`;
        script.addEventListener('load', () => setPaypalScriptLoaded(true));
        document.body.appendChild(script);
      })
      .catch(error => console.error('Failed to load PayPal client ID', error));
  }, []);

  useEffect(() => {
    if (paypalScriptLoaded) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '49.99' // Adjust the amount as needed
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          console.error(err);
        }
      }).render('#paypal-button-container');
    }
  }, [paypalScriptLoaded]);

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Connect to a technician here!
        </motion.h1>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to continue</h2>
          {/* Render Login or Register here */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Sliding Text */}
      {isTextVisible && (
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Connect to a technician here!
        </motion.h1>
      )}

      {/* Payment and Connect Options */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add your payment details here</h2>
        <div id="paypal-button-container" className="paypal-buttons mt-4"></div>
        
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-800 mb-4">Connect Via...</p>
          <div className="flex justify-center space-x-4">
            <a href="your-zoom-link-here" target="_blank" rel="noopener noreferrer">
              <img src="/images/zoom-icon.png" alt="Zoom" className="w-12 h-12" />
            </a>
            <a href="your-google-meet-link-here" target="_blank" rel="noopener noreferrer">
              <img src="/images/google-meet-icon.png" alt="Google Meet" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectTechnician;
