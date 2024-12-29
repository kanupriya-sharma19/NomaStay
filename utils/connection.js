
import mongoose from 'mongoose';
const MONGODB_URL="mongodb+srv://kanu:seema609@cluster0.mmmkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
export const connectToDB = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error("DB connection error:", err));
};
