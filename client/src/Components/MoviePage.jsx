import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Page/MovieCard";
import axios from "axios";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Using Axios to fetch data from backend
    axios
      .get("http://localhost:5000/api/v1/movie")
      .then((response) => {
        setMovies(response.data); // Set movies data to state
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any error that occurs
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-2 flex flex-col justify-start items-center">
      <h1 className="text-3xl font-bold mb-6 ">Recommended Movies</h1>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
