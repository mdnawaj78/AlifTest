import React from "react";
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100  flex flex-col justify-center items-center">
                    {/* flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 */}
      {/* Signup form */}
      <form className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-h2">Sign Up</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your phone number"
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
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-buttonText bg-buttonBackground hover:bg-buttonBackgroundHover hover:text-buttonTextHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Have an account? 
        <Link to="/signin" className="text-text-500 ml-1 font-semibold hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
