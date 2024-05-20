import { Router } from "express";
import { MovieControllers } from "./movies.controller";

const router = Router();

router.post("/", MovieControllers.createMovie);

export const MovieRoutes = router;
