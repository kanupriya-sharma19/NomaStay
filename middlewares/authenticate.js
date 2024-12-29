function isloggedin(req,res,next){
  // console.log(req.path,"...",req.originalUrl);
    //req.user se details aa jayegi user ki if loggged in,sessin main user ki info stored hai
  if(!req.isAuthenticated()){
    //now if i am on add new listings page and not logged in to log in karne ke baad i want to go back to add new listings page only,same woth rest
    req.session.redirectUrl=req.originalUrl; //req main session hai as an obj 
    // req main bahut cheeze hai unme se one is original url matlab kahan se aa rahe ho
    //req  main path hota hai jise hum access karna chahte hai, relative
    // originalUrl is full path, redirectUrl hamne define kia

    //this will not work as passport login ke baad session ko reset kar deta hai to
    //redirect url gayab, so locals
    req.flash("error", "You must be logged In!");
   return res.redirect("/login");
  }next();
}

function saveRedirectUrl(req,res,next){
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
  }
  next();
}
export{isloggedin,saveRedirectUrl};