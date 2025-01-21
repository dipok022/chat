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
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).send({ message: "User already exists" });
    } else if (!validateEmail.test(req.body.email)) {
      return res.status(400).send({ message: "Invalid email" });
    } else if (!passRegex.test(req.body.password)) {
      return res.status(400).send({
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }
    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({ message: "user created successfully", user });
  } catch (error) {
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
