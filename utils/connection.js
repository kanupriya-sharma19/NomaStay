import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';


export const connectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error("DB connection error:", err));
};
