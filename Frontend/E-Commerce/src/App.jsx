import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import your pages
import Login from './Pages/home/Login';
import SignUp from './Pages/home/Signup'; 
import Home from './Pages/home/home'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* The Home page is now your main landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Your Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback: If a user types a random URL, send them back to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;