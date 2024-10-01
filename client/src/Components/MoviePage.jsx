import React, { useState, useEffect } from "react";
import MovieCard from "../Page/MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 shadow-md hover:bg-red-600 transition duration-200">
      <span className="text-2xl">&lt;</span>
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 shadow-md hover:bg-red-600 transition duration-200">
      <span className="text-2xl">&gt;</span>
    </button>
  );
};

const MoviePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Use custom previous arrow
    nextArrow: <NextArrow />, // Use custom next arrow
  };

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
    <div>
      <div className=" w-full flex flex-col justify-center  bg-gray-200 relative ">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold px-9">Recommended Movies</h2>
          <Link to="/all-movie" className=" hover:underline px-20 text-red-500">
            See All {">"}
          </Link>
        </div>

        <div className="py-2 px-10 relative">
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
