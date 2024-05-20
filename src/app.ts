import express, { Request, Response } from "express";
import cors from "cors";
import { MovieRoutes } from "./app/modules/movies/movies.route";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/v1/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running.....");
});

export default app;
