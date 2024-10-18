import Movie from "../models/movie.model.js";
import Seat from "../models/seat.model.js";

export const finddata = async (req, res) => {
  try {
    const data = await Movie.find().populate("castCrewId").exec();
    return res.status(200).json({
      success: true,
      message: "data fetches successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const finddatabyid = async (req, res) => {
  try {
    const data = await Movie.findById(req.params.id)
      .populate("castCrewId")
      .exec();
    return res.status(200).json({
      success: true,
      message: "data fetches successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const savedata = async (req, res) => {
  try {
    const data = await Movie.create(req.body);

    return res.status(201).json({
      success: true,
      message: "data saved successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  const { langauge: val, castCrewId } = req.body;
  try {
    const data = await Movie.findByIdAndUpdate(
      req.params.id,
      { castCrewId },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "update data successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err,
    });
  }
};

// export const SearchMovie = async (req, res) => {

//   const { query } = req.query;
//   // console.log(query);
//   try {
//     const movie = await Movie.find({
//       $or: [{ _id: query }, { title: { $regex: query, $options: "i" } }],
//     });

//     if (!movie || movie.length === 0) {
//       return res.status(400).json({ message: "Movie not found" });
//     }

//     return res.json(movie);
//   } catch (error) {
//     return res.status(500).json({ message: "Server Error" });
//   }
// };

//Delete a movie(admin only)
export const deleteMovie = async (req, res) => {
  try {
    const data = await Movie.findByIdAndDelete(req.params.id);

    if (!data) {
      return res
        .status(404)
        .json({ sucess: false, message: "Movie not Found" });
    }

    return res.status(200).json({
      sucess: true,
      message: "Movie deleted Sucessfully",
    });
  } catch (error) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

