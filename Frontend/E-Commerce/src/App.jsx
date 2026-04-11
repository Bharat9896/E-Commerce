<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import your pages (Make sure these paths match where you saved them!)
import Login from './Page/login/Login';
import SignUp from './Page/login/SignUp'; 
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/home/home'   // ✅ correct import
>>>>>>> 57ff1e6288026cd9f9040b28191ad69e98b8e8a1

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      {/* The Routes component is the traffic controller. 
        It looks at the URL and renders only the matching Route.
      */}
      <Routes>
        
        {/* If the user goes to /login, show the Login page */}
        <Route path="/login" element={<Login />} />
        
        {/* If the user goes to /signup, show the SignUp page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Optional: A default route. 
          If they just go to "localhost:5173/", immediately redirect them to login 
          (until you build your actual Home page)
        */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
    <>
      <Home />   {/* ✅ yaha use kiya */}

    </>
  )
}

export default App
>>>>>>> 57ff1e6288026cd9f9040b28191ad69e98b8e8a1
