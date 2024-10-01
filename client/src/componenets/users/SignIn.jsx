import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../redux/features/authslice'; // Ensure the path is correct
import '../../styles/components.css'; // Import reusable styles
import '../../styles/global.css'; // Import global styles
import '../../styles/variables.css'; // Import variables if needed

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation
  const dispatch = useDispatch(); // For dispatching actions

  // Access auth state from Redux
  const { user, loading, error } = useSelector((state) => state.auth);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the sign-in action with credentials
    dispatch(signInUser({ email, password }));
  };

  // Navigate to the home page if user is successfully signed in
  useEffect(() => {
    if (user) {
      navigate('/home'); // Redirect to the home page
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Sign In</h1>

        {/* Email or Username input */}
        <div className="input-group">
          <label className="label" htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password input */}
        <div className="input-group">
          <label className="label" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Sign-In button */}
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        {/* Display error if there's any */}
        {error && <p className="error-text">{typeof error === 'string' ? error : 'An error occurred'}</p>}
        
      </form>

      <p className="mt-4 text-center">
        Don't have an account? 
        <Link to="/signup" className="text-text-500 ml-1 font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
