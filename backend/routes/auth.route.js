import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import {
  validateLogin,
  validateProduct,
  validateSignUp,
} from "../Zod-Validation/zod_wrapper.js";
import { listitems } from "../controllers/seller.controller.js";
import {
  sellerlogin,
  sellerlogout,
  sellerSignup,
} from "../controllers/auth.seller.js";

const router = express.Router();
console.log("auth route")
router.post("/signup", validateSignUp, signup);
router.get("/signup", (req, res) => res.send("get some sleep"));

router.post("/logout", logout);

router.post("/login", validateLogin, login);
router.get("/login", (req, res) => res.send("i am awake"));

router.post("/sellerlogin", sellerlogin);
router.get("/sellerlogin", (req, res) => res.send("i am awake"));

router.post("/sellersignup", sellerSignup);
router.get("/sellersignup", (req, res) => res.send("get some sleep"));

router.post("/sellerlogout", sellerlogout);

//need authenticaltion

export default router;
