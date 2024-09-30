import React from "react";
import Carousel from "../Page/Carousel";
import MoviePage from "./MoviePage";
import Banner from "../Page/Banner";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <MoviePage />
      <Banner />
    </div>
  );
};

export default HomePage;
