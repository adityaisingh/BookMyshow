import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg my-3 mx-3 bg-white rounded-3xl ">
      <img
        className="w-80 h-55 object-cover"
        src={movie.image}
        alt={movie.title}
      />
      <div className="px-3 py-3">
        <div className="font-bold text-l mb-2 ">{movie.title}</div>
        <p className="text-gray-700 text-base">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
