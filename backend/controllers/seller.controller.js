import product from "../models/product.model.js";
import Seller from "../models/seller.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const listitems = async (req, res) => {
    try {
        const {name,price,quantity,producturl,description} = req.body
        const sellerid = req.userId

        if(!name || !price || !quantity || !producturl || !description || !sellerid){
            throw new Error("All fields are required");
        }
        const seller = await Seller.findById(sellerid)
        if(!seller){
            throw new Error("Seller not found")
        }
        const product = new product({
            name,
            price,
            quantity,
            producturl,
            description,
            sellerid
        })
        await product.save()


        res.status(201).json({message:"Product added successfully"})

    } catch (error) {
        
    }
}