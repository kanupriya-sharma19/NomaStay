import { listing } from "../models/listing.js";
import { data } from "./data.js";
import { connectToDB } from "../utils/connection.js";
import dotenv from "dotenv";
dotenv.config();

connectToDB();
async function insert() {
  try {
    await listing.deleteMany({}); //already data hai to delete
    data.sampleListings = data.sampleListings.map((obj) => ({
      ...obj,
      owner: "676f7bf64e625c02cb77bd01",
    })); //naya array hai
    await listing.insertMany(data.sampleListings);
    console.log("Listings added successfully.");
  } catch (error) {
    console.error("Error adding listings:", error);
  }
}
insert();
