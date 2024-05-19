import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if login identifier is empty
    if (!loginIdentifier) {
      setErrorMessage('Please enter your email or mobile number');
      return;
    }
    // Check if the entered value is an email or a mobile number
    if (isEmail(loginIdentifier)) {
      console.log('User entered an email:', loginIdentifier);
      // Add your logic for email login
    } else if (loginIdentifier.length !== 10 || !/^\d+$/.test(loginIdentifier)) {
      setErrorMessage('Please enter a valid input.');
      return;
    } else {
      console.log('User entered a mobile number:', loginIdentifier);
      // Add your logic for mobile number login
    }
    // Clear error message
    setErrorMessage('');
    // You can continue with the rest of your form submission logic here
    console.log('Password:', password);
  };

  const handleLoginIdentifierChange = (e) => {
    const inputValue = e.target.value;
    setLoginIdentifier(inputValue);
  };

  const isEmail = (input) => {
    // Regular expression to check if the input is an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  return (
    <div className=" min-h-screen flex items-center bg-white justify-center py-12 px-4 sm:px-6 lg:px-8 " >
      <div className="max-w-md w-full  border-1 bg-[#F8F7F2]  border-gray-500 rounded-3xl p-4 pb-12 shadow-2xl">
        <div className="flex items-center justify-center">
          <img src='/media/logo.png' alt='Logo' className='max-w-32 h-auto' />
        </div>
        <div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-[#0F2A67]">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="loginIdentifier" className="sr-only">Email or Mobile</label>
              <input
                name="loginIdentifier"
                type="text"
                autoComplete="login"
                required
                className="bg-transparent mb-6 rounded-lg relative block w-full px-3 py-2 border border-gray-500 placeholder-[#0F2A67]  focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] focus:z-10 sm:text-sm"
                placeholder="Email or Mobile"
                value={loginIdentifier}
                onChange={handleLoginIdentifierChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="bg-transparent mb-6 rounded-lg relative block w-full px-3 py-2 border border-gray-500 placeholder-[#0F2A67]  focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center justify-center px-3 py-2 z-10"
                onClick={handleTogglePassword}
              >
                {showPassword ? <span className="text-gray-800">&#x1f441;</span> : <span className="text-gray-800">&#x1f576;</span>}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2  px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF5722] hover:bg-orange-500 focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] focus:z-10"
            >
              Sign in
            </button>
            <solid className="text-[#0F2A67] flex align-center justify-center m-2 font-semibold "> Don't have account? Register.</solid>


          </div>

        </form>
        <Link to="/register">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2  px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF5722] hover:bg-orange-500 focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] focus:z-10"
          >
            Register
          </button>
        </Link>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="#" className="text-[#0F2A67] font-amita font-semibold underline">Sign in with Google</Link>
          <Link to="#" className="text-red-800 font-semibold underline font-amita">Forgot Password</Link>
        </div>
        {errorMessage && (
          <p className="text-[#FF5722] text-sm mt-2">{errorMessage}</p>
        )}

      </div>
    </div>
  );
};

export default Login;
