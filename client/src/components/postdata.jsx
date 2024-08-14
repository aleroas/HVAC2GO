import { useState } from "react";
import { useNavigate } from "react-router-dom";

let isCreated = false;

function backToHome() {
  const navigate = useNavigate();
  if (isCreated) {
    navigate('/');
  }
}

async function collectData(user) {
  const userData = {
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber
  };

  try {
    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      isCreated = true;
      backToHome();
      const data = await response.json();
      console.log('Data successfully sent:', data);
    } else {
      console.error('Error sending data:', response.status, await response.text());
    }
  } catch (err) {
    console.error('Error collecting data:', err);
  }
}

export default collectData;
