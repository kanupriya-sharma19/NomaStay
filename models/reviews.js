import mongoose from "mongoose";

const review = new mongoose.Schema({
  comment: { type: String, required: true },

  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now() },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Review = mongoose.model("Review", review);

export { Review };
