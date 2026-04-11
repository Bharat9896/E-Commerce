import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing again
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    // SIMULATING A REAL-WORLD API CALL (Takes 1.5 seconds)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Successfully logged in!', formData);
      alert('Login successful! Redirecting to dashboard...');
      // Here you would typically use React Router to navigate:
      // navigate('/dashboard');

    } catch (error) {
      setErrors({ form: 'Invalid credentials. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // SVG Icons for the password toggle
  const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  return (
    <div className="login-container">
      {/* Left Side - Hidden on small screens, shows an elegant image on desktop */}
      <div className="login-image-side">
        <div className="login-image-overlay">
          <h2>Handcrafted Elegance</h2>
          <p>Discover collections curated just for you.</p>
        </div>
      </div>

      {/* Right Side - The actual form */}
      <div className="login-form-side">
        <div className="login-form-wrapper">
          
          <div className="brand-header">
            {/* *** LOGO PLACEHOLDER ADDED HERE *** */}
            <img 
              src="/Logo.png" 
              alt="Roshni Creations Logo" 
              className="brand-logo"
            />
            <h1>Roshni Creations</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>

          {errors.form && <div className="error-text" style={{textAlign: 'center', marginBottom: '15px', padding: '10px', background: '#fdf7f7', borderRadius: '4px'}}>{errors.form}</div>}

          <form onSubmit={handleSubmit} noValidate>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                Remember for 30 days
              </label>
              <a href="/forgot-password" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? <div className="spinner"></div> : "Sign In"}
            </button>

          </form>

          <div className="signup-prompt">
            Don't have an account? <a href="/Signup">Sign up</a>
          </div>

        </div>
      </div>
    </div>
  );
}