import { Request, Response } from "express";
import { MovieServices } from "./movies.service";

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMoviesFromDb();

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getSpecificMovies = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await MovieServices.getSpecificMoviesFromDb(id);

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;
    const result = await MovieServices.createMoveIntoDb(movieData);

    res.status(201).json({
      success: false,
      message: "Movie created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const result = await MovieServices.updateMovieFromDb(id, updateData);

    res.status(200).json({
      success: true,
      message: "Movies updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSpecificMovies,
  updateMovie,
};
