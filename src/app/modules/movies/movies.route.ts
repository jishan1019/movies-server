import { Router } from "express";
import { MovieControllers } from "./movies.controller";

const router = Router();

router.get("/", MovieControllers.getAllMovies);
router.get("/trending", MovieControllers.getTrendingMovies);
router.get("/:id", MovieControllers.getSpecificMovies);
router.post("/", MovieControllers.createMovie);
router.put("/:id", MovieControllers.updateMovie);
router.delete("/:id", MovieControllers.deleteMovie);

export const MovieRoutes = router;
