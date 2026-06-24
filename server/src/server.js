import express from "express";
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT
console.log(PORT);

app.get("/health", async(req, res)=>{
    return res.json({
        success: true,
        message: "hello from server"
    })
})

app.listen(PORT, ()=>{
    console.log("server is running on port 8080");
})