import { listing } from "../models/listing.js";
import { Review } from "../models/reviews.js";


export const isOwner = async(req, res, next) => {
    let { id } = req.params;
let l=await listing.findById(id);
if(!  l.owner.equals(res.locals.currUser._id)){
  req.flash("error","You are not the owner of the listing!");
 return res.redirect(`/listings/${id}`);
}next();
  };
  export const isAuthor = async(req, res, next) => {
    let {id, reviewId} = req.params;
let r=await Review.findById(reviewId);
if(!  r.author.equals(res.locals.currUser._id)){
  req.flash("error","You are not the author of this review!");
 return res.redirect(`/listings/${id}`);
}next();
  };
  