import express from "express";
import { validateProduct } from "../Zod-Validation/zod_wrapper";
import { listitems } from "../controllers/seller.controller";
import { validateCookie } from "../middlewares/validatecookie";

const router = express.Router();
application.use(validateCookie())
router.post("/seller/listitems",validateProduct,listitems)
router.get("/seller/listitems",(req,res)=>{
    res.status(201).json({success:true,message:"seller product listings"})
})

export default router