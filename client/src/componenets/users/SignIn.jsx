import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components.css'; // Import reusable styles
import '../../styles/global.css'; // Import global styles (if needed)
import '../../styles/variables.css'; // Import variables (if needed)

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { emailOrUsername, password });
    // Add sign-in logic here
  };

  return (
    <div className="container"> {/* Main container for centering */}
      <form onSubmit={handleSubmit} className="form"> {/* Form styling */}
        <h1 className="title">Sign In</h1> {/* Title */}
        
        {/* Group for Email or Username */}
        <div className="input-group">
          <label className="label" htmlFor="emailOrUsername">Email or Username</label>
          <input 
            type="text" 
            id="emailOrUsername" 
            value={emailOrUsername} 
            onChange={(e) => setEmailOrUsername(e.target.value)} 
            className="input" // Reusable input styling
            placeholder="Enter your email or username" 
          />
        </div>

        {/* Group for Password */}
        <div className="input-group">
          <label className="label" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input" // Reusable input styling
            placeholder="Enter your password" 
          />
        </div>

        <button type="submit" className="button"> {/* Reusable button styling */}
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Have an account? 
        <Link to="/signup" className="text-text-500 ml-1 font-semibold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
