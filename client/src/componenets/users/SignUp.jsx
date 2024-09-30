import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/features/authslice";
import "../../styles/components.css"; // Import reusable styles
import "../../styles/global.css"; // Import global styles (if needed)
import "../../styles/variables.css"; // Import variables (if needed)

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // State for general error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, loading, error } = useSelector((state) => state.auth); // Track success, loading, and error states

  // UseEffect to handle navigation on successful signup
  useEffect(() => {
    if (success) {
      navigate("/signin");
    }
  }, [success, navigate]);

  // UseEffect to set error message from the Redux state
  useEffect(() => {
    if (error) {
      // Check if the error is an object with a message property
      if (error.message) {
        setErrorMessage(error.message); // Extract message from error object
      } else {
        setErrorMessage("Something went wrong!"); // Fallback error message
      }
    }
  }, [error]);

  const validateForm = () => {
    let validationErrors = {};

    // Username validation
    if (!formData.username) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must be at least 8 characters long, with at least one uppercase letter, one number, and one special character";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrorMessage(""); // Clear previous error messages
      dispatch(signUpUser(formData));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Sign Up</h1>

        {/* Username Input */}
        <div className="input-group">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            placeholder="Enter your username"
            required
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Phone Input */}
        <div className="input-group">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            placeholder="Enter your password"
            required
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Display error message at the bottom of the form */}
        {errorMessage && <p className="error-text mt-4">{errorMessage}</p>}
      </form>
      <p className="mt-4 text-center">
        Have an account?
        <Link
          to="/signin"
          className="text-text-500 ml-1 font-semibold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
