import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="flex justify-between items-center p-3 px-[150px] bg-gray-100 border-t-2 shadow-lg">
      <div class="flex space-x-6 font-bold">
        <Link to="/all-movie" className="text-gray-700">
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

      <div class="flex space-x-6 font-bold">
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
