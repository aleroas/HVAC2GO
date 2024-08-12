import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.post('/api/register', formData);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect to login page after 2 seconds
    } catch (error) {
      console.error('Registration error:', error.response);
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h1 className="text-4xl font-bold">Register</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="block mb-2" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="block mb-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="block mb-2" />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required className="block mb-2" />
      <button type="submit">Register</button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </form>
  );
};

export default Register;
