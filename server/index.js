import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", movieRoutes);

connectDB();
app.listen(5000, () => {
  console.log("server started at localhost 5000");
});
