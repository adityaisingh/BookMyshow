// Footer.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      {/* Upper Section with Icons and CTA */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pb-8 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center text-center md:text-left">
          <Link
            to="/list-your-show"
            className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2">
            <span className="text-white font-bold">List your Show</span>
            <p className="text-sm">
              Got a show, event, or activity? Get listed on BookMyShow.
            </p>
          </Link>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Contact Today
        </button>
      </div>

      {/* Lower Section with Links */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
          {/* Movies Showing Section */}
          <div>
            <h3 className="font-bold text-gray-400">MOVIES SHOWING IN</h3>
            <ul className="mt-4 space-y-1">
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Kolkata</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          {/* Upcoming Movies Section */}
          <div>
            <h3 className="font-bold text-gray-400">UPCOMING MOVIES</h3>
            <ul className="mt-4 space-y-1">
              <li>Jawan</li>
              <li>Salaar</li>
              <li>Animal</li>
              <li>Dunki</li>
            </ul>
          </div>

          {/* Other sections */}
          <div>
            <h3 className="font-bold text-gray-400">EVENTS IN CITIES</h3>
            <ul className="mt-4 space-y-1">
              <li>Comedy Shows</li>
              <li>Live Events</li>
              <li>Theatre</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-400">COUNTRIES</h3>
            <ul className="mt-4 space-y-1">
              <li>India</li>
              <li>UAE</li>
              <li>Singapore</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-400">HELP</h3>
            <ul className="mt-4 space-y-1">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Social Media Icons */}
      <div className="container mx-auto pt-8 border-t border-gray-700 mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-gray-400">© 2024 BookMyShow</p>
          <div className="flex space-x-4 justify-center">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
