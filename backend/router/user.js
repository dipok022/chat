import express from "express";
import userModel from "../model/user.model.js";

const router = express.Router();

// all users
router.get("/users", (req, res) => {
  res.send("Hello, World!");
});

// single user
router.get("/user/:id", (req, res) => {
  res.send(`Hello, World! User with id ${req.params.id}`);
});

// register
router.post("/register", async (req, res) => {
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist)
      return res.status(400).send({ message: "User already exists" });
    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({ message: "user created successfully", user });
  } catch (error) {
    console.log("error", error);

    res.status(400).send(error.message);
  }
});

// login
router.post("/login", (req, res) => {
  res.send("User logged in!");
});

// PUT
router.put("/user/:id", (req, res) => {
  res.send(`Resource with id ${req.params.id} updated!`);
});

// DELETE
router.delete("/user/:id", (req, res) => {
  res.send(`Resource with id ${req.params.id} deleted!`);
});

export default router;
