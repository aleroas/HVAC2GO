// src/components/PayPalButton.jsx
import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00', // Replace with your price
            },
          }],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(details => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }}
    />
  );
};

export default PayPalButton;
