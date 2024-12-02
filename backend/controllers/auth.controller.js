import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  const { email, password, fullname, phone,confirmPassword } = req.body;
  try {
    if(password !== confirmPassword){
      throw new Error("Passwords do not match")
    }
    if (!email || !password || !fullname || !phone) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    // const verificationToken = Math.floor(
    //   100000 + Math.random() * 900000
    // ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      fullname,
      phone,
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    //await sendVerificationEmail(user.email,verificationToken)    user.email pr email bhejne k liye premium plan lagega mailtrap ka
    //check kro aws ses ya mailgun ya firebase sab me kuch options honge
   // await sendVerificationEmail(process.env.TEST_MAIL, verificationToken);

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: {
        ...user._doc,
        password: undefined,
        R,
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
