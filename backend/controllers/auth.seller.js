import  User  from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Seller from "../models/seller.model.js";
import ProductBucket from "../models/productBucket.model.js";
import dotenv from "dotenv";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
dotenv.config();

export const sellerSignup = async (req, res) => {
  const { email, password, fullname, phone,confirmPassword } = req.body;
  try {
    if(password !== confirmPassword){
      throw new Error("Passwords do not match")
    }
    if (!email || !password || !fullname || !phone) {
      throw new Error("All fields are required");
    }
    const sellerAlreadyExists = await Seller.findOne({ email });
    if (sellerAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "Seller already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    // const verificationToken = Math.floor(
    //   100000 + Math.random() * 900000
    // ).toString();

    let seller = new Seller({
      email,
      password: hashedPassword,
      fullname,
      phone,
    });

    await seller.save(); 

    let seller1= await Seller.findOne({email})
    console.log("here",seller1)
    const productbucket= await ProductBucket.create({sellerid:seller1._id})
    console.log("here2",seller1)
    seller1.productbucket=productbucket._id
    
    await Promise.all([seller1.save(),productbucket.save()])



    //jwt
    generateTokenAndSetCookie(res, seller1._id);

    //await sendVerificationEmail(user.email,verificationToken)    user.email pr email bhejne k liye premium plan lagega mailtrap ka
    //check kro aws ses ya mailgun ya firebase sab me kuch options honge
   // await sendVerificationEmail(process.env.TEST_MAIL, verificationToken);

    res.status(201).json({
      success: true,
      message: "user created successfully",
      seller: {
        ...seller._doc,
        password: undefined,
        
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const sellerlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    const seller = await Seller.findOne({ email });
    if (!seller) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const checkPassword = await bcryptjs.compare(password,seller.password );

    if (!checkPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, seller._id);

    //await sendVerificationEmail(user.email,verificationToken)    user.email pr email bhejne k liye premium plan lagega mailtrap ka
    //check kro aws ses ya mailgun ya firebase sab me kuch options honge
   // await sendVerificationEmail(process.env.TEST_MAIL, verificationToken);

    res.status(201).json({
      success: true,
      message: "seller login successfully",
      seller: {
        ...seller._doc,
        password: undefined,
        
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const sellerlogout = async (req,res)=>{
  res.clearCookie("token")
  res.status(200).json({
      success:true,
      message:"Logged out successfully"
  })
}