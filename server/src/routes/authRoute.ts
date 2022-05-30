import express, { Request, Response } from "express";
import User from "../models/User";
const route = express.Router();

route.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).send({ msg: "Users list", users });
});

route.post("/login", async (req: Request, res: Response) => {
  const { username, password, status = false } = req.body;
  const userExist = await User.findOne({ username: username.toLowerCase() });

  if (userExist) {
    if (userExist.password !== password) {
      return res.status(400).send({ msg: "Invalid Password" });
    }
    await User.updateOne(
      { _id: userExist._id },
      {
        $set: {
          status: true,
        },
      }
    );
    return res.status(200).send({
      msg: "User already exist, Welcome",
      username: userExist.username,
    });
  }
  const newUser = new User({
    username: username.toLowerCase(),
    password,
    status: true,
  });
  try {
    await newUser.save();
    res.status(200).send({
      msg: "User Created, Welcome",
      username: newUser.username,
      status,
    });
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.patch("/reset", async (req: Request, res: Response) => {
  try {
    await User.updateMany({}, { $set: { status: false } });
    res.status(200).send({ msg: "all users status reset" });
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.post("/delete", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    await User.deleteOne({ username: username.toLowerCase() });
    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
});
export default route;
