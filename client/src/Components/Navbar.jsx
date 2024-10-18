import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown } from "flowbite-react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar fluid className="bg-gray-100 shadow-lg border-t-2">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Navbar.Toggle onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse className="w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-bold">
            <li>
              <Link
                to="/all-movie"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-500 md:p-0">
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/stream"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-500 md:p-0">
                Stream
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-500 md:p-0">
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/plays"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-500 md:p-0">
                Plays
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>

        <div className="hidden md:flex space-x-6 font-bold">
          <Link
            to="/list-your-show"
            className="text-gray-700 hover:text-red-500">
            List Your Show
          </Link>
          <Link to="/corporates" className="text-gray-700 hover:text-red-500">
            Corporates
          </Link>
          <Link to="/offers" className="text-gray-700 hover:text-red-500">
            Offers
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavComponent;
