import express from "express";
import {
  deleteMovie,
  finddata,
  finddatabyid,
  resetSeatBooking,
  //   SearchMovie,
} from "../controllers/movie.controllers.js";
import { savedata } from "../controllers/movie.controllers.js";
import { updateMovie } from "../controllers/movie.controllers.js";
import {
  AddSeats,
  bookSeat,
  findBookingDetails,
  findSeatData,
} from "../controllers/seat.controller.js";
import { isAdmin } from "../Middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/movie", finddata); // Everyone can view movies
router.get("/movie/:id", finddatabyid); // Everyone can view a specific movie

// Admin routes
router.post("/save", isAdmin, savedata); // Only admins can add a movie
router.put("/update/:id", isAdmin, updateMovie); // Only admins can update a movie
router.delete("/delete/:id", isAdmin, deleteMovie);// Delete a movie by ID
router.put("/reset-seats", isAdmin, resetSeatBooking);// reset seat bookings for a show

// Booking routes
router.post("/get-booked-seats/:id", findSeatData); // Everyone can check booked seats
router.post("/book-seats/:id", bookSeat);
router.get("/findhistory/:userId", findBookingDetails);
router.post("/Add-seats", AddSeats);

export default router;
