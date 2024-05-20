import mongoose, { Schema, model } from "mongoose";
import { TMovie, TReview } from "./movies.interface";

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const moviesSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean },
  viewCount: { type: Number },
  reviews: { type: [reviewSchema] },
});

moviesSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

moviesSchema.pre("findOne", function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

export const Movie = model<TMovie>("Movie", moviesSchema);
