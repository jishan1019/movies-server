import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const createMoveIntoDb = async (movieData: TMovie) => {
  const result = Movie.create(movieData);
  return result;
};

export const MovieServices = { createMoveIntoDb };
