import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: String,
});

export const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantModel);
