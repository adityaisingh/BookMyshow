import Booking from "../models/booking.model.js";
import Seat from "../models/seat.model.js";

import mongoose from "mongoose";

export const findSeatData = async (req, res) => {
  try {
    const { movieId, movieDate, movieTimeSlot } = req.body;

    // Check if all required data is provided
    if (!movieId || !movieDate || !movieTimeSlot) {
      return res.status(500).json({ success: false, message: "Invalid data" });
    }

    // Convert movieId string to ObjectId
    const objectId = new mongoose.Types.ObjectId(movieId);


    const data = await Seat.findOne({
      movieId: objectId,
      movieDate,
      movieTimeSlot,
    })
      .select("-_id")
      .exec();

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "No seat data found" });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const findBookingDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookingDetails = await Booking.find({ userId })
      .populate("movieId")
      .populate("userId");
    // console.log(bookingDetails);
    return res.json({ bookingDetails });

    if (!bookingDetails) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json(bookingDetails);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching booking details" });
  }
};

export const bookSeat = async (req, res) => {
  try {
    const { movieId, movieDate, movieTimeSlot, seats, userId } = req.body;

    if (!movieId || !movieDate || !movieTimeSlot || !seats) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid data provided" });
    }

    const objectId = new mongoose.Types.ObjectId(movieId);

    const seatData = await Seat.findOne({
      movieId: objectId,
      movieDate,
      movieTimeSlot,
    }).exec();

    if (!seatData) {
      return res.status(404).json({
        success: false,
        message:
          "No seat data found for the specified movie, date, and time slot",
      });
    }

    
    const unavailableSeats = seats.filter((seat) => {
      const bookedSeat = seatData.bookingStatus.find(
        (status) => status.seatNumber === seat && status.status === "booked"
      );
      return bookedSeat !== undefined; 
    });

    if (unavailableSeats.length > 0) {
      return res.status(400).json({
        success: false,
        message: `The following seats are already booked: ${unavailableSeats.join(
          ", "
        )}`,
      });
    }

    seats.forEach((seat) => {
      seatData.bookingStatus[seat - 1].status = "booked";
    });

    await seatData.save(); // Save the updated seat data

 
    const booking = new Booking({
      movieId,
      showdata: movieDate,
      userId: new mongoose.Types.ObjectId(userId),
      seatNumbers: seats,
      bookingStatus: "confirmed",
    
    });

    await booking.save(); 

 
    return res.status(201).json({
      success: true,
      message: "Booking confirmed",
      booking,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const AddSeats = async (req, res) => {
  try {
    const { movieId, movieDate, movieTimeSlot } = req.body;

    const seats = [];
    for (let i = 0; i <= 100; i++) {
      seats.push({
        seatNumber: `${i}`,
        status: "available",
      });
    }

    const newSeatDocument = new Seat({
      movieId,
      movieDate,
      movieTimeSlot,
      bookingStatus: seats,
    });

    await newSeatDocument.save();

    res
      .status(201)
      .json({ message: "100 seats have been successfully added!" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Failed to seats", error });
  }
};
