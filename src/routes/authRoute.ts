import express, { Request, Response } from "express";

const route = express.Router();

route.get("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log(username, password);
});

export default route;
