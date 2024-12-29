import express from "express";
import {
  validate_review,
} from "../middlewares/validation.js";
import {isloggedin} from "../middlewares/authenticate.js";
import {
  addReview,
  deleteReview,
} from "../controllers/reviews.js";
import { isAuthor } from "../middlewares/isOwner.js";
const review = express.Router({ mergeParams: true });
//merge params isiliye kyuki routes ke beech main id hai amd defalut hai ki end wala thing is req.params

review.post("/",isloggedin,validate_review, addReview);
review.delete("/:reviewId",isloggedin, isAuthor,deleteReview);
export { review };