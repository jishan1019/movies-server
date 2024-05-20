import { Router } from "express";
import { MovieControllers } from "./movies.controller";

const router = Router();

router.get("/", MovieControllers.getAllMovies);
router.post("/", MovieControllers.createMovie);

export const MovieRoutes = router;
