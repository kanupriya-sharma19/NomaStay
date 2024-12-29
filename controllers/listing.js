import { listing } from "../models/listing.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { cloudinary } from "../utils/cloudConfig.js";

const displayall = wrapAsync(async (req, res, next) => {
  const allist = await listing.find({});
  res.render("listings/index.ejs", { allist });
});

const displayone = wrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const l = await listing
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!l) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings/view");
  }
  res.render("listings/show.ejs", { l });
});

const newlist = wrapAsync(async (req, res, next) => {
  res.render("listings/new.ejs");
});

// async function post(req, res, next) {
//   //aise kar sakte ho let {title,description,price,image,country,location}
//   //but better to make object key in form
//   try {
//     //creating instance,as object hai listing
//     const neww = new listing(req.body.listing);
//     await neww.save();
//     res.redirect("/listings/view");
//   } catch (err) { console.error("Error saving listing:", err);
//     next(err);
//     //calling error handler
//   }
// }

const post = wrapAsync(async (req, res, next) => {
  if (!req.file) {
    throw new ExpressError(400, "Image is required!");
  }

  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  await newListing.save();

  req.flash("success", "New Listing Created!!");
  res.redirect("/listings/view");
});

const newupdateform = wrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const l = await listing.findById(id);
  if (!l) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings/view");
  }

  // Get the image URL from the listing
  let imgUrl = l.image.url;

  // Function to resize image based on the source (Cloudinary or Unsplash)
  function resizeImage(imageUrl, width) {
    if (imageUrl.includes("cloudinary")) {
      // For Cloudinary: Add width transformation
      return imageUrl.replace("/upload", `/upload/w_${width}`);
    } else if (imageUrl.includes("unsplash")) {
      // For Unsplash: Modify the width parameter (w) in the URL
      return imageUrl.replace(/w=\d+/, `w=${width}`);
    }
    return imageUrl; // Return the original image if not Cloudinary or Unsplash
  }

  // Resize the image to 250px wide
  let resizedImage = resizeImage(imgUrl, 250);

  // Pass the resized image to the view
  res.render("listings/edit.ejs", { l, resizedImage });
});

const editone = wrapAsync(async (req, res, next) => {
  let { id } = req.params;

  //deconstructing the edit list by ... from form
  let l = await listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    l.image = { url, filename };
    await l.save();
  }

  req.flash("success", "Listing Updated!!");
  res.redirect(`/listings/${id}`);
});

const deleteone = wrapAsync(async (req, res, next) => {
  let { id } = req.params;
  let user = await listing.findById(id);
  let url = user.image.url;
  let urlPublicId = decodeURIComponent(
    url.split("/").pop().split(".")[0]
  ).trim();
  await cloudinary.uploader.destroy(`Wanderlust_DEV/${urlPublicId}`);
  await listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!!");
  res.redirect(`/listings/view`);
});

const filter = wrapAsync(async (req, res, next) => {
  const { category } = req.params; // e.g., /listings/trending

  try {
    // Find listings that have the selected category in their `category` array
    const allist = await listing.find({
      category: { $in: [category] }, // Match if the category array contains the category
    });

    if (allist.length > 0) {
      res.render("listings/index.ejs", { allist });
    } else {
      req.flash("error", "Listing in this category does not exist!");
      res.redirect("/listings/view");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

const destination = wrapAsync(async (req, res, next) => {
  const { country } = req.query; // Access the country from the query parameter

  try {
    // Find listings that match the selected country
    const allist = await listing.find({ country: country });

    if (allist.length > 0) {
      res.render("listings/index.ejs", { allist });
    } else {
      req.flash(
        "error",
        "Listings in this country are not available currently!"
      );
      res.redirect("/listings/view");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export {
  displayall,
  displayone,
  newlist,
  post,
  newupdateform,
  editone,
  deleteone,
  filter,
  destination,
};
