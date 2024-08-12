import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setMessage('Login successful');
      setIsAuthenticated(true);  // Set authentication status
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect to home page after 2 seconds
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h1 className="text-4xl font-bold">Login</h1>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="block mb-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="block mb-2" />
      <button type="submit" className="block w-full mt-4 bg-teal-500 text-white py-2 rounded">Login</button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
      <div className="mt-4">
        <p>Don't have an account? <Link to="/register" className="text-teal-500">Register here</Link></p>
      </div>
    </form>
  );
};

export default Login;
