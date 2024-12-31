import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/images/login_img.jpg";
import GoogleLogo from "../assets/images/google.png";
import FacebookLogo from "../assets/images/facebook.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      console.log("Login Submitted:", { email, password });
      navigate("/home"); // Navigate to the home page
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="flex lg:h-screen bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left Side */}
      <div className="hidden md:block w-1/2 bg-gray-500">
        <div className="flex items-center justify-center h-full">
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="h-full w-full opacity-30"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 py-8 px-8 sm:px-16">
        <div className="text-right mb-4">
          <a href="/register" className="text-sm text-gray-500">
            Already have an account?{" "}
            <span className="text-red-500 hover:text-gray-500 hover:underline">
              Sign In
            </span>
          </a>
        </div>
       <div className="flex flex-col gap-8 h-full">
       <h2 className="text-4xl sm:text-5xl font-inter font-semibold text-gray-800 text-center my-6">
          Welcome!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-6 bg-blue-700 text-white rounded-2xl hover:bg-blue-500 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-6">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <p className="text-sm text-gray-500 text-center">Or login with</p>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex items-center justify-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow hover:shadow-xl transition">
            <img
              src={GoogleLogo}
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button className="flex items-center justify-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow hover:shadow-xl transition">
            <img
              src={FacebookLogo}
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Login;
