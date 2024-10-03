import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  votes: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isPromoted: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: String, 
    default: null, 
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
