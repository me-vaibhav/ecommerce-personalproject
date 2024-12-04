import { promise } from "zod";
import Product from "../models/product.model.js";
import Seller from "../models/seller.model.js";
import ProductBucket from "../models/productBucket.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const listitems = async (req, res) => {
    try {
        const {name,price,quantity,producturl,description} = req.body
        const sellerid = req.userId

        if(!name || !price || !quantity || !producturl || !description || !sellerid){
            throw new Error("All fields are required  1111111");
        }
        const seller = await Seller.findById(sellerid)
        if(!seller){
            throw new Error("Seller not found")
        }
        const product = await Product.create({
            name,
            price,
            quantity,
            producturl,
            description,
            sellerid
        })

        let productBucket = await ProductBucket.findById(seller.productbucket)

        if(!productBucket){
            productBucket= await ProductBucket.create({
                sellerid,
            })
        }
       
       await productBucket.productslist.push(product._id)

        await Promise.all([
            productBucket.save()])


        res.status(201).json({message:"Product added successfully"})

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}

export const showproductlist=async(req,res)=>{
    const sellerid=req.userId
    const seller=await Seller.findById(sellerid)
    if(!seller){
        throw new Error("Seller not found")
    }
    let productbucket = await ProductBucket.findById(seller.productbucket)

    if(!productbucket){
        throw new Error("Product bucket not found")
    }

    let list = await productbucket.populate("productslist") 

    res.status(201).json({message:"Product listing",list})

}

