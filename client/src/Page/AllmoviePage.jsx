import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/movie")
      .then((response) => {
        setMovies(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMoviesPage;
