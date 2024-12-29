import { ExpressError } from "../utils/ExpressError.js";

export const myerror = (err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    console.error("Error Details:", err); 
    res.status(statusCode).render("error.ejs",{message});
};
