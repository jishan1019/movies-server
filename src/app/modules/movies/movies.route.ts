import { Router } from "express";
import { MovieControllers } from "./movies.controller";

const router = Router();

router.get("/", MovieControllers.getAllMovies);
router.get("/:id", MovieControllers.getSpecificMovies);
router.post("/", MovieControllers.createMovie);
router.put("/:id", MovieControllers.updateMovie);

export const MovieRoutes = router;
