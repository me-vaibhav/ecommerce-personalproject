import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
    {
    fullname: {
        type: String,
        required: true,
        // zod lowercase: true 
    },
    phone: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // zod lowercase: true,
        // zod trim:true
    },
    password: {
        type: String,
        required: true,
        // zod trim: true    
    },
},{timestamps: true})

export default mongoose.model("Seller", sellerSchema);