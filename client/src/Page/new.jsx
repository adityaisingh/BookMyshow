import React from "react";
import { FaStar, FaShareAlt } from "react-icons/fa";

const MoviePage = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16 text-white bg-sky-800">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Movie Poster */}
        <div className="flex-none">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDUuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg"
            alt="Devara Poster"
            className="w-full lg:w-80 rounded-lg shadow-lg h-[50vh]"
          />
        </div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.description}</p>

        {/* Right Section: Movie Details */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Devara - Part 1</h1>
            <FaShareAlt className="text-2xl cursor-pointer" />
          </div>

          {/* Rating and Details */}
          <div className="flex items-center space-x-2">
            <FaStar className="text-red-500" />
            <p className="text-lg font-semibold">8.2/10 (196.4K Votes)</p>
          </div>

          <div className="space-y-1">
            <div className="flex space-x-4 text-sm">
              <span>2D, 4DX, ICE, IMAX 2D</span>
              <span>|</span>
              <span>Telugu, Malayalam, Kannada, Hindi, Tamil</span>
            </div>

            <div className="text-sm">
              <span>2h 57m • Action, Drama, Thriller • UA • 27 Sep, 2024</span>
            </div>
          </div>

          {/* About the movie */}
          <div>
            <h2 className="text-2xl font-semibold">About the movie</h2>
            <p className="text-sm mt-2">
              The film's backdrop is centered around the far and forgotten
              coastal lands of India. The people, or rather the villains, in the
              film neither fear death nor god, and there is no sense of humanity
              among them. Devara changes this scenario in his inimitable style.
            </p>
          </div>
          <button className="mt-4 bg-red-600 text-white px-6 py-2 w-full rounded-lg hover:bg-red-700 transition-all">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
