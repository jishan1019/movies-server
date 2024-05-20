import mongoose, { Schema } from "mongoose";
import { TMovie, TReview } from "./movies.interface";

const reviewModel = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const moviesModel = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean },
  viewCount: { type: Number, required: true },
  reviews: { type: [reviewModel] },
});
