import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
  language: {
    type: [String],
  },
  genre: {
    type: [String],
  },
  castCrewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cast",
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
