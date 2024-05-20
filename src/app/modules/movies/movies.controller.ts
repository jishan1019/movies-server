import { Request, Response } from "express";
import { MovieServices } from "./movies.service";

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

export const MovieControllers = {
  createMovie,
};
