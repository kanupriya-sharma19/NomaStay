import { listing } from "../models/listing.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { Review } from "../models/reviews.js";

const addReview = wrapAsync(async (req, res, next) => {
    const listingId = req.params.id;
    const l = await listing.findById(listingId);
    const newReview = new Review(req.body.review);
newReview.author=req.user._id;
    l.reviews.push(newReview);
    await newReview.save();
    await l.save();
    req.flash("success","New Review Created!!");
    res.redirect(`/listings/${listingId}`);
});


const deleteReview = wrapAsync(async (req, res, next) => {
    const listingId = req.params.id;
    const reviewId = req.params.reviewId;
    await listing.findByIdAndUpdate(listingId, { $pull: { reviews: reviewId } }); // Use $pull operator to remove from array
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!!");
    res.redirect(`/listings/${listingId}`);
});

export {
    addReview,
    deleteReview
};
