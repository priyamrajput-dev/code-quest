import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connnectDB = async()=>{
    try {
        const conn = await mongoose.connect(ENV.DATABASE_URL);
        console.log("✅ Connected to mongoDB :", conn.connection.host);
    } catch (error) {
        console.error("❌ Error connecting mongoDB", error)
        process.exit();
    }
}
