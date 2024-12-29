import express from "express";
import {
  getForm,
  postUser,
  loginForm,
  checkUser,
  logOut,
} from "../controllers/user.js";
import passport from "passport";
import { saveRedirectUrl } from "../middlewares/authenticate.js";
import { User } from "../models/user.js";
import localStrategy from "passport-local";

export const user = express.Router();
user.route("/signup").get(getForm).post(postUser);
user
  .route("/login")
  .get(loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    checkUser
  );
user.get("/logout", logOut);

passport.use(new localStrategy(User.authenticate())); //local startegy ke thru authenticate hone chahiye
passport.serializeUser(User.serializeUser()); //store  data into session of user, basically seralize users into session
passport.deserializeUser(User.deserializeUser()); //remove date from session of user
