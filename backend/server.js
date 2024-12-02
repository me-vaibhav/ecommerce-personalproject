import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB();
dotenv.config();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
