import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNumber: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error.response);
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1 className="auth-title">Register</h1>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="auth-input" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="auth-input" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="auth-input" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required className="auth-input" />
        <button type="submit" className="auth-button">Register</button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
