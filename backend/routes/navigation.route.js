import express from "express";
import { validateProduct } from "../Zod-Validation/zod_wrapper.js";
import { listitems, showproductlist } from "../controllers/seller.controller.js";
import { validateCookie } from "../middlewares/validatecookie.js";
const app = express();
const router = express.Router();

router.post("/seller/listitems",validateProduct,validateCookie,listitems)
router.get("/seller/listitems",(req,res)=>{
    res.status(201).json({success:true,message:"seller product listings"})
})

router.get("/seller/showproductlist",validateCookie,showproductlist)

export default router