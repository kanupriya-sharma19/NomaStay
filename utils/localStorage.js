export const temp_storage = ( req, res, next) => {
    res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
};
