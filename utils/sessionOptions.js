import dotenv from "dotenv";
dotenv.config();
import MongoStore from "connect-mongo";


const store=MongoStore.create({
  mongoUrl:"mongodb+srv://kanu:seema609@cluster0.mmmkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  crypto:{
    secret:process.env.SECRET
  },
  touchAfter:24*3600,//session upadte after 24hrs not har bar refersh pe
})
//start and expires changes after u make any changes,14 days is seesion time

 export const sessionOptions = {
  store:store,
    secret: process.env.SECRET,
    resave: false,
    //koi uodate na bhi hua ho tab bhi save karo usko false kia hai
    saveUninitialized: true,
    //jo session initalize bhi nahi hua hai vo bhi store kia hai
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //date.now is in millisec+7 days ko milli
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //used for security,cross scripting attacks se bachne ke liye
      // Prevent client-side JavaScript from accessing the cookie
    },
    //it is used taki tumhe wapis log in karna pade har bar..username,password is stored in cookies
  };