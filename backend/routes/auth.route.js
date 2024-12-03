import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import {
  validateLogin,
  validateProduct,
  validateSignUp,
} from "../Zod-Validation/zod_wrapper.js";
import { listitems } from "../controllers/seller.controller.js";

const router = express.Router();

router.post("/signup", validateSignUp, signup);
router.get("/signup", (req, res) => res.send("get some sleep"));

router.post("/logout", logout);

router.post("/login", validateLogin, login);
router.get("/login", (req, res) => res.send("i am awake"));



 //need authenticaltion

export default router;
