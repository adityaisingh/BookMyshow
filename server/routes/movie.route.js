import express from "express";
import getMovie from "../controllers/movie.controllers.js";

const router = express.Router();

router.get("/movie", getMovie);

export default router;
