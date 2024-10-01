import Movie from "../models/movie.model.js";

export const finddata = async (req, res) => {
  try {
    const data = await Movie.find();
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
    const data = await Movie.findById(req.params.id);
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
