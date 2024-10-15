import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SignUpPage from "./Page/SignUpPage";
import LoginPage from "./Page/loginPage";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import DetailsPage from "./Page/DetailsPage";
import AllMoviesPage from "./Page/AllMoviePage";
import Sitelayout from "./Page/buytickets/Sitelayout";
import MovieShowTimingPage from "./Page/buytickets/MovieShowTimingPage";
import ProfilePage from "./Page/ProfilePage";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/all-movie" element={<AllMoviesPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/Profile-Page" element={<ProfilePage />} />

        <Route path="/movietiming-page/:id" element={<MovieShowTimingPage />} />
        <Route path="/Site-Selection/:id" element={<Sitelayout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
