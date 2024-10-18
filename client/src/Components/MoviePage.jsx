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
      className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-2 shadow-md hover:bg-red-700 transition duration-200 hidden md:block">
      <span className="text-2xl">&lt;</span>
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-2 shadow-md hover:bg-red-700 transition duration-200 hidden md:block">
      <span className="text-2xl">&gt;</span>
    </button>
  );
};

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/movie");
        if (response.data && response.data.data) {
          setMovies(response.data.data);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center m-2 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col justify-center bg-white relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
            Recommended Movies
          </h2>
          <Link to="/all-movie" className="hover:underline text-red-500">
            See All {">"}
          </Link>
        </div>

        <div className="py-1 relative">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="px-2">
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
