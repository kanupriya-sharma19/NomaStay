import { User } from "../models/user.js";
import { wrapAsync } from "../utils/wrapAsync.js";

const getForm = wrapAsync(async (req, res, next) => {
  res.render("users/signup.ejs");
});

const postUser = wrapAsync(async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    //sign up karte hi u are logged in vo karne ke liye check below

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      } 
      req.flash("success", "Welcome to NamoStay!");
      res.redirect("/listings/view");
    });
    //login function completes then req.user has something tab tak undefined
    //await registeredUser.save(); no need ,register op
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

const loginForm = wrapAsync(async (req, res, next) => {
  res.render("users/login.ejs");
});



const checkUser = wrapAsync(async (req, res, next) => {
  req.flash("success", "Welcome back to NamoStay!");
 
  if (req.query.redirectUrl) {
    res.locals.redirectUrl = req.query.redirectUrl;
  }
  let redirectUrl = res.locals.redirectUrl || "/listings/view";
  

  res.redirect(redirectUrl);
});


const logOut = wrapAsync(async (req, res, next) => {
  req.logout((err) => {
    //inbuilt method,current session se info delete ho jayegi
    //err callback hai
    //callback means logout hone ke baad kya karna hai
    //callback main error store ho jayega in err
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out successfully!");
    res.redirect("/listings/view");
  });
});

export { getForm, postUser, loginForm, checkUser, logOut };
