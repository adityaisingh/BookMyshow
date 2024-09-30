import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  votes: {
    type: String, // Could also be a Number, depending on how you store it
    required: true,
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
    type: String, // Or Number, based on your data structure
    default: null, // Optional for movies that don't use likes
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
