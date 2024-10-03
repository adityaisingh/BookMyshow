import express from "express";
import  getallevents  from "../controllers/events.controller.js";

const router = express.Router();

router.get("/events", getallevents);

export default router;
