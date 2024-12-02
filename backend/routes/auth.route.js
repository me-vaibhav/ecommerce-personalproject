import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { validateLogin, validateSignUp } from "../Zod-Validation/zod_wrapper.js";

const router = express.Router()

router.post("/signup",validateSignUp,signup)
router.get("/signup",
    (req,res) => res.send("get some sleep")
)

export default router

