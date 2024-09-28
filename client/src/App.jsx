import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from "./componenets/users/SignUp";
import SignIn from "./componenets/users/SignIn";
import Profile from "./componenets/users/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
};

export default App;
