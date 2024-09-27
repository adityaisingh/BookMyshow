import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

connectDB();
app.listen(5000, () => {
  console.log("server started at localhost 5000");
});
