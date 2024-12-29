import express from "express";
import dotenv from "dotenv";
import ejsMate from "ejs-mate";
import path from "path";
import { fileURLToPath } from "url";
import { connectToDB } from "./utils/connection.js";
import { list } from "./routes/listings.js";
import { review } from "./routes/reviews.js";
import { user } from "./routes/user.js";
import methodOverride from "method-override";
import { myerror } from "./middlewares/myerror.js";
import { ExpressError } from "./utils/ExpressError.js";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import { sessionOptions } from "./utils/sessionOptions.js";
import { temp_storage } from "./utils/localStorage.js";
import { User } from "./models/user.js";
import localStrategy from "passport-local";
import { displayall } from "./controllers/listing.js";

// Recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
connectToDB();

// Set up EJS
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware setup
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: true })); // URL-encoded data parser, key value form,makes it accesible via req.body
app.use(methodOverride("_method")); // Override HTTP methods

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

//Sessions before routes

app.use(session(sessionOptions));
app.use(flash());

//passport uses session as 1 session hi hona chahiye
app.use(passport.initialize());
app.use(passport.session()); //pata chale ki if user goes from page to page then 1 session
passport.use(new localStrategy(User.authenticate())); //local startegy ke thru authenticate hone chahiye
passport.serializeUser(User.serializeUser()); //store  data into session of user, basically seralize users into session
passport.deserializeUser(User.deserializeUser()); //remove date from session of user
app.get("/test", (req, res) => {
  res.send("Test route works!");
});

//middlware to store locally
app.use(temp_storage);

app.get("/", displayall);

// Routes
app.use("/listings", list);
app.use("/listings/:id/review", review);
app.use("/", user);

// Error handling middleware (must be placed after all routes)
app.all("*", (req, res, next) => {
  console.log("Request URL not found:", req.originalUrl);
  next(new ExpressError(404, "Page not found!"));
});

app.use(myerror);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
