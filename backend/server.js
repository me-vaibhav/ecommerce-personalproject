import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv"; 
import { signUpSchemaZod } from "./Zod-Validation/zod.validate.js";
import { validateLogin } from "./Zod-Validation/zod_wrapper.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.use("/api/v1/auth",authRouter);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
