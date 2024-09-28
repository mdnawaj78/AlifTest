import User from "../models/user.model.js"; // Correct the import path if needed
import bcryptjs from "bcryptjs"; // Ensure bcryptjs is imported
import { errorHandler } from "../utils/error.js"; // Custom error handler
import jwt from "jsonwebtoken"; // Importing JWT for token generation

// signup controller


export const signup = async (req, res, next) => {
  const {
    username, 
    email,
    password, 
    phone, 
  } = req.body;

  // Validate confirm password
  // if (password !== confirmPassword) {
  //   return res.status(400).json({ message: "Passwords do not match" });
  // }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({ 
      username,
      email,
      password: hashedPassword, // Store the hashed password
      phone, 
    });

    // Save the new user
    await newUser.save();

    // Success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error); // Passes the error to the next middleware (error handler)
  }
};


// signin controller
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    // Compare passwords (await the result of bcryptjs.compare)
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send cookie with token and user response
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        message: "Logged in successfully",
        user: {
          id: validUser._id,
          email: validUser.email, 
          phone: validUser.phone, 
        },
      });
  } catch (error) {
    next(error);
  }
};



// Google authentication
export const google = async (req, res, next) => {
  try {
    const { email, name, photo } = req.body;

    // Ensure email, name, and photo are provided
    if (!email || !name || !photo) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    let user = await User.findOne({ email });

    // Function to generate token and set cookie
    const setTokenAndRespond = (user, res) => {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour

      const { password, ...rest } = user._doc;

      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
          secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
          sameSite: 'strict',
        })
        .status(200)
        .json(rest);
    };

    // If user exists, generate token and return user data
    if (user) {
      setTokenAndRespond(user, res);
    } else {
      // Split full name into first and last name
      // const [firstName, lastName] = name.split(" ");

      // Generate a random password for OAuth users
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);

      // Create a new user with required fields for OAuth
      user = new User({
        username: name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8),
        email,
        password: hashedPassword, // Stored but not used for OAuth signin
        profilePicture: photo,
        oauthProvider: 'google',
      });

      // Save the new user to the database
      await user.save();

      setTokenAndRespond(user, res);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie('access_token')
    .status(200)
    .json({ message: 'Signout success!' });
};

// Test route
export const test = (req, res) => {
  res.send("Test function");
};