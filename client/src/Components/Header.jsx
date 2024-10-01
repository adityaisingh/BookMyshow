import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signup");
  };

  return (
    <header
      className="w-full p-4 bg-gray-100
     shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <div className="text-red-600 text-3xl font-bold">
              book<span className="text-black">my</span>show
            </div>
          </Link>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="hidden md:flex items-center flex-1 mx-4">
          <div className="relative w-4/6 border-gray-200">
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:shadow"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Right Section: Location, Sign In, and Menu */}
        <div className="flex items-center space-x-6">
          {/* Location */}
          <div className="hidden md:flex items-center text-gray-600 cursor-pointer p-1 border-0 rounded-lg">
            <select id="cities" name="cities">
              <option value="Bengaluru">Popular Cities</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi NCR</option>
              <option value="Bengaluru">Hyderabad</option>
              <option value="Mumbai">Chandigarh</option>
              <option value="Delhi">Pune</option>
            </select>
          </div>

          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <FaUser className="text-red-500 text-2xl cursor-pointer" />{" "}
              {/* User Icon */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full"
              onClick={() => navigate("/signup")} // Navigate to Signup
            >
              Sign Up
            </button>
          )}

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <FiMenu className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
