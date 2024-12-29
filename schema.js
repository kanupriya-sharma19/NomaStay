import Joi from "joi";

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null), //not neccsarry
    category: Joi.array().items(Joi.string()).min(1).max(3)
  }).required(),
  //listing obj hai and required hai
});

const reviewSchema=Joi.object({
  review: Joi.object({ //review key hai
    //The outer object ensures that the req.body contains a review key.
//The review key must itself be an object.
rating: Joi.number().required().min(1).max(5),
comment: Joi.string().required()

  }).required()
}).unknown(true); 

export{listingSchema,reviewSchema}