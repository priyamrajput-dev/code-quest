import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    profileImage: {
        type: String,
        default: "",
    },
    clerkId:{
        type: String,
        require:true,
        unique:true
    }
}, {timestamps: true})

export default mongoose.model("User", userSchema)