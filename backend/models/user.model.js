import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)

