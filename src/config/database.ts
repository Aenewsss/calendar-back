import mongoose from "mongoose";
import { config } from "dotenv"
config()

const MONGO_URL: string = process.env.MONGO_URL || ''

mongoose.connect(MONGO_URL)
    .then(() => console.log("Database connected"))
    .catch(e => console.error("Database connection failed"))