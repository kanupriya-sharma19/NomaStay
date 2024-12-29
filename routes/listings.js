import express from "express";
import { validate_listing } from "../middlewares/validation.js";
import {
  displayall,
  displayone,
  newlist,
  newupdateform,
  post,
  editone,
  deleteone,filter,destination
} from "../controllers/listing.js";
import { isloggedin } from "../middlewares/authenticate.js";
import { isOwner } from "../middlewares/isOwner.js";
import multer from "multer"; //used to parse multipart/form-data
import { storage } from "../utils/cloudConfig.js";

const upload = multer({ storage:storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  }
 });
const list = express.Router();

//isse order main rakha hai as /id bhi hai,to new,view ko id na samjh le
list.get("/view", displayall);
list.get("/new", isloggedin, newlist);
list.get("/destination",destination );
list.get("/view/:category", filter);
list.post("/create", isloggedin, upload.single("listing[image]"),validate_listing,post);
list
  .route("/:id")
  .get(displayone)
  .put(isloggedin, isOwner, upload.single("listing[image]"),validate_listing, editone)
  .delete(isloggedin, isOwner, deleteone);
list.get("/:id/edit", isloggedin, isOwner, newupdateform);


export { list };
