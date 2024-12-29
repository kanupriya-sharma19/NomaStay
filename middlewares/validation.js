import { listingSchema ,reviewSchema} from "../schema.js";
import { ExpressError } from "../utils/ExpressError.js";

const validate_listing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errmsg=error.details.map((el)=>el.message).join(",")
    throw new ExpressError(400, errmsg);
  } else {
    next();
  }
};


const validate_review = (req, res, next) => {
 // Debug to ensure the structure is correct
  req.body = { review: req.body.review };
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const message = error.details.map(err => err.message).join(',');
    throw new ExpressError(message, 400);
  } else {
    next();
  }
};

export{validate_listing,validate_review}