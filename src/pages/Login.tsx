import React, { useState } from "react";
import LoginImg from "../assets/images/login_img.jpg";
import GoogleLogo from "../assets/images/google.png";
import FacebookLogo from "../assets/images/fecebook.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted:", { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-400 to-gray-200">
      <div>
        <h2 className="text-6xl font-bold text-gray-800 text-center mb-4 capitalize">
          Welcome
        </h2>
      </div>
      <div className="w-11/12 max-w-4xl bg-white shadow-2xl rounded-3xl flex overflow-hidden border">
        {/* Left Section: Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            LOGIN
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className=" bg-blue-800 text-white py-2 px-6 rounded-2xl hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
          {/* Divider */}
          <div className="my-6 flex items-center justify-center">
            <span className="h-px w-full bg-gray-300"></span>
            <span className="px-3 text-sm text-gray-500">Or</span>
            <span className="h-px w-full bg-gray-300"></span>
          </div>
          {/* Social Login Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-sm hover:bg-gray-100 transition duration-300">
              <img
                src={GoogleLogo}
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Login with Google
            </button>
            <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-sm hover:bg-gray-100 transition duration-300">
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="w-10 h-5"
              />
              Login with Facebook
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 relative flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-20"></div>
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="rounded-lg z-10 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
