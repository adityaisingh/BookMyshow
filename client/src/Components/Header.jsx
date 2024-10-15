import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Dropdown, DropdownItem } from "flowbite-react";
import axios from "axios";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [query, setQuery] = useState("");
  const [moviedata, setMoviedata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:5000/api/v1/movie");
      setMoviedata(response.data.data);
    };
    fetchdata();
  }, []);

  const handleSuggestionClick = (movieId) => {
    setQuery(""); // Clear the input field

    navigate(`/details/${movieId}`);
  };
 
  return (
    <div className="flex justify-center">
      <header className="w-full p-4 bg-gray-100 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <div className="text-red-600 text-3xl font-bold">
                <img
                  src="/bookmyshow.png"
                  alt="Logo"
                  height={"75"}
                  width={"150"}
                  className="bg-black border-0"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 mx-4">
            <form className="relative w-4/6 border-gray-200">
              <input
                type="text"
                value={query}
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:shadow"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-600" />
              </div>

              {query && (
                <div className="absolute bg-white border  rounded-md mt-1 z-10 w-full max-h-60 overflow-y-auto px-10 ">
                  {moviedata.length > 0 &&
                    moviedata
                      .filter((movie) =>
                        movie.title.toLowerCase().includes(query.toLowerCase())
                      )
                      .map((item) => (
                        <div
                          key={item._id}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSuggestionClick(item._id)}>
                          {item.title}
                        </div>
                      ))}
                </div>
              )}
            </form>
          </div>

          <div className="flex items-center space-x-6">
            {/* Location Selector */}
            <div className="hidden md:flex items-center text-gray-600 cursor-pointer">
              <select id="cities" name="cities" className="border-0">
                <option value="Bengaluru">Popular Cities</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            {currentUser ? (
              // <Sidebar aria-label="Sidebar with multi-level dropdown example">
              //   <Sidebar.Items>
              //     <Sidebar.ItemGroup>
              //       <Sidebar.Item href="#" icon={HiChartPie}>
              //         Dashboard
              //       </Sidebar.Item>
              //       <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              //         <Sidebar.Item href="#">Products</Sidebar.Item>
              //         <Sidebar.Item href="#">Sales</Sidebar.Item>
              //         <Sidebar.Item href="#">Refunds</Sidebar.Item>
              //         <Sidebar.Item href="#">Shipping</Sidebar.Item>
              //       </Sidebar.Collapse>
              //       <Sidebar.Item href="#" icon={HiInbox}>
              //         Inbox
              //       </Sidebar.Item>
              //       <Sidebar.Item href="#" icon={HiUser}>
              //         Users
              //       </Sidebar.Item>
              //       <Sidebar.Item href="#" icon={HiShoppingBag}>
              //         Products
              //       </Sidebar.Item>
              //       <Sidebar.Item href="#" icon={HiArrowSmRight}>
              //         Sign In
              //       </Sidebar.Item>
              //       <Sidebar.Item href="#" icon={HiTable}>
              //         Sign Up
              //       </Sidebar.Item>
              //     </Sidebar.ItemGroup>
              //   </Sidebar.Items>
              // </Sidebar>

              <Avatar
                alt="user"
                img={currentUser.profilePicture}
                rounded
                status="online"
                className="w-10 h-15 cursor-pointer"
                onClick={() => navigate("/Profile-Page")}
              />
            ) : (
              <Button
                className="bg-red-500 text-white rounded-full h-115"
                onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            )}

            <div className="md:hidden">
              <FiMenu className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
