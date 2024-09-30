import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movie/${id}`
        );
        setMovie(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.description}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

// import React from "react";

// const detailsPage = () => {
//   return <div>detailsPAge</div>;
// };

// export default detailsPage;
