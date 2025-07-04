import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from './routes/auth.route.js';
import { connectDB } from "./lib/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`); 
    connectDB();  
});