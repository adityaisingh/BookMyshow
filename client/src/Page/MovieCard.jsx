import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-4 bg-white">
      <img
        className="w-full h-65 object-cover"
        src={movie.image}
        alt={movie.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
0;
