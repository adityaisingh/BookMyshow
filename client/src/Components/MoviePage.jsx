import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Page/MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/movie")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Slider {...settings}>
      <div className="bg-gray-100 min-h-screen py-2 flex flex-col w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold px-10">Recommended Movies</h2>
          <Link to="/all-movie" className="text-blue-500 hover:underline px-20">
            See All {">"}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center mb-2 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </Slider>
  );
};

export default MoviePage;
