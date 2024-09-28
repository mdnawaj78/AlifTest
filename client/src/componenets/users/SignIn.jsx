import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Signing in with:", { emailOrUsername, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg space-y-6 flex flex-col w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center">Sign In</h2> {/* Changed to Sign In */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email or Username {/* Updated label for clarity */}
          </label>
          <input
            type="text"
            id="email" // Added id for label association
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password" // Added id for label association
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-buttonText bg-buttonBackground hover:bg-buttonBackgroundHover hover:text-buttonTextHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? 
        <Link to="/signup" className="text-text-500 ml-1 font-semibold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
