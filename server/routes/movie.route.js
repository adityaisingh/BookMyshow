import express from "express";
import { finddata, finddatabyid } from "../controllers/movie.controllers.js";
import { savedata } from "../controllers/movie.controllers.js";

const router = express.Router();

router.get("/movie", finddata);
router.get("/movie/:id", finddatabyid);
router.post("/save", savedata);

export default router;
