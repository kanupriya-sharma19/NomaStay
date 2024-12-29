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


