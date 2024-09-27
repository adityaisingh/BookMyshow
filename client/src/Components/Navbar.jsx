import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="flex justify-between items-center p-4 bg-gray-300 border-b-2">
      <div class="flex space-x-4">
        <Link to="/MoviePage" className="text-gray-700">
          Movies
        </Link>
        <Link to="/stream" className="text-gray-700">
          Stream
        </Link>
        <Link to="/events" className="text-gray-700">
          Events
        </Link>
        <Link to="/plays" className="text-gray-700">
          Plays
        </Link>
      </div>

      <div class="flex space-x-4">
        <Link to="/list-your-show" className="text-gray-700">
          List Your Show
        </Link>
        <Link to="/corporates" className="text-gray-700">
          Corporates
        </Link>
        <Link to="/offers" className="text-gray-700">
          Offers
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
