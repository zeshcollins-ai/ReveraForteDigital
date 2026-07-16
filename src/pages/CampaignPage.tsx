import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CampaignPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://localhost:5173/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',  // Include cookies with the request
      });

      const result = await response.json();

      if (response.ok) {
        // Store email and password in sessionStorage
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        // Directly redirect to CampaignLaunchpad without showing alert
        navigate('/campaign-launchpad'); // Adjust the path as per your routing setup
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError('Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white text-center">Campaign Login</h1>
        <p className="text-sm text-gray-400 text-center mb-6">
          Enter your credentials to access the campaign tool.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 sm:text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-400 hover:text-gray-200"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {error && (
            <div className="text-sm text-red-400 bg-red-800 bg-opacity-50 p-2 rounded-md">
              {error}
            </div>
          )}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg shadow-sm font-medium ${
              loading
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
