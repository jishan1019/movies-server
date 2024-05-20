import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const getAllMoviesFromDb = async () => {
  const result = await Movie.find();
  return result;
};

const getSpecificMoviesFromDb = async (id: string) => {
  const result = await Movie.find({ _id: id });
  return result;
};

const createMoveIntoDb = async (movieData: TMovie) => {
  const result = Movie.create(movieData);
  return result;
};

const updateMovieFromDb = async (id: string, data: TMovie) => {
  const result = await Movie.updateOne({ _id: id }, { $set: data });
  //   const result = await Movie.findOneAndUpdate({ _id: id }, data, { new: true });
  //   const result = await Movie.findByIdAndUpdate({ _id: id }, data, {
  //     new: true,
  //   });

  return result;
};

export const MovieServices = {
  createMoveIntoDb,
  getAllMoviesFromDb,
  getSpecificMoviesFromDb,
  updateMovieFromDb,
};
