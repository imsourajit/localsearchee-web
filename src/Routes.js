import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import PhoneVerification from "./Pages/PhoneVerification";
import EmailVerification from "./Pages/EmailVerification";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/phoneverification/:phoneNumber" element={<PhoneVerification />} />
        <Route path="/emailverification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
}


export default CustomRoutes
