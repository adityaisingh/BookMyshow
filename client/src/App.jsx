import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SignUpPage from "./Page/SignUpPage";
import LoginPage from "./Page/loginPage";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import DetailsPage from "./Page/detailsPage";

import AllMoviesPage from "./Page/AllMoviePage";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
