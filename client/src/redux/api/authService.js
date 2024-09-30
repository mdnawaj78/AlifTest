// src/api/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3003/server/auth'; // Base API URL

// Function to handle signup
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Function to handle login
export const signin = async (userData) => {
  const response = await axios.post(`${API_URL}/signin`, userData);
  return response.data;
};

